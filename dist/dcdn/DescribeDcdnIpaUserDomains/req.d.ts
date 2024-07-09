export interface DescribeDcdnIpaUserDomainsRequest {
    /**
     * 每个页面显示的域名数，默认**20**，最大**500**。
     * 取值范围：**1**~**500**之间的任意整数。
     * @example `5`
     */
    "PageSize"?: number;
    /**
     * 页码。取值范围为：**1**~**100000**。
     * 默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 根据域名匹配过滤。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 域名状态过滤。取值：
     * - **online**：启用。
     * - **offline**：停用。
     * - **configuring**：配置中。
     * - **configure_failed**：配置失败。
     * - **checking**：正在审核。
     * - **check_failed**：审核失败。
     * @example `online`
     */
    "DomainStatus"?: string;
    /**
     * 域名查询类型。取值：
     * - **full_match**（默认值）：完全匹配。
     * - **fuzzy_match**：模糊匹配。
     * - **pre_match**：前匹配。
     * - **suf_match**：后匹配。
     * @example `fuzzy_match`
     */
    "DomainSearchType"?: string;
    /**
     * 是否展示审核中、审核失败、配置失败的域名。取值：
     * -  **true**：显示。
     * -  **false**：不显示。
     * @example `false`
     */
    "CheckDomainShow"?: boolean;
    /**
     * 资源组ID。
     * @example `rg-acfmyuji4b6r4**`
     */
    "ResourceGroupId"?: string;
    /**
     * 功能ID。 例如：7表示路径过期时间。更多功能ID，请参见[域名配置功能函数](~~410622~~)。
     * @example `7`
     */
    "FuncId"?: string;
    /**
     * Func开关设置。
     * - config：代表开通Func。
     * - unconfig：代表没有开通Func。
     * @example `config`
     */
    "FuncFilter"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键，N的取值范围1~20。通过TagDcdnResources接口可以给域名设置Tag。
         * @example `1`
         */
        Key: string;
        /**
         * 标签值，N的取值范围1~20。
         * @example `1`
         */
        Value: string;
    }[];
}
