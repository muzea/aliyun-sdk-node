export interface GetUserRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 用户id。
         * 使用AK方式访问时，该项必传；使用AccessToken方式访问时，该项不填写，取自己的用户信息。
         * @example `c9b7a5aa04d14ae3867fdc886fa01da4`
         */
        user_id: string;
    };
}
