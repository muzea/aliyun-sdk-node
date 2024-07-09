export interface DescribeApisByBackendResponse {
    /**
     * 分页参数：当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `CEB6EC62-B6C7-5082-A45A-45A204724AC2`
     */
    RequestId: string;
    /**
     * 分页参数：每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `1`
     */
    TotalCount: number;
    ApiInfoList: {
        /**
         * 返回的API列表信息
         */
        ApiInfo: {
            /**
             * API的ID
             * @example `20bcdc9453524b78a8beb1f6de21edb7`
             */
            ApiId: string;
            /**
             * API的描述信息
             * @example `test`
             */
            Description: string;
            /**
             * api分组名称
             * @example `testApiGroup`
             */
            GroupName: string;
            /**
             * api分组ID
             * @example `15bcdc9453524b7gs8beb1f6de21edb7`
             */
            GroupId: string;
            /**
             * API的请求路径
             * @example `/test`
             */
            Path: string;
            /**
             * API的请求方法
             * @example `GET`
             */
            Method: string;
            /**
             * API名称
             * @example `testApi`
             */
            ApiName: string;
        }[];
    };
}
