export interface CreateWorkitemEstimateResponse {
    /**
     * Id of the request
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息。
     * @example `error`
     */
    errorMsg: string;
    /**
     * - 当success为false，返回业务错误码；
     *
     * - 当success为true，返回空值。
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * true或者false
     * @example `true 接口调用成功，false 接口调用失败`
     */
    success: boolean;
    /**
     * 时间estimate
     */
    WorkitemTimeEstimate: {
        /**
         * 工时唯一标识
         * @example `deafe5f33xxxxx6a259d8dafd`
         */
        identifier: string;
        /**
         * 工作项id，唯一标识
         * @example `1e9903d8b3f1xxxxxf9286ef5`
         */
        workitemIdentifier: string;
        /**
         * 预计花费工时
         * @example `11`
         */
        spentTime: number;
        /**
         * 工时类型
         * @example `9144ef6b72d8exxxxx9e61a4d0`
         */
        type: string;
        /**
         * 描述
         * @example `蜜雪冰城甜蜜蜜`
         */
        description: string;
        /**
         * 登记人信息
         */
        recordUser: {
            /**
             * 阿里云账户
             * @example `1316458xxxxx41068`
             */
            account: string;
            /**
             * 用户id
             * @example `deafe5f33xxxxx6a259d8dafd`
             */
            identifier: string;
            /**
             * 用户姓名
             * @example `王五`
             */
            realName: string;
            /**
             * 用户昵称
             * @example `王五`
             */
            nickName: string;
            /**
             * 头像链接
             * @example `https://tcs-devops.aliyuncs.com/thumbnail/112m7150e256dbba0d6456bafbb65c81f90d/w/200/h/200`
             */
            avatar: string;
            /**
             * 普通用户或者用户组
             * @example `null 代表普通用户`
             */
            stamp: string;
            /**
             * 用户拼音
             * @example `wangwu`
             */
            nameEn: string;
            /**
             * 性别
             * @example `保留字段`
             */
            gender: string;
            /**
             * 电话号码
             * @example `无效字段，保留`
             */
            mobile: string;
            /**
             * 邮箱信息
             * @example `xxxxxxcc@xxx.com`
             */
            email: string;
            /**
             * 昵称拼音
             * @example `wangwu`
             */
            nickNamePinyin: string;
            /**
             * 实际名称拼音
             * @example `wangwu`
             */
            realNamePinyin: string;
            /**
             * 展示昵称
             * @example `wangwu`
             */
            displayNickName: string;
            /**
             * 展示实际名称
             * @example `wangwu`
             */
            displayRealName: string;
            /**
             * 展示名称
             * @example `王五`
             */
            displayName: string;
            /**
             * 钉钉id
             * @example `fdsad12xxx11
            `
             */
            dingTalkId: string;
            /**
             * 角色id
             * @example `9144ef6b72d8exxxxx9e61a4d0`
             */
            tbRoleId: string;
            /**
             * 是否不可见
             * @example `true/false`
             */
            isDisabled: boolean;
        };
    };
}
