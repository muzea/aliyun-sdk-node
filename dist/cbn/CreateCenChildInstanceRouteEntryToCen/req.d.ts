export interface CreateCenChildInstanceRouteEntryToCenRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-7febra5nqj7jjh****`
     */
    "CenId": string;
    /**
     * 网络实例ID。
     * @example `vpc-k1alm2jbuwibhxtx2****`
     */
    "ChildInstanceId": string;
    /**
     * 网络实例类型。取值：
     * - **VPC**：表示专有网络实例。
     * - **VBR**：表示边界路由器实例。
     * @example `VPC`
     */
    "ChildInstanceType": string;
    /**
     * 网络实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `ap-southeast-5`
     */
    "ChildInstanceRegionId": string;
    /**
     * 网络实例所属阿里云账号（主账号）ID。
     * > 如果您当前的网络实例为跨账号的网络实例，本参数必填。
     * @example `1787100000000000`
     */
    "ChildInstanceAliUid"?: number;
    /**
     * 网络实例的路由表ID。
     * @example `vtb-k1aa8ulqs39f86op8****`
     */
    "RouteTableId": string;
    /**
     * 路由条目的目标网段。
     * 目标网段为CIDR格式。例如：192.168.10.0/24。
     * @example `192.168.22.0/24`
     */
    "DestinationCidrBlock": string;
}
