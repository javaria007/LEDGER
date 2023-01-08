import React, { useEffect, useState, useMemo } from "react";
import {
    View,
    Alert,
    Keyboard
} from 'react-native';
import styles from "./styles";
import ApiManager from "../ApiManger";
import axios from "axios";
import {
    TextInput, Text, Button,
} from "@react-native-material/core";
import { Table, Row, Rows, } from 'react-native-table-component';
import { ThemeColors } from "./colors";
const ShowLedgerScreen = (props) => {
    const [applicationId, setApplicationId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [tableData, setTableData] = useState();
    const [visible, setVisible] = useState(false);
    const [inputError, setError] = useState('')
    const [apiError, setApiError] = useState('');
    const FetchDataButton = () => {
        const validateInput = () => { //function to check inputfield is not empty
            let check = true;
            if (applicationId == null || applicationId == 0) {
                check = false;
                setError('ApplicationId is not valid');
            }
            return check;

        }
        const onPress = () => {
            if (validateInput()) {
                setLoading(true);
                ApiManager.fetchApiData(applicationId, onResponse, onError)
            }
        }
        return (
            <Button
                title="Fetch Data"
                loading={loading}
                uppercase={false}
                titleStyle={styles.fetchDataTitle}
                disableElevation
                color={ThemeColors.primary}
                onPress={onPress}
                style={styles.fetchDatabtn} />
        )
    }
    const onResponse = (response) => {
        setLoading(false);
        var filterId = response.data.data.map((item) => {
            return [item.date, item.description, item.total_due]
        })
        setTableData(filterId)
    }
    const onError = (error) => {
        setLoading(false);
        Alert.alert('Error', error.message)

    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Ledger</Text>
            <TextInput
                color={ThemeColors.primary}
                variant="outlined"
                leadingContainerStyle={styles.textInput}
                label="Application Id"
                keyboardType="numeric" //restrict user to enter numbers only
                onFocus={() => setError('')}
                onSubmitEditing={() => { Keyboard.dismiss() }}
                value={applicationId}
                onChangeText={(val) => setApplicationId(val)} />
            {
                inputError != null &&
                <Text style={styles.error}>{inputError}</Text>
            }
            <FetchDataButton />
            {tableData?.length > 0?
                <Table borderStyle={styles.table}>
                    <Row data={['Date', 'Description', 'Total Due']} style={styles.head} textStyle={styles.headText} />
                    <Rows data={tableData} textStyle={styles.rowText} />
                </Table>

            :
                <View style={styles.emptyView}>
            <Text style={styles.emptyText}>{'No data Available '}</Text>
            </View>}
        </View>
    );
};

export default ShowLedgerScreen; 