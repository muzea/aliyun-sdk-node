interface ModifyGlobalAccelerationInstanceSpecRequest {
    /**
    * 全球加速实例所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  全球加速实例的ID。
    * @example `ga-32s33s****`
    */ "GlobalAccelerationInstanceId": string;
    /**
    *  全球加速实例的带宽峰值，单位为Mbps。取值范围：
    * **10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000**
    * @example `10`
    */ "Bandwidth": string;
    "OwnerId"?: number;
}
export { ModifyGlobalAccelerationInstanceSpecRequest };