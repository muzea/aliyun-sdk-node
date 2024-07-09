export interface DescribeTenantSecurityConfigsResponse {
    /**
     * 请求 ID。
     * @example `523E7183-1490-590D-BA03-12DFD316614B`
     */
    RequestId: string;
    /**
     * 配置列表。
     */
    Configs: {
        /**
         * 安全配置总体检测项目。
         * @example `4`
         */
        TotalCheckCount: number;
        /**
         * 检测出来的总体风险项目。
         * @example `0`
         */
        TotalRiskCount: number;
        /**
         * 检测结果。
         */
        TenantSecurityConfigs: {
            /**
             * 租户 ID。
             * @example `xxx`
             */
            TenantId: string;
            /**
             * 租户名称。
             * @example `xxx`
             */
            TenantName: string;
            /**
             * 租户的风险条目。
             * @example `0`
             */
            RiskCount: number;
            /**
             * 风险列表。
             */
            SecurityConfigs: {
                /**
                 * 风险分组。
                 * @example `WHITELIST`
                 */
                ConfigGroup: string;
                /**
                 * 风险项目名称。
                 * @example `WHITELIST_RANGE_LARGE`
                 */
                ConfigName: string;
                /**
                 * 是否有风险。
                 * @example `true`
                 */
                Risk: boolean;
                /**
                 * 风险描述。
                 * @example `白名单开放过大，建议按需设置`
                 */
                RiskDescription: string;
                /**
                 * 检测项名称。
                 * @example `校验集群白名单范围是否过大`
                 */
                ConfigDescription: string;
            }[];
        }[];
        /**
         * 检测的唯一标识。
         * @example ` xxx`
         */
        CheckId: string;
        /**
         * OceanBase 集群 ID。
         * @example `ob317v4uif****`
         */
        InstanceId: string;
        /**
         * 检测时间。
         * @example `2023-08-07 15:30:00`
         */
        CheckTime: string;
    };
}
