export interface ListDataServiceApplicationsResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EFG***`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `正常`
     */
    ErrorMessage: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: string;
    /**
     * 查询得到的应用基础信息。
     */
    Data: {
        /**
         * 页码，和请求中的PageNumber一致。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，默认为10条，最大100条。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 应用的基础信息列表。
         */
        Applications: {
            /**
             * 应用的名称。
             * @example `我的应用`
             */
            ApplicationName: string;
            /**
             * 应用ID。
             * @example `20000`
             */
            ApplicationId: number;
            /**
             * 工作空间的ID。
             * @example `10000`
             */
            ProjectId: number;
        }[];
    };
}
