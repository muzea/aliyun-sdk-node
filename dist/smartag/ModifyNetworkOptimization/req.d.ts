interface ModifyNetworkOptimizationRequest {
    /**
    * 网络优化实例所在的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 网络优化实例ID。
    * @example `opt-qjf2h3kla7xr53k***`
    */ "NetworkOptId": string;
    "OwnerId"?: number;
    /**
    * 网络优化实例名称。
    * @example `doctest`
    */ "Name"?: string;
}
export { ModifyNetworkOptimizationRequest };