export interface DescribePropertyProcItemResponse {
    /**
     * 结果的请求ID。
     * @example `BD8AD4C6-A169-4FA3-BA1F-ED40ED52973B`
     */
    RequestId: string;
    /**
     * 页面显示信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `5`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `372`
         */
        TotalCount: number;
        /**
         * 分页查询时，显示的当前页的数据条数。
         * @example `5`
         */
        Count: number;
    };
    /**
     * 进程的信息。
     */
    PropertyItems: {
        /**
         * 进程名称。
         * @example `.ss`
         */
        Name: string;
        /**
         * 进程名对应的服务器数量。
         * @example `8888`
         */
        Count: number;
    }[];
}
