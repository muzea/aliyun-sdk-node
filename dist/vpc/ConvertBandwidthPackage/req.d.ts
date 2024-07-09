export interface ConvertBandwidthPackageRequest {
    /**
     * NAT带宽包的ID。
     * @example `bwp-bp1xea10o8qxw4f****`
     */
    "BandwidthPackageId": string;
    /**
     * NAT网关所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。详细信息，请参见[如何保证幂等性](~~36569~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
