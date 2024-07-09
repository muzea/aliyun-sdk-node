export interface ListAssetSelectionTargetRequest {
    /**
     * 返回数据当前页的页码。起始值为1，默认值为1。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 本次资产选择的唯一标识。
     * @example `8ccf9b01-2c64-4cba-8122-10115f29****`
     */
    "SelectionKey": string;
}
