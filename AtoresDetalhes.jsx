import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { Avatar, Card, List, Paragraph, Title } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'

const AtoresDetalhes = ({navigation, route}) => {


    const [ator, setAtor] = useState({})
    const [filmes, setFilmes] = useState([])

    useEffect(() =>{
        const id = route.params.id

        apiFilmes.get('/person/' + id + '?language=pt-BR').then(resultado => {
            setAtor(resultado.data)

        })

        apiFilmes.get('/person/' + id + '/movie_credits?language=pt-BR').then(resultado=>{
            setFilmes(resultado.data.cast)

        })

    }, [route])


    const imagemFilme = (foto) => {
        if(foto){
            return <Avatar.Image size={50} source={{ uri: 'https://image.tmdb.org/t/p/w500/'+ foto }} />
        } else {
            return <Avatar.Icon size={50} icon="image-off" />
        }
    }

       return (
<ScrollView>
        {ator.id &&
        <>
            
             <Card>
            <Image 
         style={{height: 580, width: 415}}
         source={{ uri: 'https://image.tmdb.org/t/p/w500/'+ ator.profile_path }}/>
          <Title>{ator.name}</Title>                

            <View key={ator.id}>
            <Paragraph>Biografia: {ator.biography}
            </Paragraph>
            <Paragraph>Nascimento: {ator.birthday} / {ator.place_of_birth}</Paragraph>
            </View>
             </Card>
                
             <Text style={{fontSize: 25}}>Filmes</Text>
                    {filmes.map(filme => (
                   <View key={filme.id}> 
                        <List.Item onPress={() => navigation.push('Filmes/detalhes', {id: filme.id})}
                             title={filme.title}
                             left={() => imagemFilme(filme.poster_path)}
                        />
                    </View> 
                ))}
        </>
    }

</ScrollView>

    )
}

export default AtoresDetalhes
