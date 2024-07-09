export interface DescribeDdosThresholdRequest {
    /**
     * 要查询的公网IP资产所在地域ID。
     * > 您可以调用[DescribeRegions](~~353250~~)查询所有地域ID。
     * @example `cn-hangzhou`
     */
    "DdosRegionId": string;
    /**
     * 要查询的阈值类型。取值：
     * - **defense**：表示查询流量清洗阈值。
     * - **blackhole**：表示查询DDoS防护阈值。
     * @example `defense`
     */
    "DdosType": string;
    /**
     * 要查询的公网IP资产的实例类型。取值：
     * - **ecs**：表示查询云服务器ECS实例。
     * - **slb**：表示查询负载均衡SLB实例。
     * - **eip**：表示查询弹性公网IP实例。
     * @example `ecs`
     */
    "InstanceType": string;
    /**
     * 要查询的公网IP资产的实例ID列表。
     */
    "InstanceIds": string[];
}
