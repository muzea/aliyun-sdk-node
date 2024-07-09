export interface DescribePropertyUserItemRequest {
    /**
     * 设置是否强制刷新待查询数据。取值：
     * - **true**：强制刷新
     * - **false**：不强制刷新
     * @example `true`
     */
    "ForceFlush"?: boolean;
    /**
     * 资产指纹的账号信息。
     * @example `adm`
     */
    "User"?: string;
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，每页显示数据的最大条数。
     * @example `2`
     */
    "PageSize"?: number;
}
