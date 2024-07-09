export interface DescribeDcdnUserDomainsByFuncRequest {
    /**
     * 功能ID，您可在[域名配置功能参数](~~410622~~)文档，根据功能名称搜索查询。
     * 例如：配置回源HOST（set_req_host_header）功能ID为18。
     * @example `7`
     */
    "FuncId": number;
    /**
     * 是否开通funcid功能。
     * - **config**：开通。
     * - **unconfig**：未开通。
     * @example `config`
     */
    "FuncFilter"?: string;
    /**
     * 加速域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 页码，默认值：**1**。
     * 取值范围：**1~100000**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 单页显示域名的数量，默认值：**20**。
     * 取值范围：**1~500**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 资源组ID。
     * @example `rg-acfmyuji4b6r4**`
     */
    "ResourceGroupId"?: string;
    /**
     * 查询类型，支持以下2种类型，默认为精确查询。
     * - fuzzy_match：模糊查询。
     * - exact_match：精确查询。
     * @example `exact_match`
     */
    "MatchType"?: string;
}
