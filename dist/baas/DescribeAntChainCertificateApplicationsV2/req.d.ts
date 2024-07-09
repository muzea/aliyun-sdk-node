export interface DescribeAntChainCertificateApplicationsV2Request {
    /**
     * 区块链ID
     * @example `8bd720bde18c4b37b0f4a1c7834db163`
     */
    "AntChainId": string;
    /**
     * 证书状态：
     * - 0：申请中
     * - 1：正常
     * - 2：失败
     * @example `1`
     */
    "Status": string;
    /**
     * 每页数量
     * @example `1`
     */
    "PageSize": number;
    /**
     * 页面编号，从1开始
     * @example `10`
     */
    "PageNumber": number;
    /**
     * 联盟ID
     * @example `M8GaMEyX`
     */
    "ConsortiumId"?: string;
}
