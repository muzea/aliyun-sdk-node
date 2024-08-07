export interface GetModuleConfigRequest {
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 设置分页查询时，每页显示的账户资产的指纹信息的数量。默认值为**10**，表示每页显示10条账户资产的指纹信息。
     * @example `10`
     */
    "PageSize"?: string;
}
