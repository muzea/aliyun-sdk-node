export interface DescribeClusterHostSecuritySummaryResponse {
    /**
     * 本次调用请求的ID。
     * @example `0B48AB3C-84FC-424D-A01D-B9270EF4****`
     */
    RequestId: string;
    /**
     * 主机告警详情。
     */
    ClusterHostEvent: {
        /**
         * 主机告警详情。
         */
        AlarmEvent: {
            /**
             * 告警等级。取值：
             * - **serious**：紧急。
             * - **suspicious**：可疑。
             * - **remind**：提醒。
             * @example `remind`
             */
            RiskLevel: string;
            /**
             * 告警数量。
             * @example `1`
             */
            Count: number;
        }[];
        /**
         * 主机漏洞详情。
         */
        VulEvent: {
            /**
             * 告警等级。取值：
             * - **asap**：高，尽快修复。
             * - **nntf**：中，暂时可不修复。
             * - **later**：低，可不修复。
             * @example `later`
             */
            RiskLevel: string;
            /**
             * 漏洞数量。
             * @example `3`
             */
            Count: number;
        }[];
        /**
         * 主机基线详情。
         */
        BaselineEvent: {
            /**
             * 基线风险等级。取值：
             * - **high**：高危。
             * - **medium**：中危。
             * - **low**：低危。
             * @example `medium`
             */
            RiskLevel: string;
            /**
             * 基线数量。
             * @example `1`
             */
            Count: number;
        }[];
    };
}
