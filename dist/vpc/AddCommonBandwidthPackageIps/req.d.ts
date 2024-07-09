export interface AddCommonBandwidthPackageIpsRequest {
    /**
     * 共享带宽所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~448570~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 共享带宽实例ID。
     * @example `cbwp-2ze2ic1xd2qeqasdf****`
     */
    "BandwidthPackageId": string;
    /**
     * IP类型。取值：**EIP**，表示将EIP添加至共享带宽。
     * @example `EIP`
     */
    "IpType"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 待添加的EIP实例ID列表。
     * 一次最多支持添加10个EIP实例ID。
     */
    "IpInstanceIds": string[];
}
