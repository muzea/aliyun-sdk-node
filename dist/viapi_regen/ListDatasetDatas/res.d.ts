export interface ListDatasetDatasResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `EF6CCDDD-D5AA-09AD-B596-4413F2E4B162`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 当前页数。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 每页数据显示条数。
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
         * 数据集列表中数据集合。
         */
        Elements: any[];
    };
}
