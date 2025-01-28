import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri:'https://cdn.britannica.com/82/183382-050-D832EC3A/Detail-head-crown-Statue-of-Liberty-New.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Statue Of Liberty</Text>
            <Text style={styles.cardLabel}>Liberty Island, New York</Text>
            <Text style={styles.cardDescription}>The Statue of Liberty 
                is a colossal neoclassical sculpture 
                on Liberty Island in New York Harbor,
                within New York City. The copper-clad statue, 
                a gift to the United States from the people of France, 
                was designed by French sculptor Frédéric Auguste Bartholdi 
                and its metal framework was built by Gustave Eiffel.</Text>
                <Text style={styles.cardFooter}>8 minutes away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 380,
        height: 430,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6
    },
    cardLabel: {
        color: '#000000',
        fontSize: 16,
        marginBottom: 6

    },
    cardDescription: {
        color: '#47535E',
        fontSize: 14,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000'
    }
})