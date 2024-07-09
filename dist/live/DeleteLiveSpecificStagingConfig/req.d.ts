export interface DeleteLiveSpecificStagingConfigRequest {
    /**
     * 加速域名。
     * @example `developer.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 配置ID，多个用英文逗号（,）分隔。获取配置ID，请参见[DescribeLiveDomainStagingConfig](~~297374~~)。
     * @example `6295`
     */
    "ConfigId": string;
}
