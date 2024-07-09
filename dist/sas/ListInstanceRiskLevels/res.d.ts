export interface ListInstanceRiskLevelsResponse {
    /**
     * 实例风险等级
     */
    InstanceRiskLevels: {
        /**
         * 服务器的实例ID。
         * @example `i-m5efigezp50l2cmb****`
         */
        InstanceId: string;
        /**
         * 要修改防暴力破解规则的服务器UUID。
         * 您可以调用[DescribeCloudCenterInstances](~~141932~~)接口获取服务器的UUID。
         * @example `f2d6e901-1004-4ca8-9dae-53ec04a92765`
         */
        Uuid: string;
        /**
         * 安全风险等级。取值：
         * - **high**：高危
         * - **medium**：中危
         * - **low**：低危
         * - **none**：无风险
         * @example `high`
         */
        Level: string;
    }[];
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F5CF78A7-30AA-59DB-847F-13EE3AE7****`
     */
    RequestId: string;
}
