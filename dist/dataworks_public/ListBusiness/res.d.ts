export interface ListBusinessResponse {
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
     * 请求ID。用于出现错误后排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 业务流程列表的详情。
     */
    Data: {
        /**
         * 当前数据页的页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 当前数据页的数据条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 满足查询条件的数据总条数。
         * @example `13`
         */
        TotalCount: number;
        /**
         * 业务流程的详情。
         */
        Business: {
            /**
             * 业务流程的责任人。
             * @example `34824327****`
             */
            Owner: string;
            /**
             * 业务流程的描述信息。
             * @example `我的第一个业务流程`
             */
            Description: string;
            /**
             * 业务流程所在工作空间的ID。
             * @example `10000`
             */
            ProjectId: number;
            /**
             * 业务流程的ID。
             * @example `3000001`
             */
            BusinessId: number;
            /**
             * 业务流程的名称。
             * @example `我的第一个业务流程`
             */
            BusinessName: string;
            /**
             * 业务流程所属的功能模块，包括NORMAL（数据开发）和MANUAL_BIZ（手动业务流程）。
             * @example `NORMAL`
             */
            UseType: string;
        }[];
    };
}
