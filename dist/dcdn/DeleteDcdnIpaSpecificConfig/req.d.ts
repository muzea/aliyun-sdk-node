export interface DeleteDcdnIpaSpecificConfigRequest {
    /**
     * 您的加速域名，仅支持单个域名设置。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 配置ID，您可以调用[DescribeDcdnDomainConfigs](~~130625~~)查询配置ID。
     * @example `50035**`
     */
    "ConfigId": string;
}
