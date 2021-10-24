import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, StyleSheet, View, FlatList, ImageBackground } from 'react-native'
import urlRequest from '../components/requestSet/request'
import Team from '../components/team'

export default function Teams() {

    const [allTeams, setAllTeams] = useState([])

    useEffect(() => {
        urlRequest("https://www.balldontlie.io/api/v1/teams")
            .then(res => setAllTeams(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <ImageBackground style={styles.bg} source={require('../assets/bg2.jpg')}>
                <View style={styles.allTeams}>
                    <Text style={styles.title}>
                        all teams: {allTeams.length}
                    </Text>
        
                    <View>
                        <FlatList 
                            data={allTeams}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => {
                                return (<Team team={item}/>)
                            }}
                        />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
    },
    title:{
        color: '#fff',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 24
    },
    text: {
        color: '#fff',
    },
    bg:{
        flex: 1
    },
    allTeams: {
        padding: 10
    },
})