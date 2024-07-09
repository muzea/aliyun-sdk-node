export interface DescribePropertySoftwareItemResponse {
    /**
     * 请求ID。
     * @example `3A85CFCF-05C8-451A-9E41-C0D5E96BA407`
     */
    RequestId: string;
    /**
     * 返回结果的页面显示信息。
     */
    PageInfo: {
        /**
         * 返回结果中显示的当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 返回结果中每页显示数据条数。
         * @example `2`
         */
        PageSize: number;
        /**
         * 返回数据的总条数。
         * @example `5037`
         */
        TotalCount: number;
        /**
         * 返回结果的当前页显示数据条数。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 返回的软件列表。
     */
    PropertyItems: {
        /**
         * 返回的软件资产名称。
         * @example `aaa_base`
         */
        Name: string;
        /**
         * 返回结果中软件资产对应的服务器数量。
         * @example `23`
         */
        Count: number;
    }[];
}
