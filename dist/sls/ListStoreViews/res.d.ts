export interface ListStoreViewsResponse {
    /**
     * 返回的数据集个数。
     * @example `100`
     */
    count: number;
    /**
     * 日志项目中的数据集总数。
     * @example `100`
     */
    total: number;
    /**
     * 数据集名称列表。
     */
    storeviews: string[];
}
