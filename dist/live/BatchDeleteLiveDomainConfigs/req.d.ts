export interface BatchDeleteLiveDomainConfigsRequest {
    /**
     * 您的推流域名或播流域名。多个域名使用英文逗号（,）分隔。
     * @example `demo.aliyundoc.com,example.aliyundoc.com,example.com`
     */
    "DomainNames": string;
    /**
     * 功能列表名称。多个功能使用英文逗号（,）分隔。更多详情，请参考下表**Functions功能说明**。
     * @example `referer_white_list_set,ip_black_list_set`
     */
    "FunctionNames": string;
}
