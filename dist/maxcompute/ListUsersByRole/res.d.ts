export interface ListUsersByRoleResponse {
    /**
     * 请求id
     * @example `0be3e0bb16654558425251398e27a9`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 用户列表
         */
        users: {
            /**
             * 用户名称
             * @example `ALIYUN${account_name}`
             */
            name: string;
        }[];
    };
}
