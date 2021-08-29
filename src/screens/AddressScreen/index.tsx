import React, { useState } from 'react'
import { View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import countryList from 'country-list'
import styles from './style'
import Button from '../../components/Button'

const countries = countryList.getData();


const AddressScreen = () => {
    const [country, setCountry] = useState(countries.[0].code)
    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')

    const [address, setAddress] = useState('')
    const [addressError, setAddressError] = useState('')

    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    console.log(fullName)
    
    const onCheckout = () => {
        if(!fullName){
             Alert.alert('Por favor llena el apartado del nombre.');
             return;
        }
        if(!phone){
             Alert.alert('Por favor llena el apartado del Número telefónico.');
             return;
        }
    }

    const validateAddress = () => {
        if(address.length < 3){
            setAddressError('La dirección es muy corta')
        }
    }

    return (
        <KeyboardAvoidingView>
            <ScrollView style={styles.root}>
                <View style={styles.row}>
                    <Picker
                    selectedValue={country}
                    onValueChange={setCountry}
                    >
                        {countries.map((country) => (
                            <Picker.Item label={country.name} value={country.code} />
                        ))}
                        
                    </Picker>
                </View>
                {/* Nombre */}
                <View style={styles.row}>
                    <Text style={styles.label}>Nombre completo (Nombres(s) y apellido paterno)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Nombre completo'
                        value={fullName}
                        onChangeText={setFullName}
                    />
                </View>
                {/* Numero de telefono */}
                <View style={styles.row}>
                    <Text style={styles.label}>Número telefónicor</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Número telefónico'
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType={'phone-pad'}
                    />
                </View>
                {/* direccion*/}
                <View style={styles.row}>
                    <Text style={styles.label}>Dirección</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Calle, Numero exterior'
                        value={address}
                        onEndEditing={validateAddress}
                        onChangeText={(text) => {
                            setAddress(text); 
                            setAddressError('')
                        }}
                        
                    />
                    {!!addressError && (
                            <Text style={styles.labelError}>{addressError}</Text>
                    )}
                </View>
                {/* Ciudad */}
                <View style={styles.row}>
                    <Text style={styles.label}>Ciudad</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Ciudad'
                        value={city}
                        onChangeText={setCity}
                        
                    />
                </View>
                {/* Estado */}
                <View style={styles.row}>
                    <Text style={styles.label}>Estado</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Estado'
                        value={state}
                        onChangeText={setState}
                        
                    />
                </View>
                {/* Cp */}
                <View style={styles.row}>
                    <Text style={styles.label}>Codigo Postal</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='CP'
                        value={zipCode}
                        onChangeText={setZipCode}
                        keyboardType={'phone-pad'}
                    />
                </View>          

                <Button text='Usar esta direción' onPress={onCheckout}/>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddressScreen
