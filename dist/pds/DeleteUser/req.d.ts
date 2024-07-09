export interface DeleteUserRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body": {
        /**
         * 用户id
         * @example `c9b7a5aa04d14ae3867fdc886fa01da4`
         */
        user_id: string;
    };
}
