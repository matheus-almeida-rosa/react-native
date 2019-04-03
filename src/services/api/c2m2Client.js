import React from 'react';

var url = 'hmg.c2m2.take.io/v2';

export function getAttendanceList() {
    return [
        {
            name: 'Estou sem luz',
            avatar: require('../../../assets/PowerOutage.png'),
            description: 'Estou sem luz'
        },
        {
            name: 'Meus débitos',
            avatar: require('../../../assets/Debt.png'),
            description: 'Meus débitos'
        },
        {
            name: 'Mudança de endereço',
            avatar: require('../../../assets/ChangeAddress.png'),
            description: 'Mudança de endereço'
        },
        {
            name: 'Histórico de atendimento',
            avatar: require('../../../assets/AttendanceHistory.png'),
            description: 'Histórico de atendimento'
        },
        {
            name: 'Corte para conserto',
            avatar: require('../../../assets/MaintenanceCutOff.png'),
            description: 'Corte para conserto'
        },
        {
            name: 'Segunda via',
            avatar: require('../../../assets/DuplicateBill.png'),
            description: 'Segunda via'
        },
        {
            name: 'Conta por email',
            avatar: require('../../../assets/BillByEmail.png'),
            description: 'Conta por email'
        },
        {
            name: 'Religa',
            avatar: require('../../../assets/DisconnectorReplacement.png'),
            description: 'Religa'
        },
        {
            name: 'Mudança de endereço',
            avatar: require('../../../assets/ChangeAddress.png'),
            description: 'Mudança de endereço'
        }
    ];
};

export function getPendingDebts() {
    return [
        {
            date: 'jan 2019'
        },
        {
            date: 'fev 2019'
        }
    ]
};