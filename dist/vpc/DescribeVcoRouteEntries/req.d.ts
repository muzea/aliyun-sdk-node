export interface DescribeVcoRouteEntriesRequest {
    /**
     * IPsec连接所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPsec连接ID。
     * @example `vco-p0w2jpkhi2eeop6q6****`
     */
    "VpnConnectionId": string;
    /**
     * 路由条目类型。取值：
     * - **custom**（默认值）：目的路由条目。
     * - **bgp**：BGP路由条目。
     * @example `custom`
     */
    "RouteEntryType"?: string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的条目数。默认值：**10**。取值范围：**1**~**50**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-4266****`
     */
    "ClientToken"?: string;
}
