export interface GetUserInfoResponse {
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * Codeup用户ID
         * @example `4205`
         */
        id: number;
        /**
         * 用户姓名或用户在企业中设置的姓名
         * @example `云效Codeup`
         */
        name: string;
        /**
         * 用户登录名
         * @example `my-codeup-login-account`
         */
        username: string;
        /**
         * 用户邮箱
         * @example `username@example.com`
         */
        email: string;
        /**
         * 头像地址
         * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
         */
        avatarUrl: string;
    };
}
