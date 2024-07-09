export interface ListProjectMembersResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMsg: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * true或者false
     * @example `true`
     */
    success: boolean;
    /**
     * member信息
     */
    members: {
        /**
         * 登录账号
         * @example `null`
         */
        account: string;
        /**
         * 用户头像
         * @example `https://xxxxxx.png`
         */
        avatar: string;
        /**
         * 钉钉id
         * @example `null`
         */
        dingTalkId: string;
        /**
         * 展示名
         * @example `名称`
         */
        displayName: string;
        /**
         * 展示昵称
         * @example `mingcheng`
         */
        displayNickName: string;
        /**
         * 展示真名
         * @example `名称`
         */
        displayRealName: string;
        /**
         * 部门信息
         */
        division: {
            /**
             * 部门唯一标识
             * @example `1345xxxxxxx947xxxx`
             */
            identifier: string;
        };
        /**
         * 邮箱
         * @example `accountsxxxx@mail.com`
         */
        email: string;
        /**
         * 性别
         * @example `null`
         */
        gender: string;
        /**
         * 用户唯一 标识符
         * @example `19xxxx31947xxxx`
         */
        identifier: string;
        /**
         * 手机号
         * @example `135xxxxxxxxx`
         */
        mobile: string;
        /**
         * 英文名
         * @example `name`
         */
        nameEn: string;
        /**
         * 昵称
         * @example `昵称`
         */
        nickName: string;
        /**
         * 昵称拼音
         * @example `nicheng`
         */
        nickNamePinyin: string;
        /**
         * 企业信息
         */
        organizationUserInfo: {
            /**
             * 企业唯一标识符
             * @example `5e7xxxxb3cd3711dd6xxx2c`
             */
            organizationIdentifier: string;
        };
        /**
         * 真名
         * @example `xxx`
         */
        realName: string;
        /**
         * 真名拼音
         * @example `xxx`
         */
        realNamePinyin: string;
        /**
         * 用户类型，返回User、UserGroup，表示是用户或是用户组
         * @example `User`
         */
        stamp: string;
        /**
         * 角色id
         * @example `null`
         */
        tbRoleId: string;
        /**
         * 角色名称
         */
        roleName: string;
    }[];
}
