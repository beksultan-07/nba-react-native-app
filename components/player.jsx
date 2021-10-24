import React, { useState } from 'react'
import { Text, StyleSheet,TouchableOpacity, View, Modal, SafeAreaView } from 'react-native'

export default function Player({player}) {
    const [modalVis, setModalVis] = useState(false)

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => setModalVis(!modalVis)}>
                <Text style={styles.text}>
                    {player.id + ' ' + player.first_name + ' ' +  player.last_name} 
                </Text>
            </TouchableOpacity>

            <Modal
                presentationStyle='formSheet'
                animationType='slide'
                visible={modalVis}
            >   
                <SafeAreaView>
                    <Text style={ styles.close} onPress={() => setModalVis(!modalVis)}>&times;</Text>
                    <Text style={styles.text}>name: {player.first_name + ' ' +  player.last_name} </Text>
                    <Text style={styles.text}>height feet: {(player.height_feet == null) ? 'undefind': player.height_feet} </Text>
                    <Text style={styles.text}>height inches: {(player.height_inches== null) ? 'undefind': player.height_inches} </Text>
                    <Text style={styles.text}>team: {player.team.full_name} </Text>
                    <Text style={styles.text}>city: {player.team.city} </Text>
                </SafeAreaView>
            </Modal>
        </SafeAreaView>
    )
}

// (company == 'Netscape') ?
//    alert('Верно!') : alert('Неправильно.');

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        fontSize: 20,
        backgroundColor: '#000',
        marginBottom: 15,
        borderRadius: 10
    },
    close:{
        padding: 20,
        color: '#fff',
        fontSize: 30,
        textAlign: 'right'
    }
})