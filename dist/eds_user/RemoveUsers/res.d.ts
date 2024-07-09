export interface RemoveUsersResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 删除便捷账号操作的结果。
     */
    RemoveUsersResult: {
        /**
         * 删除成功的便捷账号。
         */
        RemovedUsers: string[];
        /**
         * 删除失败的用户信息集合。
         */
        FailedUsers: {
            /**
             * 删除失败的便捷账号。
             * @example `test2`
             */
            EndUserId: string;
            /**
             * 错误码。
             * @example `InvalidUsername`
             */
            ErrorCode: string;
            /**
             * 错误信息。
             * @example `test2 is an invalid username.`
             */
            ErrorMessage: string;
        }[];
    };
}
