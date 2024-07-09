export interface ListUsersResponse {
    /**
     * 请求id
     * @example `0a06dd4816687424611405643e3730`
     */
    requestId: string;
    /**
     * 返回数据
     */
    data: {
        /**
         * 用户列表
         */
        users: {
            /**
             * 账号ID
             * @example `167835629082`
             */
            accountId: string;
            /**
             * 账号名称
             * @example `Bob@`
             */
            accountName: string;
            /**
             * 显示名称
             * @example `Bob`
             */
            displayName: string;
            /**
             * 账号类型
             * @example `ALIYUN`
             */
            accountType: string;
            /**
             * 租户ID
             * @example `1567253789`
             */
            tenantId: string;
        }[];
        /**
         * 返回结果的总数量。
         * @example `64`
         */
        totalCount: number;
        /**
         * 当前页码。
         * @example `2`
         */
        pageNumber: number;
        /**
         * 每页显示条数。
         * @example `10`
         */
        pageSize: number;
    };
}
