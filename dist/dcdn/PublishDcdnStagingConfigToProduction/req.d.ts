export interface PublishDcdnStagingConfigToProductionRequest {
    /**
     * 加速域名，仅支持传单个域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 功能列表名称。
     * @example `aliauth`
     */
    "FunctionName": string;
}
