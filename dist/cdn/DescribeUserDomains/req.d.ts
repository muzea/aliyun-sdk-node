export interface DescribeUserDomainsRequest {
    /**
     * 分页大小，取值**1~500**，默认值为**20**，最大值为**500**。
     * @example `5`
     */
    "PageSize"?: number;
    /**
     * 取得第几页，取值范围：**1**~**100000**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 加速域名。如果不传该参数，默认不做域名匹配搜索，返回所有符合条件的域名。
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
     * - **stopping**：停用中。
     * - **deleting**：删除中。
     * 如果不传该参数，默认查询所有状态。
     * @example `configure_failed`
     */
    "DomainStatus"?: string;
    /**
     * 域名查询类型。取值：
     * - **fuzzy_match**：模糊匹配。
     * - **pre_match**：前匹配。
     * - **suf_match**：后匹配。
     * - **full_match**（默认值）：完全匹配。
     * > 传递了域名参数的情况下，不传DomainSearchType参数，则默认采用完全匹配模式。
     * @example `fuzzy_match`
     */
    "DomainSearchType"?: string;
    /**
     * CDN业务类型，多个用半角逗号（,）分隔。取值：
     * - **web**：图片小文件。
     * - **download**：大文件下载。
     * - **video**：视音频点播。
     * 如果不传该参数，默认查询所有业务类型。
     * @example `download,web,video`
     */
    "CdnType"?: string;
    /**
     * 是否展示审核中、审核失败、配置失败的域名。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    "CheckDomainShow"?: boolean;
    /**
     * 资源组ID，默认查询所有资源组ID。
     * @example `abcd1234abcd1234`
     */
    "ResourceGroupId"?: string;
    /**
     * 更新开始时间，使用UTC+0时间表示，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-10-10T12:14:55Z`
     */
    "ChangeStartTime"?: string;
    /**
     * 更新结束时间，使用UTC+0时间表示，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需晚于起始时间。
     * @example `2019-10-10T12:14:58Z`
     */
    "ChangeEndTime"?: string;
    /**
     * 加速区域，默认为全部区域。取值：
     * - **domestic**：仅中国内地。
     * - **global**：全球。
     * - **overseas**：全球（不包含中国内地）。
     * @example `domestic`
     */
    "Coverage"?: string;
    /**
     * 源站信息。
     * @example `***`
     */
    "Source"?: string;
    /**
     * 标签列表。列表元素最大数量：20。
     */
    "Tag"?: {
        /**
         * 标签键。
         * 默认查询所有标签键。
         * @example `key`
         */
        Key: string;
        /**
         * 标签值。
         * 默认查询所有标签值。
         * @example `value`
         */
        Value: string;
    }[];
}
