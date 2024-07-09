export interface DescribeWeb3TransactionLabelsRequest {
    /**
     * A unique business ID for tracing purpose. For example，the sequence ID from the merchant's business-related database.
     * @example `e0c34a353888`
     */
    "MerchantBizId"?: string;
    /**
     * The Transaction hash.
     * @example `c92880148d4896d8a2093a891a8f08916fe141fba474ede4101f81fb2bxxxxxx`
     */
    "Transaction"?: string;
    /**
     * This is the short name of blockchain。
     * [ ETH, MATIC, BNB ]
     * @example `ETH`
     */
    "ChainShortName"?: string;
}
