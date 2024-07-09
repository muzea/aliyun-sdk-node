export interface DetachCenChildInstanceRequest {
    /**
     * 云企业网实例的ID。
     * @example `cen-7qthudw0ll6jmx****`
     */
    "CenId": string;
    /**
     * 待卸载的网络实例ID。
     * @example `vpc-bp18sth14qii3pnvx****`
     */
    "ChildInstanceId": string;
    /**
     * 网络实例的类型。取值：
     * - **VPC**：专有网络实例。
     * - **VBR**：边界路由器实例。
     * - **CCN**：云连接网实例。
     * @example `VPC`
     */
    "ChildInstanceType": string;
    /**
     * 网络实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "ChildInstanceRegionId": string;
    /**
     * 网络实例所属阿里云账号（主账号）ID。
     * @example `1699000000000000`
     */
    "ChildInstanceOwnerId"?: number;
    /**
     * 云企业网实例所属阿里云账号（主账号）ID。
     * @example `1688000000000000`
     */
    "CenOwnerId"?: number;
}
