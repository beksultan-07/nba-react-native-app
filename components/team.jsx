import React, { useState } from 'react'
import { Text, StyleSheet,TouchableOpacity, View, Modal, SafeAreaView } from 'react-native'

export default function Team({team}) {
    const [modalVis, setModalVis] = useState(false)

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => setModalVis(!modalVis)}>
                <Text style={styles.text}>
                    {team.id + team.full_name} 
                </Text>
            </TouchableOpacity>

            <Modal
                presentationStyle='formSheet'
                animationType='slide'
                visible={modalVis}
            >   
                <SafeAreaView>
                    <Text style={ styles.close} onPress={() => setModalVis(!modalVis)}>&times;</Text>
                    <Text style={styles.text}>name: {team.full_name} </Text>
                    <Text style={styles.text}>abbreviation: {team.abbreviation} </Text>
                    <Text style={styles.text}>city: {team.city} </Text>
                    <Text style={styles.text}>conference: {team.conference} </Text>
                    <Text style={styles.text}>division: {team.division} </Text>
                    <Text style={styles.text}>name: {team.name} </Text>

                </SafeAreaView>
            </Modal>
        </SafeAreaView>
    )
}


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