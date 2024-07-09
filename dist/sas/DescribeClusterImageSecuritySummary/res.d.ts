export interface DescribeClusterImageSecuritySummaryResponse {
    /**
     * 本次请求的ID。
     * @example `F8B6F758-BCD4-597A-8A2C-DA5A552C****`
     */
    RequestId: string;
    /**
     * 镜像安全事件信息。
     */
    ClusterImageEvent: {
        /**
         * 镜像系统漏洞信息。
         */
        ImageCveVul: {
            /**
             * 告警等级。取值：
             * - **asap**：高，尽快修复。
             * - **nntf**：中，暂时可不修复。
             * - **later**：低，可不修复。
             * @example `later`
             */
            RiskLevel: string;
            /**
             * 漏洞个数。
             * @example `0`
             */
            Count: number;
        }[];
        /**
         * 镜像恶意样本信息。
         */
        ImageMaliciousFile: {
            /**
             * 风险等级。取值：
             * - **high**：高危。
             * - **medium**：中危。
             * - **low**：低危。
             * @example `medium`
             */
            RiskLevel: string;
            /**
             * 恶意样本数量。
             * @example `0`
             */
            Count: number;
        }[];
        /**
         * 镜像应用漏洞信息。
         */
        ImageScaVul: {
            /**
             * 告警等级。取值：
             * - **asap**：高，尽快修复。
             * - **nntf**：中，暂时可不修复。
             * - **later**：低，可不修复。
             * @example `later`
             */
            RiskLevel: string;
            /**
             * 应用漏洞数量。
             * @example `0`
             */
            Count: number;
        }[];
        /**
         * 镜像基线检查信息。
         */
        ImageBaseline: {
            /**
             * 风险等级。取值：
             * - **high**：高危。
             * - **medium**：中危。
             * - **low**：低危。
             * @example `medium`
             */
            RiskLevel: string;
            /**
             * 基线数量。
             * @example `0`
             */
            Count: number;
        }[];
    };
}
