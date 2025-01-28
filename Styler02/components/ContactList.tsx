import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Aditya Mandaleeka',
            status: 'Employer of Microsoft',
            imageUrl: 'https://avatars.githubusercontent.com/u/219224?v=4'
        },
        {
            uid: 2,
            name: 'Zihao Chen',
            status: 'Programmer from Shanghai',
            imageUrl: 'https://avatars.githubusercontent.com/u/5901497?v=4'
        },
        {
            uid: 3,
            name: 'Ankita Khera',
            status: 'Dev on Roslyn',
            imageUrl: 'https://avatars.githubusercontent.com/u/40616383?v=4'
        },
        {
            uid: 4,
            name: 'Aman Khalid',
            status: 'Guy with beautiful smile',
            imageUrl: 'https://avatars.githubusercontent.com/u/58230338?v=4'
        },
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView 
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image 
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff'
    },
    userStatus: {
        fontSize: 12,
        color: '#A4B0BD'
    }

})