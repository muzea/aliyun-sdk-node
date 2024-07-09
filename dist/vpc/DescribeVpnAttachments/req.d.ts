export interface DescribeVpnAttachmentsRequest {
    /**
     * IPsec连接所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
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
     * IPsec连接ID。
     * > 如果您不输入IPsec连接ID，系统默认查询当前地域下所有已绑定转发路由器实例的IPsec连接的信息。
     * @example `vco-p0w2jpkhi2eeop6q6****`
     */
    "VpnConnectionId"?: string;
    /**
     * IPsec连接绑定的资源类型。默认值：**CEN**。
     * 仅取值：**CEN**，表示查询已绑定转发路由器实例的IPsec连接的信息。
     * @example `CEN`
     */
    "AttachType"?: string;
}
