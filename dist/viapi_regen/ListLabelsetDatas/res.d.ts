export interface ListLabelsetDatasResponse {
    /**
     * 请求ID
     * @example `06281237-1FA1-09E3-95AC-FE4C95300508`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 当前页数。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 每页显示数据条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总页数。
         * @example `20`
         */
        TotalPage: number;
        /**
         * 总数据量。
         * @example `200`
         */
        TotalCount: number;
        /**
         * 返回的标注集中的数据结果。
         */
        Elements: any[];
    };
}
