import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, ImageBackground, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Divider, List, Paragraph, Title } from 'react-native-paper';



const PaginaInicial = ({navigation, route}) => {

    const login = () => (
        <Avatar.Text size={24} label="SS" />
      );

    return (
        
        

        <ScrollView margin={10}>
                    <Avatar.Icon size={35} icon="menu" onPress={() => navigation.push('Filmes/populares', {id: filme.id})} />  
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}} key={login}> 
                             <Avatar.Text  size={55} label="SS"/>
                    </View> 
        <Text> Inicie sua sessão Cinema</Text>
         
  
      <Card>
         <Card.Content>
          <Title>Filmes Populares</Title>
             <Paragraph>Aqui você encontrará os melhores filmes para sua sessão cinema. Partiu?</Paragraph>
         </Card.Content>
         
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      
      <Button marginTop={10} icon="camera-burst" mode="contained" onPress={() => navigation.push('Filmes/populares')}> 
          Buscar por Filmes Populares
          </Button>
            
    </Card>
  
   
      <Divider/>
   

  
      </ScrollView>    
     
     
    )
}

export default PaginaInicial
