export interface ListInstanceRiskNumResponse {
    /**
     * 实例安全风险条数信息。
     */
    InstanceRiskNum: {
        /**
         * 实例信息。
         */
        InstanceItem: {
            /**
             * 实例SerialNumber。
             * @example `f2d6e901-1004-4ca8-9dae-53ec04a9****`
             */
            Uuid: string;
            /**
             * 实例ID
             * @example `i-wz9fdluqx20mp2x7****`
             */
            InstanceId: string;
        };
        /**
         * 风险统计信息。
         */
        RiskNumEntity: {
            /**
             * 高危漏洞个数。
             * @example `1`
             */
            VulHighCount: number;
            /**
             * 中危漏洞个数。
             * @example `2`
             */
            VulMediumCount: number;
            /**
             * 低危漏洞个数。
             * @example `3`
             */
            VulLowCount: number;
            /**
             * 公网暴露的弱口令个数。
             * @example `4`
             */
            WeakPassWordCount: number;
            /**
             * 高危告警个数。
             * @example `5`
             */
            SuspiciousHighCount: number;
            /**
             * 中危告警个数。
             * @example `6`
             */
            SuspiciousMediumCount: number;
            /**
             * 低危告警个数。
             * @example `7`
             */
            SuspiciousLowCount: number;
        };
    }[];
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `291B49F9-1685-4005-9D34-606B6F78****`
     */
    RequestId: string;
}
