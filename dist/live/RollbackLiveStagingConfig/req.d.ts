export interface RollbackLiveStagingConfigRequest {
    /**
     * 加速域名。
     * @example `developer.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 功能名称。获取功能名称，请参见[DescribeLiveDomainStagingConfig](~~297374~~)。
     * @example `aliauth`
     */
    "FunctionName": string;
}
