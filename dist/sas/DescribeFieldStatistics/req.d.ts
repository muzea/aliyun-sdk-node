export interface DescribeFieldStatisticsRequest {
    /**
     * 服务器所在的地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要查询的资产类型。不指定资产类型，即查询所有类型资产的统计信息。取值：
     * - **ecs**：服务器
     * - **cloud_product**：云产品
     * @example `ecs`
     */
    "MachineTypes"?: string;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `1232428423234****`
     */
    "ResourceDirectoryAccountId"?: number;
}
