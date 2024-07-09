export interface BatchDeleteVsDomainConfigsRequest {
    /**
     * 您的加速域名，多个用英文半角逗号分隔
     * @example `example.aliyundoc.com`
     */
    "DomainNames": string;
    /**
     * 功能列表名称，多个用逗号分隔
     * @example `https_force`
     */
    "FunctionNames": string;
}
