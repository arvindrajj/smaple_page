import React from 'react'
import {Colors} from '../colors'

interface MoneyTemp {
  id: number,
  moneyType: string,
  total: number | string,
} 

interface CoustomerTemp {
    customerId: number,
    date: number,
    fullDate: string,
    teamMember: string,
    amountRecived: number | string,
    recivedCash: number | string,
    receivedCheque: number | string,
    NoOfPayments: string,
    cashierName: string,
}

interface Customer {
    teamHeaders: string[],
    teamDetails: CoustomerTemp[],

}

function createItems<Type>(items:Type[]):Type[]{return [...items]}


let zonoMoney = createItems<MoneyTemp>([
    {   
        id: 1,
        moneyType: 'total Money Received', 
        total: '2,35,875,45'
    },
    {
        id: 2,
        moneyType: 'total Number Of Payments',
        total: 434,
    },
    {
        id: 3,
        moneyType: 'Amount Recived By Cash',
        total: '1,98,879',
    },
    {
        id: 4,
        moneyType: 'Amount Received By Cheque',
        total: 545,
    },
    {
        id: 5,
        moneyType: 'Amount Received By Others',
        total: 754,
    },
])

let customers:Customer = {
    teamHeaders: ['Date', 'Team Member', 'Amount Recived', 'Recived Cash', 'Received Cheque', 'No Of Payments', 'Cashier Name'],
    teamDetails: [
        { 
            customerId: 1,
            date: 24, 
            fullDate: 'september,2020',
            teamMember: 'Mahesh sharma',
            amountRecived: '24,000',
            recivedCash: '24,000',
            receivedCheque: '-',
            NoOfPayments: '5 Pyments',
            cashierName: 'Manish Kumar',
        },
        {
            customerId: 2,
            date: 24, 
            fullDate: 'september,2020',
            teamMember: 'Mahesh sharma',
            amountRecived: '24,000',
            recivedCash: '24,000',
            receivedCheque: '-',
            NoOfPayments: '5 Pyments',
            cashierName: 'Manish Kumar',
        },
        {
            customerId: 3,
            date: 24, 
            fullDate: 'september,2020',
            teamMember: 'Mahesh sharma',
            amountRecived: '24,000',
            recivedCash: '24,000',
            receivedCheque: '-',
            NoOfPayments: '5 Pyments',
            cashierName: 'Manish Kumar',
        },
        {
            customerId: 4,
            date: 24, 
            fullDate: 'september,2020',
            teamMember: 'Mahesh sharma',
            amountRecived: '24,000',
            recivedCash: '24,000',
            receivedCheque: '-',
            NoOfPayments: '5 Pyments',
            cashierName: 'Manish Kumar',
        },
        {
            customerId: 5,
            date: 24, 
            fullDate: 'september,2020',
            teamMember: 'Mahesh sharma',
            amountRecived: '24,000',
            recivedCash: '24,000',
            receivedCheque: '-',
            NoOfPayments: '5 Pyments',
            cashierName: 'Manish Kumar',
        },
        {
            customerId: 6,
            date: 24, 
            fullDate: 'september,2020',
            teamMember: 'Mahesh sharma',
            amountRecived: '24,000',
            recivedCash: '24,000',
            receivedCheque: '-',
            NoOfPayments: '5 Pyments',
            cashierName: 'Manish Kumar',
        },
        {
            customerId: 7,
            date: 24, 
            fullDate: 'september,2020',
            teamMember: 'Mahesh sharma',
            amountRecived: '24,000',
            recivedCash: '24,000',
            receivedCheque: '-',
            NoOfPayments: '5 Pyments',
            cashierName: 'Manish Kumar',
        },
        {
            customerId: 8,
            date: 24, 
            fullDate: 'september,2020',
            teamMember: 'Mahesh sharma',
            amountRecived: '24,000',
            recivedCash: '24,000',
            receivedCheque: '-',
            NoOfPayments: '5 Pyments',
            cashierName: 'Manish Kumar',
        },
        {
            customerId: 9,
            date: 24, 
            fullDate: 'september,2020',
            teamMember: 'Mahesh sharma',
            amountRecived: '24,000',
            recivedCash: '24,000',
            receivedCheque: '-',
            NoOfPayments: '5 Pyments',
            cashierName: 'Manish Kumar',
        },
        {
            customerId: 10,
            date: 24, 
            fullDate: 'september,2020',
            teamMember: 'Mahesh sharma',
            amountRecived: '24,000',
            recivedCash: '24,000',
            receivedCheque: '-',
            NoOfPayments: '5 Pyments',
            cashierName: 'Manish Kumar',
        },
        {
            customerId: 11,
            date: 24, 
            fullDate: 'september,2020',
            teamMember: 'Mahesh sharma',
            amountRecived: '24,000',
            recivedCash: '24,000',
            receivedCheque: '-',
            NoOfPayments: '5 Pyments',
            cashierName: 'Manish Kumar',
        },

    ],

}

console.log(customers)

const Receiving = () => {
    
    return (
        <div style={{backgroundColor: Colors.zonoBlackishShade ,height: "80vh"}}>
            <ul style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 0,
                    marginTop: 35,
                    width: '95%',
                    margin: 'auto',
                    paddingLeft: '9px',
                    listStyleType: 'none',
                    backgroundColor: Colors.zonoMidnightGrety,
                    borderRadius: 6,
                  }}>
                {zonoMoney.map(each => (
                    <li 
                      key={each.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '100%',
                        alignItems: 'center',
                      }}
                    >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                          }}
                        >
                            <p style={{color: '#909195', fontSize: '13px', marginBottom: 3, }}>{each.moneyType}</p>
                            <h1 style={{color: '#ffffff', fontSize: '19px', marginTop: 0,}}><sup style={{fontSize: '11px'}}>₹</sup>{each.total}</h1>
                        </div>
                        {each.id !== 5 && (
                             <div style={{
                                height: '50%',
                                width: 1,
                                backgroundColor: '#909195',
                           }}></div>
                        )}
                    </li>
                ))}
            </ul>
            <table 
                style={{
                  color: '#ffffff',
                  width: '95%',
                  margin: 'auto', 
                  borderSpacing: 0,
                }}>
                <tr>
                  {customers.teamHeaders.map(each => (
                    <th style={{width: "15.65%"}}>
                     <p style={{color: '#909195', fontSize: '12px'}}>{each}</p>
                     <hr style={{
                        maxHeight: 0.3,
                        width: '100%',
                        backgroundColor: '#909195',
                      }}  
                    />
                    </th>
                  ))}
                </tr>
                {customers.teamDetails.map(item => {
                  const backgroundColor = item.customerId % 2 === 0 ? Colors.zonoMidnightGrety : 'none'  
                  return (
                    <tr style={{
                        textAlign: 'center',
                        fontSize: '13px',
                        height: '36px',
                        backgroundColor: backgroundColor,
                        padding: 10,
                       }}
                       key={item.customerId}
                       >
                          <td>{item.date}<sup style={{fontSize: '11px'}}>th</sup>{item.fullDate}</td>
                          <td>{item.teamMember}</td>
                          <td>{item.amountRecived}</td>
                          <td>{item.recivedCash}</td>
                          <td>{item.receivedCheque}</td>
                          <td>{item.NoOfPayments}</td>
                          <td>{item.cashierName}</td>
                       </tr> 
                  )  
                })}
            </table>
        </div>
    )
}

export default Receiving
