export interface ListDomainsRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 待查询的全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    "AcceleratorId"?: string;
    /**
     * 待查询的加速域名。
     * @example `www.example.com`
     */
    "Domain"?: string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 待查询的加速域名ICP备案状态。取值：
     * - **illegal**：违规。
     * - **inactive**：未备案。
     * - **active**：已备案。
     * - **unknown**：未知。
     * @example `active`
     */
    "State"?: string;
}
