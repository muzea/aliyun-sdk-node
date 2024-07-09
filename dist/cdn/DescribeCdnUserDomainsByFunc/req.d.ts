export interface DescribeCdnUserDomainsByFuncRequest {
    /**
     * 功能ID，您可在[域名配置功能参数](~~388460~~)文档，根据功能名称搜索查询。
     * 例如：配置回源HOST（set_req_host_header）功能ID为18。
     * @example `7`
     */
    "FuncId": number;
    /**
     * 页码，默认值：**1**。
     * 取值范围：**1**~**100000**。
     * @example `10`
     */
    "PageNumber"?: number;
    /**
     * 单页显示域名的数量，默认值：**20**。
     * 取值范围：**1**~**50**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 资源组ID。
     * @example `rg-xxxxx`
     */
    "ResourceGroupId"?: string;
}
