export interface DescribeAssetRiskListResponse {
    /**
     * 返回结果的总条数。
     * @example `12`
     */
    TotalCount: number;
    /**
     * 结果的请求ID。
     * @example `443C5781-1C03-5FCD-8EC5-FB9C0B9AC396`
     */
    RequestId: string;
    /**
     * 返回的资产详情。
     */
    AssetList: {
        /**
         * 风险等级。取值：
         * - **low**：低风险
         * - **middle**：中风险
         * - **high**：高风险
         * @example `low`
         */
        RiskLevel: string;
        /**
         * 服务器IP。
         * @example `39.108.XX.XX`
         */
        Ip: string;
        /**
         * 云防火墙防护的资产的IP地址版本。
         * 取值：
         * - **4**：表示IPv4地址。
         * - **6**：表示IPv6地址。
         * @example `4`
         */
        IpVersion: number;
        /**
         * 风险原因。
         * @example `other`
         */
        Reason: string;
    }[];
}
