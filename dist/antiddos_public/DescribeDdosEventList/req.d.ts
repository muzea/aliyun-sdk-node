export interface DescribeDdosEventListRequest {
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
     * 要查询的公网IP资产的实例ID。
     * > 您可以调用[DescribeInstance](~~354191~~)查询当前阿里云账号拥有的ECS、SLB、EIP实例的ID。
     * @example `i-bp10bclrt56fblts****`
     */
    "InstanceId": string;
    /**
     * 分页查询时，设置当前页面的页码。默认值为**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，设置每页包含攻击事件的数量。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 要查询的公网IP资产的IP地址。
     * @example `121.199.XX.XX`
     */
    "InternetIp"?: string;
}
