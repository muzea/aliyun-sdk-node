interface ConvertBandwidthPackageRequest {
    /**
    * NAT网关所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * NAT网关带宽包的ID。
    * @example `bwp-bp1xea10o8qxw4f****`
    */ "BandwidthPackageId": string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII 字符。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
}
export { ConvertBandwidthPackageRequest };