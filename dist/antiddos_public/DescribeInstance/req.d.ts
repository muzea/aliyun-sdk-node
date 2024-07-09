export interface DescribeInstanceRequest {
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
     * @example `launch-advisor-2022****`
     */
    "InstanceName"?: string;
    /**
     * 要查询的公网IP资产的DDoS防护状态。取值：
     * - **mitigating**：表示清洗中，即查询正在进行流量清洗的公网IP资产。
     * - **blackholed**：表示黑洞中，即查询处于黑洞状态的公网IP资产。
     * - **normal**：表示正常，即查询未遭受DDoS攻击的公网IP资产。
     * @example `blackholed`
     */
    "DdosStatus"?: string;
    /**
     * 要查询的公网IP资产的实例ID。根据实例类型（**InstanceType**）不同，此处设置的实例ID格式不同，具体说明如下：
     * - **InstanceType**为**ecs**，在此处设置ECS实例ID，例如，i-bp1cb6x80tfgocid\*\*\*\*。
     * - **InstanceType**为**slb**，在此处设置SLB实例ID，例如，alb-vn2dqg3v31y2vd\*\*\*\*。
     * - **InstanceType**为**eip**，在此处设置SLB实例ID，例如，eip-j6ce6dcx9epi7rs46\*\*\*\*。
     * @example `i-bp1cb6x80tfgocid****`
     */
    "InstanceId"?: string;
    /**
     * 要查询的公网IP资产的IP地址。
     * @example `121.199.XX.XX`
     */
    "InstanceIp"?: string;
    /**
     * 分页查询时，设置当前页面的页码。默认值为**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，设置每页包含公网IP资产的数量。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
