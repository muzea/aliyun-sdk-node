export interface UpdateGroupMemberResponse {
    /**
     * 请求ID
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
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
         * @example `24661`
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
         * 邮箱
         * @example `username@example.com`
         */
        email: string;
        /**
         * 权限类型
         * 20：浏览者
         * 30：开发者
         * 40：管理员
         * @example `30`
         */
        accessLevel: number;
        /**
         * 成员类型，默认为：USERS
         * @example `USERS`
         */
        memberType: string;
        /**
         * 关联的ID，指代码库或代码组ID
         * @example `223241`
         */
        sourceId: number;
    };
}
