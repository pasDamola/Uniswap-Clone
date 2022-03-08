export const transactionSchema = {
    name: 'transactions', /* transactions */
    title: 'Transactions', /* Transactions */
    type: 'document', /* document */
    fields: [
        {
            name: 'txHash', /* txHash */
            title: 'Transaction Hash',
            type: 'string',
        },
        { 
            name: 'fromAddress',
            title: 'From (Wallet Address)',
            type: 'string',
        },
        { 
            name: 'toAddress', /* toAddress */
            title: 'To (Wallet Address)',
            type: 'string',
        },
        {
            name: 'amount', /* amount */
            title: 'Amount', /* Amount */
            type: 'number',
        },
        { 
          name: 'timestamp', /* timestamp */
          title: 'Timestamp',
          type: 'datetime',  
        }
    ],
}