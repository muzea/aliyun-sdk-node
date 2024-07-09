export interface DescribeVodUserDomainsRequest {
    /**
     * 分页大小。默认值为**20**，最大值为**50**。取值：**1**~**50**之间的任意整数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 点播加速域名，支持域名模糊匹配过滤。
     * @example `example.aliyundoc.com`
     */
    "DomainName"?: string;
    /**
     * 域名状态过滤。取值意义：
     * - **online**：表示启用。
     * - **offline**：表示停用。
     * - **configuring**：表示配置中。
     * - **configure_failed**：表示配置失败。
     * - **checking**：表示正在审核。
     * - **check_failed**：表示审核失败。
     * @example `online`
     */
    "DomainStatus"?: string;
    /**
     * 域名查询类型：
     * - **fuzzy_match**（默认）：模糊匹配。
     * - **pre_match**：前匹配。
     * - **suf_match**：后匹配。
     * - **full_match**：完全匹配。
     * @example `fuzzy_match`
     */
    "DomainSearchType"?: string;
    /**
     * 标签。
     */
    "Tag"?: {
        /**
         * key标签键，N的取值范围：**1**~**20**。
         * 默认查询所有标签键。
         * @example `key`
         */
        Key: string;
        /**
         * value标签值，N的取值范围：**1**~**20**。
         * 默认查询所有标签值。
         * @example `value`
         */
        Value: string;
    }[];
}
