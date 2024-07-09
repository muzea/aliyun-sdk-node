export interface DescribeLiveUserDomainsRequest {
    /**
     * 直播域名业务类型。取值：
     * - **liveVideo**：播流域名。
     * - **liveEdge**：边缘推流域名。
     * >如果不设置此参数，则请求参数DomainName默认查询用户所有直播推流和播流域名。
     * @example `liveVideo`
     */
    "LiveDomainType"?: string;
    /**
     * 分页大小。默认值为**20**，最大值为**50**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 当前页码。取值范围：**1~100000**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 域名模糊匹配过滤。
     * >- 如果LiveDomainType（直播域名业务类型）取值为liveVideo，此参数不传值时，默认查询用户播流域名的相关信息。- 如果LiveDomainType（直播域名业务类型）取值为liveEdge，此参数不传值时，默认查询用户推流域名的相关信息。
     * @example `*.aliyundoc.com`
     */
    "DomainName"?: string;
    /**
     * 域名所属地域。
     * @example `cn-beijing`
     */
    "RegionName"?: string;
    /**
     * 域名查询类型。取值：
     * - **fuzzy_match**（默认值）：模糊匹配。
     * - **pre_match**：前匹配。
     * - **suf_match**：后匹配。
     * - **full_match**：完全匹配。
     * @example `fuzzy_match`
     */
    "DomainSearchType"?: string;
    /**
     * 域名状态。取值：
     * - **online**：运行中（表示域名服务状态正常）。
     * - **offline**：已停止。
     * - **configuring**：配置中。
     * @example `online`
     */
    "DomainStatus"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签健。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
