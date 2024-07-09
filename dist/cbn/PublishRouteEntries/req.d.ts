export interface PublishRouteEntriesRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-7qthudw0ll6jmc****`
     */
    "CenId": string;
    /**
     * 网络实例ID。
     * @example `vpc-rj9gt5nll27onu****`
     */
    "ChildInstanceId": string;
    /**
     * 网络实例类型。取值：
     * - **VPC**：专有网络。
     * - **VBR**：边界路由器。
     * @example `VPC`
     */
    "ChildInstanceType": string;
    /**
     * 网络实例所属地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `us-west-1`
     */
    "ChildInstanceRegionId": string;
    /**
     * 网络实例的路由表ID。
     * @example `vtb-bp174d1gje7****`
     */
    "ChildInstanceRouteTableId": string;
    /**
     * 要发布的路由条目的目标网段。
     * @example `172.16.1.0/24`
     */
    "DestinationCidrBlock": string;
}
