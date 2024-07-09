export interface ListLabelsetsResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `638E7B41-5327-0B79-A3A5-390278D7625F`
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
         * @example `2`
         */
        TotalCount: number;
        /**
         * 返回的标注集中的数据结果。
         */
        Elements: any[];
    };
}
