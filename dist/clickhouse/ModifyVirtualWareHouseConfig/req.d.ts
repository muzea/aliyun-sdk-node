export interface ModifyVirtualWareHouseConfigRequest {
    /**
     * 参数配置信息。
     */
    "ConfigChanges": {
        /**
         * 参数名。
         * @example `keep_alive_timeout`
         */
        ConfigFullPath: string;
        /**
         * 参数值，取值范围大于等于10。
         * @example `300`
         */
        Value: string;
    }[];
    /**
     * 计算组ID。
     * @example `vw-uf62965t8lt50****`
     */
    "VirtualWareHouseId": string;
    /**
     * 集群ID。
     * @example `cc-bp1qx68m06981****`
     */
    "DBClusterId"?: string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
