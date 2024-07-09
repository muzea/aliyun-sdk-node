export interface ListRepositoryMemberWithInheritedResponse {
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 请求ID
     * @example `AB270BBA-EFB1-5773-B3DC-07CD036F7352`
     */
    requestId: string;
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
     * 返回参数
     */
    result: {
        /**
         * 邮箱
         * @example `yunxiao-codeup@aliyun.com`
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
         * 20-浏览者
         * 30-开发者
         * 40-管理员
         * @example `30`
         */
        accessLevel: number;
        /**
         * 名称
         * @example `codeup`
         */
        name: string;
        /**
         * Codeup用户ID
         * @example `19285`
         */
        id: number;
        /**
         * 用户昵称
         * @example `yunxiao`
         */
        username: string;
        /**
         * 继承代码组信息
         */
        inherited: {
            /**
             * 类型
             * 可选值：Group / OrgNamespace
             * @example `Group`
             */
            type: string;
            /**
             * 代码组完整名称（含完整组名称）
             * @example `test / test-group（斜杠两边有空格）`
             */
            nameWithNamespace: string;
            /**
             * 代码组完整路径（含完整组路径）
             * @example `test/test-group
            `
             */
            pathWithNamespace: string;
            /**
             * 可见性
             * 0-私有
             * 10-企业内公开
             * @example `0`
             */
            visibilityLevel: string;
            /**
             * 代码组路径
             * @example `test-group`
             */
            path: string;
            /**
             * 代码组名称
             * @example `test-group`
             */
            name: string;
            /**
             * 代码组ID
             * @example `2022`
             */
            id: number;
        };
    }[];
}
