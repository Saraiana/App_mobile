import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { Row, Column as Col} from 'react-native-responsive-grid'

const FilmesPopulares = ({navigation}) => {

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        apiFilmes.get('/movie/popular?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.results);
        })
    },[])

    return (
        <ScrollView margin={10}>
            {filmes.map(filme => (
            <Card key={filme.id} marginBottom={10} onPress={() => navigation.push('Filmes/detalhes', {id: filme.id})}>
                <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/'+ filme.poster_path }} />
                <Card.Content>
                    <Title>{filme.title}</Title>
                     
                     <Paragraph>
                         <Row>
                         <Col size={50}>
                             <Text>
                            <Avatar.Icon size={26} icon="star" color="yellow" /> {filme.vote_average}
                            </Text>
                         </Col>
                         
                         <Col size={50}>
                         <Text>
                            <Avatar.Icon containerStyle={{flex: 3, marginLeft:100}} size={26} icon="video" color="white" /> {filme.popularity} 
                        </Text>
                        </Col>  
                        </Row>
                     </Paragraph>
                          
                                             
                </Card.Content>
          </Card>
            ))}
        </ScrollView>
    )
}

export default FilmesPopulares
