import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, StyleSheet, FlatList, ImageBackground, View, TouchableOpacity } from 'react-native'
import Player from '../components/player'
import urlRequest from '../components/requestSet/request'

export default function Players() {
    const [players, setPlayers] = useState([])
    const [nextPage, setNextPage] = useState(0)
    const [prevPage, setPrevPage] = useState(0)


    useEffect(() => {
        setPlayers([])
        let res = nextPage - prevPage
        urlRequest(`https://free-nba.p.rapidapi.com/players?page=${res}&per_page=25`)
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err))
    }, [nextPage, prevPage])


    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <ImageBackground source={require('../assets/bg1.jpg')} style={styles.bg}>
                <View style={styles.allPLayers}>
                    <Text style={styles.title}>all players: {players.length}</Text>
                    <Text style={styles.title}>page: {nextPage - prevPage}</Text>

                    <FlatList 
                        data={players}
                        keyExtractor={item => item.id}
                        renderItem={({item, index}) => {
                            if (index == players.length-1){
                                return (
                                    <>
                                        <Player player={item}/>
                                        <View style={styles.controllBtn}>
                                            <TouchableOpacity style={styles.btn} disabled={prevPage <= 0} onPress={() => setPrevPage(val => val+1)} >
                                                <Text style={styles.btnText}>Prev</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.btn} disabled={(nextPage > 150)} onPress={() => setNextPage(val => val+1)}>
                                                <Text style={styles.btnText}>Next</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </>
                                )
                            }
                            return (<Player player={item}/>)
                        }}
                    />
            
                </View>
            </ImageBackground>
            {/* <View style={{paddingBottom: 30}}></View> */}
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
    allPLayers: {
        padding: 10
    },
    controllBtn:{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 100
    },
    btn: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#000',
        borderRadius: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    },  
})