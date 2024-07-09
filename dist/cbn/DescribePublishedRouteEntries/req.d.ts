export interface DescribePublishedRouteEntriesRequest {
    /**
     * 查询页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页显示的条目数。默认值为**10**，取值范围：**1**~**500**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 云企业网实例ID。
     * @example `cen-7qthudw0ll6jm****`
     */
    "CenId": string;
    /**
     * 网络实例ID。
     * @example `vpc-bp18sth14qii3pnv****`
     */
    "ChildInstanceId": string;
    /**
     * 网络实例类型。取值：
     * - **VPC**：专有网络。
     * - **VBR**：边界路由器。
     * - **CCN**：云连接网。
     * @example `VPC`
     */
    "ChildInstanceType": string;
    /**
     * 网络实例所属地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "ChildInstanceRegionId": string;
    /**
     * 网络实例的路由表ID。
     * @example `vtb-bp174d1gje79u1g4****`
     */
    "ChildInstanceRouteTableId"?: string;
    /**
     * 要查询的路由条目的目标网段。
     * @example `172.16.0.0/16`
     */
    "DestinationCidrBlock"?: string;
}
