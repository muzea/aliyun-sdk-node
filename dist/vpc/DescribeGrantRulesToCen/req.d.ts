export interface DescribeGrantRulesToCenRequest {
    /**
     * 要查询的网络实例所在的地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要查询的网络实例的ID。
     * @example `vpc-bp18sth14qii3pnvc****`
     */
    "InstanceId": string;
    /**
     * 要查询的网络实例的类型，取值：
     * - **VPC**：专有网络。
     * - **VBR**：边界路由器。
     * - **CCN**：云连接网。
     * @example `VPC`
     */
    "InstanceType": string;
    /**
     * 要查询的网络实例所属的资源组ID。
     * @example `rg-acfmxazb4p****	`
     */
    "ResourceGroupId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000	`
     */
    "ClientToken"?: string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
