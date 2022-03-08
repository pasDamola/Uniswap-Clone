export const userSchema = {
    name: 'users', /* users */
    title: 'Users', /* Users */
    type: 'document',
    fields: [
        { 
            name: 'address', /* address */
            title: 'Wallet Address',
            type: 'string',
        },
        {
            name: 'userName', /* userName */
            title: 'User Name',
            type: 'string',
        },
        {
            name: 'transactions',
            title: 'Transactions',
            type: 'array',
            of: [
                {
                    type: 'reference', /* reference */
                    to: [{ type: 'transactions'}],
                }
            ]
        }
    ]
    
}