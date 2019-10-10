interface BatchDeleteLiveDomainConfigsRequest {
    "RegionId"?: string;
    /**
    * 您的加速域名，多个用英文半角逗号分隔。
    * @example `play.yourdomain.com`
    */ "DomainNames": string;
    /**
    * 功能列表名称，用逗号分隔。
    * @example `referer_white_list_set,ip_black_list_set`
    */ "FunctionNames": string;
    "OwnerId"?: number;
}
export { BatchDeleteLiveDomainConfigsRequest };