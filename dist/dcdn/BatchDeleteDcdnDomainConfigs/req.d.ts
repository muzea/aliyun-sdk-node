export interface BatchDeleteDcdnDomainConfigsRequest {
    /**
     * 需要删除配置的加速域名，多个用半角逗号（,）分隔。
     * @example `example.com`
     */
    "DomainNames": string;
    /**
     * 需要删除的功能函数名称，多个用半角逗号（,）分隔。更多功能名称，请参见[域名配置功能参数](~~410622~~)。
     * @example `referer_white_list_set,https_force`
     */
    "FunctionNames": string;
}
