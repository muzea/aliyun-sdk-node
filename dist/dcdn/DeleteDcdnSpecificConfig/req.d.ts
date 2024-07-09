export interface DeleteDcdnSpecificConfigRequest {
    /**
     * 您的加速域名，仅支持单个删除。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 功能配置ID，多个用半角逗号（,）分隔。ConfigId查询和使用，请参见[ConfigId使用说明](~~410558~~)。
     * @example `2117`
     */
    "ConfigId": string;
}
