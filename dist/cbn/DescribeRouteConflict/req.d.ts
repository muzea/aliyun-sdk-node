export interface DescribeRouteConflictRequest {
    /**
     * 查询页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页显示的条目数。默认值为**10**，取值范围：**1**~**50**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 要查询的网络实例ID。
     * @example `ccn-0q3b7oviikmm9h****`
     */
    "ChildInstanceId": string;
    /**
     * 网络实例的类型。取值：
     * - **VPC**：专有网络。
     * - **VBR**：边界路由器。
     * - **CCN**：云连接网。
     * @example `CCN`
     */
    "ChildInstanceType": string;
    /**
     * 网络实例所属的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `ccn-cn-shanghai`
     */
    "ChildInstanceRegionId": string;
    /**
     * 要查询的网络实例的路由表ID。
     * @example `vtb-bp174d1gje79u1g4t****`
     */
    "ChildInstanceRouteTableId": string;
    /**
     * 产生冲突的路由条目的目标网段。
     * @example `172.16.0.0/16`
     */
    "DestinationCidrBlock"?: string;
}
