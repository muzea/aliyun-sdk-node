export interface ListInstancesResponse {
    /**
     * 请求ID。
     * @example `2CA11923-2A3D-5E5A-8314-E699D2DD15DE`
     */
    RequestId: string;
    /**
     * 总个数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 实例列表。
     */
    Instances: {
        /**
         * 实例ID。
         * @example `featureStore-cn-7mz2xfu****`
         */
        InstanceId: string;
        /**
         * 实例类型，目前仅支持Basic（基础版）。
         * @example `Basic`
         */
        Type: string;
        /**
         * 状态。
         * ● Initializing-初始化中。
         * ● Running-运行中。
         * ● Stopped-停止服务。
         * @example `Initializing`
         */
        Status: string;
        /**
         * 所属区域。
         * ● cn-hangzhou
         * ● cn-beijing
         * ● cn-shanghai
         * ● cn-shenzhen
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 创建时间。
         * @example `2023-07-04T11:26:09.036+08:00`
         */
        GmtCreateTime: string;
        /**
         * 更新时间。
         * @example `2023-07-04T11:26:09.036+08:00`
         */
        GmtModifiedTime: string;
    }[];
}
