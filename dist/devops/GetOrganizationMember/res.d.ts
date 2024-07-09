export interface GetOrganizationMemberResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `HC93CE1A-8D7A-13A9-8306-7465DE2E5C0F`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `error info`
     */
    errorMessage: string;
    /**
     * 成员
     */
    member: {
        /**
         * 阿里云用户UID
         * @example `123456677888`
         */
        accountId: string;
        /**
         * 生日
         * @example `1631845101798`
         */
        birthday: number;
        /**
         * 部门名称列表
         */
        deptLists: string[];
        /**
         * 邮箱
         * @example `123@mail.com`
         */
        email: string;
        /**
         * 入职时间
         * @example `1631845101798`
         */
        hiredDate: number;
        /**
         * 第三方信息
         */
        identities: {
            /**
             * 第三方系统的用户 id
             * @example `1236666`
             */
            externUid: string;
            /**
             * 第三方系统
             * @example `Dingtalk`
             */
            provider: string;
        };
        /**
         * 加入云效企业时间
         * @example `1631845101798`
         */
        joinTime: number;
        /**
         * 最近一次访问时间
         * @example `1631845101798`
         */
        lastVisitTime: number;
        /**
         * 手机号
         * @example `1390000****`
         */
        mobile: string;
        /**
         * 企业成员名
         * @example `名字1`
         */
        organizationMemberName: string;
        /**
         * 企业角色名字
         * @example `管理员`
         */
        organizationRoleName: string;
        /**
         * 工号
         * @example `373***`
         */
        jobNumber: string;
        /**
         * 企业角色Id
         * @example `8fc0c9ff039711dd64acd000`
         */
        organizationRoleId: string;
        /**
         * 用户状态（正常（normal），已停用（blocked），已删除（deleted））
         * @example `normal`
         */
        state: string;
    };
    /**
     * 错误码
     * @example `null`
     */
    errorCode: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
}
