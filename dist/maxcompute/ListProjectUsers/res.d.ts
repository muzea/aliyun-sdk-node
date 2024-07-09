export interface ListProjectUsersResponse {
    /**
     * 请求id
     * @example `0b87b7b316643495896551555e855b`
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
             * @example `userA`
             */
            name: string;
        }[];
    };
}
