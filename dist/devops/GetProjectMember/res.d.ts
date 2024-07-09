export interface GetProjectMemberResponse {
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 请求ID
     * @example `30C99C69-A340-5E2E-ACE4-8888FF50CF52`
     */
    requestId: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR
    `
     */
    errorCode: string;
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
         * 权限类型
         * 20-浏览者
         * 30-开发者
         * 40-管理员
         * @example `30`
         */
        accessLevel: number;
        /**
         * 用户名
         * @example `codeup`
         */
        name: string;
        /**
         * 头像地址
         * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c4ef67f1bea827c4/w/100/h/100`
         */
        avatarUrl: string;
        /**
         * Codeup用户ID，无业务实际意义
         * @example `2959`
         */
        id: number;
        /**
         * 用户邮箱
         * @example `username@example.com`
         */
        email: string;
    };
}
