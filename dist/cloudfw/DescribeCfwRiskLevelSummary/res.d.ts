export interface DescribeCfwRiskLevelSummaryResponse {
    /**
     * 结果的请求ID。
     * @example `F1F30435-FA0A-52DA-A5DE-C16FD6C171DA`
     */
    RequestId: string;
    /**
     * 风险列表。
     */
    RiskList: {
        /**
         * 类型。
         * @example `ResourceNotProtected`
         */
        Type: string;
        /**
         * 风险ECS数量。
         * @example `50`
         */
        Num: string;
        /**
         * 风险等级。取值包括：
         * - **medium**：中等
         * @example `medium`
         */
        Level: string;
    }[];
}
