export interface DescribeServerRelatedGlobalAccelerationInstancesRequest {
    /**
     * 全球加速实例所在的地域。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  后端服务实例的ID。
     * @example `i-12s3sdf****`
     */
    "ServerId": string;
    /**
     * 后端服务实例的类型，取值：
     * - **EcsInstance**（默认值）：ECS实例
     * - **SlbInstance**：负载均衡实例
     *
     * @example `EcsInstance`
     */
    "ServerType"?: string;
}
