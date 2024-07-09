export interface DescribeDcdnUserDomainsRequest {
    /**
     * 分页大小。默认**20**，取值：**1**~**500**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 页数。取值范围：**1**~**100000**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 加速域名。如果不传该参数，默认不做域名匹配搜索，返回所有符合条件的域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 域名状态过滤。
     *  - **online**：启用。
     *  - **offline**：停用。
     *  - **configuring**：配置中。
     * - **configure_failed**：配置失败。
     * - **checking**：正在审核。
     * - **check_failed**：审核失败。
     * @example `online`
     */
    "DomainStatus"?: string;
    /**
     * 域名查询类型。
     * - **fuzzy_match**：模糊匹配。
     * - **pre_match**：前匹配。
     * - **suf_match**：后匹配。
     * - **full_match**（默认值）：完全匹配。
     * > 传递了域名参数的情况下，不传DomainSearchType参数，则默认采用完全匹配模式。
     * @example `fuzzy_match`
     */
    "DomainSearchType"?: string;
    /**
     * 是否展示审核中、审核失败、配置失败的域名。取值：
     * - true：展示。
     * - false：不展示。
     * @example `false`
     */
    "CheckDomainShow"?: boolean;
    /**
     * 资源组ID。
     * @example `rg-acfmv6jutt**`
     */
    "ResourceGroupId"?: string;
    /**
     * 更新开始时间，日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2018-05-10T12:00:00Z`
     */
    "ChangeStartTime"?: string;
    /**
     * 更新结束时间，日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2018-05-10T14:00:00Z`
     */
    "ChangeEndTime"?: string;
    /**
     * 加速区域：默认为全部。
     * - **domestic**：仅中国内地。
     * - **overseas**：全球（不包含中国内地）。
     * - **global**：全球。
     * @example `domestic`
     */
    "Coverage"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键，N的取值范围**1**~**20**。通过TagDcdnResources接口可以给域名设置Tag。
         * @example `1`
         */
        Key: string;
        /**
         * 标签值，N的取值范围**1**~**20**。
         * @example `1`
         */
        Value: string;
    }[];
    /**
     * 业务类型，多个用逗号隔开，默认值为**dynamic**，查询普通dcdn域名。查询计算服务类型域名时，传 **computing_routine**,**computing_image**。
     * @example `computing_routine`
     */
    "WebSiteType"?: string;
}
