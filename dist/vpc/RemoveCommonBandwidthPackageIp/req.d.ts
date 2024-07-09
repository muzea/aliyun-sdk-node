export interface RemoveCommonBandwidthPackageIpRequest {
    /**
     * 共享带宽实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  共享带宽实例的ID。
     * @example `cbwp-2ze2ic1xd2qeqk145****`
     */
    "BandwidthPackageId": string;
    /**
     * EIP实例的ID。
     * 您可以通过调用[DescribeEipAddresses](~~36018~~)接口查询EIP实例的ID。
     * @example `eip-2zeerraiwb7uj6i0d****`
     */
    "IpInstanceId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
