export interface BatchDeleteScdnDomainConfigsRequest {
    /**
     * 您的加速域名，存在多个加速域名时使用英文逗号（,）分隔。
     * @example `example.com,aliyundoc.com`
     */
    "DomainNames": string;
    /**
     * 功能列表名称，存在多个功能列表名称时使用英文逗号（,）分隔。
     * @example `referer_white_list_set,https_force`
     */
    "FunctionNames": string;
}
