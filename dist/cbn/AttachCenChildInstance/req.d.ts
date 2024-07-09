export interface AttachCenChildInstanceRequest {
    /**
     * 云企业网实例的ID。
     * @example `cen-7qthudw0ll6jmc****`
     */
    "CenId": string;
    /**
     * 指定待加载的网络实例的ID。
     * @example `vpc-bp18sth14qii3pnvx****`
     */
    "ChildInstanceId": string;
    /**
     * 网络实例的类型，取值：
     * - **VPC**：专有网络。
     * - **VBR**：边界路由器。
     * - **CCN**：云连接网。
     * @example `VPC`
     */
    "ChildInstanceType": string;
    /**
     * 网络实例所在的地域。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "ChildInstanceRegionId": string;
    /**
     * 网络实例所属的阿里云账号ID（主账号）。
     * >如果您要加载跨账号的网络实例，本参数必填。
     * @example `1688000000000000`
     */
    "ChildInstanceOwnerId"?: number;
}
