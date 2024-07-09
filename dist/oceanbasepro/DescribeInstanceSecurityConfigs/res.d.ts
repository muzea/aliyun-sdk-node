export interface DescribeInstanceSecurityConfigsResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 请求的返回结果。
     */
    InstanceSecurityConfigs: {
        /**
         * 集群安全项检测总数。
         * @example `5`
         */
        TotalCheckCount: number;
        /**
         * 集群安全项风险总数。
         * @example `0`
         */
        TotalRiskCount: number;
        /**
         * 检测项目列表。
         */
        SecurityConfigs: {
            /**
             * 具体检测项名称。
             * @example `xxx`
             */
            ConfigName: string;
            /**
             * 是否存在风险。
             * @example `true`
             */
            Risk: boolean;
            /**
             * 安全建议。
             * @example `xxx`
             */
            RiskDescription: string;
            /**
             * 检测分组。
             * @example `WHITELIST`
             */
            ConfigGroup: string;
            /**
             * 检测项名称。
             * @example `校验集群白名单范围是否过大`
             */
            ConfigDescription: string;
        }[];
        /**
         * 检查时间。
         * @example `2023-08-07 15:30:00`
         */
        CheckTime: string;
        /**
         * Oceanbase集群ID。
         * @example `ob317v4uif****`
         */
        InstanceId: string;
        /**
         * 检测的唯一标识。
         * @example `xxx`
         */
        CheckId: string;
    };
}
