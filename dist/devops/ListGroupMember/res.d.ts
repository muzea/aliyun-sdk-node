export interface ListGroupMemberResponse {
    /**
     * 请求ID
     * @example `C8F8B434-B006-59FB-8B9C-0382CF3D5680`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `”“`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果列表
     */
    result: {
        /**
         * Codeup用户ID
         * @example `123456`
         */
        id: number;
        /**
         * 用户名称
         * @example `test-codeup`
         */
        name: string;
        /**
         * 用户昵称
         * @example `test-codeup-nickname`
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
         * 权限类型
         * - 20-浏览者
         * - 30-开发者
         * - 40-管理员
         * @example `30`
         */
        accessLevel: number;
        /**
         * 成员类型，默认为USERS
         * TEAMS - 部门
         * USERS - 员工
         * @example `USERS`
         */
        memberType: string;
        /**
         * 关联的sourceId，该API一般指代码组的ID
         * @example `223241`
         */
        sourceId: number;
    }[];
}
