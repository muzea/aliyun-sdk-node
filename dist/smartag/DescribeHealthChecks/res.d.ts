export interface DescribeHealthChecksResponse {
    /**
     * 总共的列表条目数。
     * @example `5`
     */
    TotalCount: number;
    /**
     * 分页展示时，每页的列表条目数。默认值为**10**，最大值为**50**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `0B275FE6-FC86-4921-BC70-1B3DF68B078F`
     */
    RequestId: string;
    /**
     * 当前分页的页码。默认值为**1**。
     * @example `1`
     */
    PageNumber: number;
    HealthChecks: {
        /**
         * 健康检查列表。
         */
        HealthCheck: {
            /**
             * 健康检查报文类型，目前仅支持**ICMP_ECHO**。
             * @example `ICMP_ECHO`
             */
            Type: string;
            /**
             * 一次探测的超时时间。
             * 数值范围：**10**~**30000**。
             * 默认值：**1000**。
             * 单位：毫秒。
             * @example `1000`
             */
            ProbeTimeout: number;
            /**
             * 健康检查状态：
             * - **success**：成功。
             * - **failed**：失败。
             * - **unknown**：未开始。
             * @example `unknown`
             */
            Status: string;
            /**
             * 健康检查的目的地址。
             * @example `110.XX.XX.1`
             */
            DstIpAddr: string;
            /**
             * 关联健康检查实例的路由数量。
             * @example `3`
             */
            RelationCount: number;
            /**
             * 时延阈值触发次数。
             * 数值范围：**1**~**15**。
             * 默认值：**3**。
             * @example `3`
             */
            RttFailThreshold: number;
            /**
             * 智能接入网关实例ID。
             * @example `sag-qi0p07ld5q86k3****`
             */
            SmartAGId: string;
            /**
             * 健康检查的目的端口。
             * > 该功能目前不支持。
             * @example `33`
             */
            DstPort: number;
            /**
             * 连续探测失败次数阈值。
             * 数值范围：**1**~**15**。
             * 默认值：**3**。
             * @example `3`
             */
            FailCountThreshold: number;
            /**
             * 双向时延阈值。
             * 数值范围：**-1**或**1**~**5000**。
             * 默认值：**-1**，表示不设置双向时延阈值。
             * 单位：毫秒。
             * @example `45`
             */
            RttThreshold: number;
            /**
             * 健康检查的源端口。
             * > 该功能目前不支持。
             * @example `334`
             */
            SrcPort: number;
            /**
             * 每次健康检查探测次数。
             * 数值范围：**1**~**20**。
             * 默认值：**1**。
             * @example `2`
             */
            ProbeCount: number;
            /**
             * 健康检查描述。
             * @example `健康检查`
             */
            Description: string;
            /**
             * 健康检查的源地址。
             * @example `192.XX.XX.1`
             */
            SrcIpAddr: string;
            /**
             * 健康检查探测间隔，一次探测未完成情况下，不会发起下一次探测。
             * 数值范围：**1000**~**60000**。
             * 默认值：**2000**。
             * 单位：毫秒。
             * @example `2000`
             */
            ProbeInterval: number;
            /**
             * 健康检查实例名称。
             * @example `doctest`
             */
            Name: string;
            /**
             * 健康检查实例ID。
             * @example `hc-ifflm5ygj3diwi****`
             */
            HcInstanceId: string;
        }[];
    };
}
