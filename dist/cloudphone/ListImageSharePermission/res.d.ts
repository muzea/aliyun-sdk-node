export interface ListImageSharePermissionResponse {
    /**
     * 请求ID。
     * @example `F6037E25-FE1F-5423-A4BC-08BE09B81D16`
     */
    RequestId: string;
    Accounts: {
        /**
         * 用户ID列表。
         */
        Account: {
            /**
             * 用户ID。
             * @example `1765205448******`
             */
            AliyunId: string;
        }[];
    };
}
