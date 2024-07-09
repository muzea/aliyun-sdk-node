export interface ListDataServiceApiAuthoritiesResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `正常`
     */
    ErrorMessage: string;
    /**
     * 调用是否成功。
     * @example `Boolean`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: string;
    /**
     * 授权给他人的API列表。
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
         * 返回数据结构。
         */
        ApiAuthorizationList: {
            /**
             * API的状态，可选枚举值包括0（未发布）和1（已发布）。
             * @example `0`
             */
            ApiStatus: number;
            /**
             * API的ID。
             * @example `10002`
             */
            ApiId: number;
            /**
             * API的最近更新时间。
             * @example `2020-06-23T00:21:01+0800`
             */
            ModifiedTime: string;
            /**
             * 分组ID。
             * @example `ab123`
             */
            GroupId: string;
            /**
             * 工作空间的ID。
             * @example `10000`
             */
            ProjectId: number;
            /**
             * API负责人的阿里云ID。
             * @example `12345`
             */
            CreatorId: string;
            /**
             * API的创建时间。
             * @example `2020-06-23T00:21:01+0800`
             */
            CreatedTime: string;
            /**
             * API的名称。
             * @example `我的API名称`
             */
            ApiName: string;
            /**
             * 租户ID。
             * @example `10001`
             */
            TenantId: number;
            /**
             * API的路径。
             * @example `/test/1`
             */
            ApiPath: string;
            /**
             * 授权给他人的授权详情列表。
             */
            AuthorizationRecords: {
                /**
                 * 授权有效期的截止时间。
                 * @example `2020-06-24T00:21:01+0800`
                 */
                EndTime: string;
                /**
                 * API负责人的阿里云ID。
                 * @example `12345`
                 */
                CreatorId: string;
                /**
                 * 授权时间。
                 * @example `2020-06-23T00:21:01+0800`
                 */
                CreatedTime: string;
                /**
                 * 获得授权的工作空间ID。
                 * @example `10004`
                 */
                ProjectId: number;
            }[];
        }[];
    };
}
