interface BatchDeleteDcdnDomainConfigsRequest {
    "RegionId"?: string;
    /**
    * 您的加速域名，多个用逗号（,）分隔。
    * @example `example.com`
    */ "DomainNames": string;
    /**
    * 功能列表名称，用逗号（,）分隔。
    * @example `referer_white_list_set,https_force`
    */ "FunctionNames": string;
    "OwnerId"?: number;
}
export { BatchDeleteDcdnDomainConfigsRequest };