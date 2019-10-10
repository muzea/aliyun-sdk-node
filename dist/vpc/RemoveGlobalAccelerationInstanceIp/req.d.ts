interface RemoveGlobalAccelerationInstanceIpRequest {
    /**
    * 共享带宽型实例所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  共享型实例ID。
    * @example `ga-m5ex47zwya1sejyni****`
    */ "GlobalAccelerationInstanceId": string;
    /**
    * EIP实例的ID。
    * 您可以通过调用[DescribeEipAddresses](~~36018~~)接口查询EIP实例的ID。
    * @example `eip-bp13e9i2qst4g6jzi****`
    */ "IpInstanceId": string;
    "OwnerId"?: number;
}
export { RemoveGlobalAccelerationInstanceIpRequest };