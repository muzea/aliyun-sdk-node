export interface DescribeInstanceIpAddressRequest {
    /**
     * 要查询的公网IP资产所在地域ID。
     * > 您可以调用[DescribeRegions](~~353250~~)查询所有地域ID。
     * @example `cn-hangzhou`
     */
    "DdosRegionId": string;
    /**
     * 要查询的公网IP资产的实例类型。取值：
     * - **ecs**：表示查询云服务器ECS实例。
     * - **slb**：表示查询负载均衡SLB实例。
     * - **eip**：表示查询弹性公网IP实例。
     * @example `ecs`
     */
    "InstanceType": string;
    /**
     * 要查询的公网IP资产的实例名称。
     * @example `launch-advisor-2021****`
     */
    "InstanceName"?: string;
    /**
     * 要查询的公网IP资产的DDoS防护状态。取值：
     * - **defense**：表示清洗中，即查询正在进行流量清洗的公网IP资产。
     * - **blackhole**：表示黑洞中，即查询处于黑洞状态的公网IP资产。
     * @example `defense`
     */
    "DdosStatus"?: string;
    /**
     * 要查询的公网IP资产所属的实例ID。
     * @example `i-bp1cb6x80tfgocid****`
     */
    "InstanceId"?: string;
    /**
     * 要查询的公网IP资产的IP地址。
     * @example `192.0.XX.XX`
     */
    "InstanceIp"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置分页查询时，每页显示的公网IP资产信息的数量。默认值为**10**，表示每页显示10条公网IP资产信息。
     * @example `10`
     */
    "PageSize"?: number;
}
