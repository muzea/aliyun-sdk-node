interface AddGlobalAccelerationInstanceIpRequest {
    /**
    *  共享带宽型实例所在的地域。
    * 您可以通过调用**DescribeRegions**接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  共享型实例ID。
    * @example `ga-LXXX111`
    */ "GlobalAccelerationInstanceId": string;
    /**
    * EIP实例的ID。 您可以通过调用[DescribeEipAddresses](~~36018~~)接口查询EIP实例的ID。
    * > 确保EIP的计费类型为后付费，且EIP的地域和共享型实例相同。
    * @example `i-rw434rwfaf****`
    */ "IpInstanceId": string;
    "OwnerId"?: number;
}
export { AddGlobalAccelerationInstanceIpRequest };