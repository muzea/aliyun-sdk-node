export interface AddRepositoryMemberResponse {
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 请求ID
     * @example `4D6AF7CC-B43B-5454-86AB-023D25E44868`
     */
    requestId: string;
    /**
     * 错误码
     * @example `Invalid.IdNotFound`
     */
    errorCode: string;
    /**
     * 请求状态
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * 邮箱
         * @example `username@example.com`
         */
        email: string;
        /**
         * 头像地址
         * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
         */
        avatarUrl: string;
        /**
         * 状态
         * 可选值：active / blocked
         * @example `active`
         */
        state: string;
        /**
         * 权限类型
         * - 20-浏览者
         * - 30-开发者
         * - 40-管理员
         * @example `40`
         */
        accessLevel: number;
        /**
         * Codeup用户Id
         * @example `123456`
         */
        id: number;
    }[];
}
