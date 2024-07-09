export interface DescribeVirtualBorderRoutersForPhysicalConnectionRequest {
    /**
     * 物理专线所在的地域。 您可以通过调用[DescribeRegions](~~36063~~) 接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 物理专线的ID。
     * @example `pc-119mfj****`
     */
    "PhysicalConnectionId": string;
    /**
     *  列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     *  分页查询时每页的行数，最大值为**50**。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 过滤条件列表。
     */
    "Filter"?: {
        /**
         * 过滤条件，最多可提供5个过滤条件。支持如下过滤条件：
         * * **PhysicalConnectionId**：物理专线实例ID。
         * * **VbrId**：边界路由器实例ID。
         * * **Status**：边界路由器状态。
         * * **Name**：边界路由器名称。
         * * **AccessPointId**：接入点ID。
         * * **eccId**：高速上云服务实例ID。
         * * **type**：边界路由器类型。
         * @example `Status`
         */
        Key: string;
        /**
         * 根据Key指定过滤值。一个Key支持指定多个过滤值，每个过滤值之间是或的关系，即只要符合其中一个过滤值，则视为匹配该过滤条件。
         * @example `Active`
         */
        Value: string[];
    }[];
}
