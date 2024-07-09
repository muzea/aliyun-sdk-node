export interface DescribeLiveDomainConfigsRequest {
    /**
     * 您的推流域名或播流域名。
     * @example `demo.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 功能列表名称。多个功能使用英文逗号（,）分隔。更多详情，请参见下表**Functions功能说明**。
     * @example `set_req_host_header,set_hashkey_args`
     */
    "FunctionNames": string;
}
