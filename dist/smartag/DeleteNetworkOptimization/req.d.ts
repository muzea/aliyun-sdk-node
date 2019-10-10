interface DeleteNetworkOptimizationRequest {
    /**
    * 网络优化实例所在的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 网络优化实例ID。
    * @example `opt-qjf2h3kla7xr5******`
    */ "NetworkOptId": string;
    "OwnerId"?: number;
}
export { DeleteNetworkOptimizationRequest };