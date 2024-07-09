export interface DescribeAssetsSecurityEventSummaryResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D03DD0FD-6041-5107-AC00-383E28F1****`
     */
    RequestId: string;
    /**
     * 容器资产风险统计信息列表。
     */
    Assets: {
        /**
         * 存在风险的资产数量。
         * @example `16`
         */
        RiskCount: number;
        /**
         * 资产总数量。
         * @example `30`
         */
        TotalCount: number;
        /**
         * 资产类型。取值：
         * - **namespace**：命名空间
         * - **clusters**：集群
         * - **applications**：应用
         * - **pods**：容器组
         * - **containers**：容器
         * - **images**：镜像
         * - **hosts**：节点
         * @example `namespace`
         */
        AssetType: string;
    }[];
}
