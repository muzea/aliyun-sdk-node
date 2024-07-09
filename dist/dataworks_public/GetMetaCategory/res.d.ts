export interface GetMetaCategoryResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `0bc1ec92159376`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 业务数据。
     */
    Data: {
        /**
         * 请求的数据页数，用于翻页。
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页显示的条数，默认为10条，最大100条。
         * @example `10`
         */
        PageSize: number;
        /**
         * 类目的总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * Data实例列表。
         */
        DataEntityList: {
            /**
             * 类目的层数。
             * @example `1`
             */
            Depth: number;
            /**
             * 类目的备注信息。
             * @example `category 1`
             */
            Comment: string;
            /**
             * 修改类目的时间。
             * @example `1541576644000`
             */
            ModifiedTime: number;
            /**
             * 创建类目的时间。
             * @example `1541576644000`
             */
            CreateTime: number;
            /**
             * 类目的ID。
             * @example `133`
             */
            CategoryId: number;
            /**
             * 上一次操作的用户ID。
             * @example `12345`
             */
            LastOperatorId: string;
            /**
             * 类目的名称。
             * @example `category 1`
             */
            Name: string;
            /**
             * 父类目的ID。
             * @example `12`
             */
            ParentCategoryId: number;
            /**
             * 类目所有者的ID。
             * @example `123`
             */
            OwnerId: string;
        }[];
    };
}
