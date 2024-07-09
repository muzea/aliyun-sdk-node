export interface BatchSetLiveDomainConfigsRequest {
    /**
     * 需要进行批量配置的域名。取值可以是推流域名、主播流域名或子播流域名。多个域名用英文逗号（,）分隔。
     * @example `demo.aliyundoc.com,example.aliyundoc.com,example.com`
     */
    "DomainNames": string;
    /**
     * 功能列表。
     * 某些功能，如`filetype_based_ttl_set`，可以设置多条记录，当需要更新其中某条记录时，可通过该条记录的`configId`来指定。更多信息，请参见下表**Function格式说明**和**Functions功能说明**。
     * @example ` [{"functionArgs":[{"argName":"file_type","argValue":"jpg"},{"argName":"ttl","argValue":"18"},{"argName":"weight","argValue":"30"}],"functionName":"filetype_based_ttl_set","configId":506***}]`
     */
    "Functions": string;
}
