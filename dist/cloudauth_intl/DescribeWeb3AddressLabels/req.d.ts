export interface DescribeWeb3AddressLabelsRequest {
    /**
     * A unique business ID for tracing purpose. For example，the sequence ID from the merchant's business-related database.
     * @example `dso932dsjsd22`
     */
    "MerchantBizId"?: string;
    /**
     * The address hash.
     * @example `0000980145045a5c5acad3d2df0cf3b2afxxxxxx`
     */
    "Address"?: string;
    /**
     * This is the short name of blockchain。
     * [ ETH, MATIC, BNB ]
     * @example `ETH`
     */
    "ChainShortName"?: string;
}
