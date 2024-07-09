export interface InitializeEHPCRequest {
    /**
     * 创建服务关联角色的地域ID。
     * 您可以通过调用[ListRegions](~~188593~~)接口查询E-HPC支持的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要使用的服务名称，需要创建对应的服务关联角色。取值范围：
     * - E-HPC：表示创建AliyunServiceRoleForEHPC。
     * - E-HPC Instant：表示创建AliyunServiceRoleForEHPCManagedNetwork。
     * > 该参数暂未开放使用。
     * @example `E-HPC`
     */
    "ServiceName"?: string;
}
