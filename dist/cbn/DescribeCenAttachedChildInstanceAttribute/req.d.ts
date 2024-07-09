export interface DescribeCenAttachedChildInstanceAttributeRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-5mv960yjhja0dh****`
     */
    "CenId": string;
    /**
     * 云企业网实例已加载的网络实例ID。
     * @example `vpc-2zebdboka7d7t37vo****`
     */
    "ChildInstanceId": string;
    /**
     * 网络实例的类型，取值：
     * - **VPC**：专有网络实例。
     * - **VBR**：边界路由器实例。
     * - **CCN**：云连接网实例。
     * @example `VPC`
     */
    "ChildInstanceType": string;
    /**
     * 网络实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-beijing`
     */
    "ChildInstanceRegionId": string;
}
