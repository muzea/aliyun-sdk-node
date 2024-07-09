export interface DescribeAntChainTransactionV2Request {
    /**
     * 区块链ID
     * @example `8bd720bde18c4b37b0f4a1c7834db163`
     */
    "AntChainId": string;
    /**
     * 交易哈希
     * @example `227072dcd1a5d78098da99ccc8024304b9fb54fc6b65e37ef919d7f2da080061`
     */
    "Hash": string;
    /**
     * 联盟ID
     * @example `M8GaMEyX`
     */
    "ConsortiumId"?: string;
}
