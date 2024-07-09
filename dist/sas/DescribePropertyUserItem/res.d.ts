export interface DescribePropertyUserItemResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `76068BE2-F9C4-4EDD-967B-F503B8CCDD3D`
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
         * @example `2`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `114`
         */
        TotalCount: number;
        /**
         * 分页查询时，显示的当前页的数据条数。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 账号信息。
     */
    PropertyItems: {
        /**
         * 账号名称。
         * @example `adm`
         */
        User: string;
        /**
         * 账号对应的服务器数量。
         * @example `384`
         */
        Count: number;
    }[];
}
