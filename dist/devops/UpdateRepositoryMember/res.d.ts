export interface UpdateRepositoryMemberResponse {
    /**
     * 请求ID
     * @example `F590C9D8-E908-5B6C-95AC-56B7E8011FFA`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码。
     * @example `success`
     */
    errorCode: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 返回详情结果
     */
    result: {
        /**
         * 管理平台用户id
         * @example `30815`
         */
        id: number;
        /**
         * 用户状态
         * @example `normal`
         */
        state: string;
        /**
         * 头像URL。
         * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
         */
        avatarUrl: string;
        /**
         * web url
         * @example `""`
         */
        webUrl: string;
        /**
         * 邮箱
         * @example `test@alibaba.com`
         */
        email: string;
        /**
         * 成员名称。
         * @example `test_memeber_name`
         */
        memberName: string;
        /**
         * 权限等级
         * @example `40`
         */
        accessLevel: number;
        /**
         * 过期时间
         * @example `2020-08-08 08:08:08`
         */
        expireAt: string;
        /**
         * 成员类型
         * TEAMS - 部门
         * USERS - 员工
         * @example `USERS`
         */
        memberType: string;
        /**
         * 关联sourceID
         * @example `223241`
         */
        sourceId: number;
        /**
         * 关联sourceType
         * 可选值：Project / Namespace / Organization
         * @example `Project`
         */
        sourceType: string;
        /**
         * 用户名
         * @example `codeup`
         */
        name: string;
        /**
         * 用户昵称
         * @example `codeup-test`
         */
        username: string;
    };
}
