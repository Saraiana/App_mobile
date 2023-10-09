import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Avatar, Card, Divider, List, Paragraph, Title } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = ({navigation, route}) => {

const [filme, setFilme] = useState({})
const [atores, setAtores] = useState([])

useEffect(() => {
    const id = route.params.id

    apiFilmes.get('/movie/' + id + '?language=pt-BR').then(resultado => {
        setFilme(resultado.data)
    })
    
    
    apiFilmes.get('/movie/' + id + '/credits?language=pt-BR').then(resultado => {
        setAtores(resultado.data.cast)
    })

}, [])

    const imagemAtor = (foto) => {
        if(foto){
            return <Avatar.Image size={50} source={{ uri: 'https://image.tmdb.org/t/p/w500/'+ foto }} />
        } else {
            return <Avatar.Icon size={50} icon="camera-off" />
        }
    }

    return (
        <ScrollView>
                {filme.id &&
                <>
                    
                     <Card>
                    <Image 
                 style={{height: 580, width: 415}}
                 source={{ uri: 'https://image.tmdb.org/t/p/w500/'+ filme.poster_path }}/>
                  <Title>{filme.title}</Title>
                    <Paragraph>Sinopse: {filme.overview}</Paragraph>
                    <Paragraph>Data de lançamento: {filme.release_date}</Paragraph>
                     </Card>
 
                    <Text style={{fontSize: 25}}>Atores</Text>
                    {atores.map(ator => (
                   <View key={ator.id}> 
                        <List.Item onPress={() => navigation.push('Atores/detalhes', {id: ator.id})}
                             title={ator.name}
                             description={ator.character}
                             left={() => imagemAtor(ator.profile_path)}
                        />
                        <Divider />
                    </View> 
                ))}

                </>
            }

        </ScrollView>
    )
}

export default FilmesDetalhes
