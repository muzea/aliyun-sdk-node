export interface DescribeAntChainAccountsV2Request {
    /**
     * 每页数量
     * @example `10`
     */
    "PageSize": number;
    /**
     * 页面编号，从1开始
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 区块链ID
     * @example `区块链ID`
     */
    "AntChainId": string;
    /**
     * 联盟ID
     * @example `M8GaMEyX`
     */
    "ConsortiumId"?: string;
}
