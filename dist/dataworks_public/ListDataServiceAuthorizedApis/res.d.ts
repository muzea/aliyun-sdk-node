export interface ListDataServiceAuthorizedApisResponse {
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
     * 错误信息
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 获得授权的API信息。
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
         * 获得授权的API列表。
         */
        ApiAuthorizedList: {
            /**
             * API的ID。
             * @example `10002`
             */
            ApiId: number;
            /**
             * API的状态，可选枚举值包括0（未发布）和1（已发布）。
             * @example `0`
             */
            ApiStatus: number;
            /**
             * 授权者的阿里云ID。
             * @example `23456`
             */
            GrantOperatorId: string;
            /**
             * 工作空间的ID。
             * @example `10000`
             */
            ProjectId: number;
            /**
             * API负责人阿里云ID
             * @example `12345`
             */
            CreatorId: string;
            /**
             * API的授权到期时间。
             * @example `2020-06-24T00:21:01+0800`
             */
            GrantEndTime: string;
            /**
             * API的最近更新时间。
             * @example `2020-06-23T00:21:01+0800`
             */
            ModifiedTime: string;
            /**
             * 分组ID。
             * @example `abcde123456789`
             */
            GroupId: string;
            /**
             * API的授权时间。
             * @example `2020-06-23T00:21:01+0800`
             */
            GrantCreatedTime: string;
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
        }[];
    };
}
