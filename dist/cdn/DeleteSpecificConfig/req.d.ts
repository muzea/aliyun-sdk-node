export interface DeleteSpecificConfigRequest {
    /**
     * 加速域名，仅支持单个删除。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 功能配置ID，多个用半角逗号（,）分隔。ConfigId查询和使用，请参见[ConfigId使用说明](~~388994~~)。
     * @example `2317`
     */
    "ConfigId": string;
}
