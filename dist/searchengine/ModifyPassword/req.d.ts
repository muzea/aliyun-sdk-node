export interface ModifyPasswordRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 修改密码请求体。
     * @example `{}`
     */
    "body"?: {
        /**
         * 用户名
         * @example `testUserName`
         */
        username: string;
        /**
         * 密码
         * @example `testPassword`
         */
        password: string;
    };
}
