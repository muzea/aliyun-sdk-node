export interface DescribeCustomLinesResponse {
    /**
     * 每页个数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `B57C121B-A45F-44D8-A9B2-13E5A5044195`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 页数。
     * @example `1`
     */
    TotalPages: number;
    /**
     * 自定义线路列表。
     */
    CustomLines: {
        /**
         * 自定义线路Code。
         * @example `hra0yc-597`
         */
        Code: string;
        /**
         * 线路名称。
         * @example `hra0yd-597`
         */
        Name: string;
        /**
         * 自定义线路唯一ID。
         * @example `597`
         */
        Id: number;
    }[];
    /**
     * 自定义线路总数。
     * @example `1`
     */
    TotalItems: number;
}
