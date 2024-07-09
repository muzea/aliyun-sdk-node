export interface DescribeAntChainAccountsRequest {
    /**
     * 每页数量
     * @example `10`
     */
    "PageSize": number;
    /**
     * 页面编号
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 区块链ID
     * @example `pYogqb9v`
     */
    "AntChainId": string;
}
