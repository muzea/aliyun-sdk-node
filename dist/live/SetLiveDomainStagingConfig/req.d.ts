export interface SetLiveDomainStagingConfigRequest {
    /**
     * 加速域名。
     * @example `developer.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 功能列表，仅在修改时需要指定ConfigId，详情请参见**Functions格式说明**。
     * @example `[{"functionArgs":[{"argName":"enable","argValue":"on"},{"argName":"pri","argValue":"1"},{"argName":"rule","argValue":"xxx"}],"functionName":"edge_function"}]`
     */
    "Functions": string;
}
