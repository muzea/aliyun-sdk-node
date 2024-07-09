export interface DescribeCdnDomainConfigsRequest {
    /**
     * 加速域名，仅支持查询单个域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 功能函数名称，多个用英文逗号（,）分隔。更多功能名称，请参见[域名配置功能参数](~~388460~~)。
     * @example `aliauth`
     */
    "FunctionNames"?: string;
    /**
     * 功能配置ID。ConfigId查询和使用，请参见[ConfigId使用说明](~~388994~~)。
     * @example `6295`
     */
    "ConfigId"?: string;
}
