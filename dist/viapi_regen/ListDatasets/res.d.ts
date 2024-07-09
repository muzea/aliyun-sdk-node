export interface ListDatasetsResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `F32D7E93-9C55-151E-9C60-B746A4A5B7FE`
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
         * @example `1`
         */
        TotalPage: number;
        /**
         * 总数据量。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 数据集列表中数据集合。
         */
        Elements: any[];
    };
}
