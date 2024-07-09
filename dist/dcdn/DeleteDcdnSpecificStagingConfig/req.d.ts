export interface DeleteDcdnSpecificStagingConfigRequest {
    /**
     * 加速域名，仅支持传单个域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 配置ID，多个用逗号（,）分隔。
     * 您可以调用[DescribeDcdnDomainStagingConfig](~~DescribeDcdnDomainStagingConfig~~)查询配置ID。
     * @example `2317`
     */
    "ConfigId": string;
}
