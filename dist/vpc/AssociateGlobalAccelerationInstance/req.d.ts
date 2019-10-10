interface AssociateGlobalAccelerationInstanceRequest {
    /**
    * 全球加速实例所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 全球加速实例的ID。
    * @example `ga-lsajj32****`
    */ "GlobalAccelerationInstanceId": string;
    /**
    * 后端服务实例的ID。
    * @example `i-saf23****`
    */ "BackendServerId": string;
    /**
    * 后端服务实例所属的地域，该地域需要属于全球加速实例指定的服务区域。
    * @example `cn-shanghai`
    */ "BackendServerRegionId": string;
    "OwnerId"?: number;
    /**
    * 后端服务实例的类型，取值：
    * - **EcsInstance**（默认值）：ECS实例。
    * - **SlbInstance**：负载均衡实例。
    * @example `EcsInstance`
    */ "BackendServerType"?: string;
}
export { AssociateGlobalAccelerationInstanceRequest };