export interface DescribeWeb3RiskScoreRequest {
    /**
     * A unique business ID for tracing purpose. For example，the sequence ID from the merchant's business-related database.
     * @example `e0c34a353888`
     */
    "MerchantBizId"?: string;
    /**
     * The object of the analysis.
     * [ TRANSACTION, ADDRESS ]
     * @example `TRANSACTION`
     */
    "ObjectType"?: string;
    /**
     * For TRANSACTION objects, you need to provide the transaction hash。
     * For ADDRESS objects, you need to provide the address or reference address hash。
     * @example `0000980145045a5c5acad3d2df0cf3b2afxxxxxx`
     */
    "ObjectId"?: string;
    /**
     * This is the short name of blockchain。
     * [ ETH, MATIC, BNB ]
     * @example `ETH`
     */
    "ChainShortName"?: string;
    /**
     * minimum: 1
     * maximum: 100
     * the maximum depth for risk analysis. For UTXO-based blockchains, default and maximum is enforced at 100.
     * For account-based blockchains, default and maximum is enforced at 6
     * @example `2`
     */
    "Depth"?: number;
}
