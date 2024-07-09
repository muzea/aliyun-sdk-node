export interface DeleteSpecificStagingConfigRequest {
    /**
     * 您的加速域名，多个域名使用半角逗号（,）分隔，一次最多支持50个域名查询。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 功能配置ID，多个ID用半角逗号（,）分隔。ConfigId查询和使用，请参见[ConfigId使用说明](~~388994~~)。
     * @example `2317`
     */
    "ConfigId": string;
}
