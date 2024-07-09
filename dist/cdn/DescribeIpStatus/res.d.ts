export interface DescribeIpStatusResponse {
    /**
     * 请求ID。
     * @example `F61CDR30-E83C-4FDA-BF73-9A94CDD44229`
     */
    RequestId: string;
    /**
     * 节点IP地址状态列表。
     */
    IpStatus: {
        /**
         * 节点IP地址。
         * @example `10.10.10.10`
         */
        ip: string;
        /**
         * 状态。
         * - **nonali**：非阿里云CDN节点。
         * - **normal**：阿里云CDN节点，正常状态。
         * - **abnormal**：阿里云CDN节点，异常状态。
         * @example `abnormal`
         */
        status: string;
    }[];
}
