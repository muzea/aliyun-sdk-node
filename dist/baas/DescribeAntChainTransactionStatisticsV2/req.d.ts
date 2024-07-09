export interface DescribeAntChainTransactionStatisticsV2Request {
    /**
     * 区块链ID
     * @example `8bd720bde18c4b37b0f4a1c7834db163`
     */
    "AntChainId": string;
    /**
     * 统计开始时间
     * @example `1609084800000`
     */
    "Start"?: number;
    /**
     * 统计结束时间
     * @example `1609776000000`
     */
    "End"?: number;
    /**
     * 联盟ID
     * @example `M8GaMEyX`
     */
    "ConsortiumId"?: string;
}
