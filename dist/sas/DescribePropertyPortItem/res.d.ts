export interface DescribePropertyPortItemResponse {
    /**
     * 结果的请求ID。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
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
         * @example `163`
         */
        TotalCount: number;
        /**
         * 分页查询时，显示的当前页的数据条数。
         * @example `5`
         */
        Count: number;
    };
    /**
     * 端口信息。
     */
    PropertyItems: {
        /**
         * 监听端口号。
         * @example `22`
         */
        Port: string;
        /**
         * 端口对应的服务器数量。
         * @example `495`
         */
        Count: number;
        /**
         * 端口对应的网络协议。
         * @example `tcp`
         */
        Proto: string;
    }[];
}
