export interface DescribeAntChainCertificateApplicationsRequest {
    /**
     * 区块链ID
     * @example `1q8B5R9p`
     */
    "AntChainId": string;
    /**
     * 状态
     * @example `1`
     */
    "Status": string;
    /**
     * 每页数量
     * @example `20`
     */
    "PageSize": number;
    /**
     * 页面编号
     * @example `1`
     */
    "PageNumber": number;
}
