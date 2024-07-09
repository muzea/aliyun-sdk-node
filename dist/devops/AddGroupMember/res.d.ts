export interface AddGroupMemberResponse {
    /**
     * 请求ID
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果列表（可能添加多个成员）
     */
    result: {
        /**
         * Codeup用户ID
         * @example `123456`
         */
        id: number;
        /**
         * 用户名称
         * @example `codeup`
         */
        name: string;
        /**
         * 用户昵称
         * @example `test-codeup`
         */
        username: string;
        /**
         * 状态
         * 可选值：active / blocked
         * @example `active`
         */
        state: string;
        /**
         * 头像地址
         * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
         */
        avatarUrl: string;
        /**
         * 用户邮箱
         * @example `username@example.com`
         */
        email: string;
        /**
         * 成员权限
         * - 20：浏览者
         * - 30：开发者
         * - 40：管理员
         * @example `30`
         */
        accessLevel: number;
        /**
         * 来源ID，指代码库或代码组ID
         * @example `223241`
         */
        sourceId: number;
    }[];
}
