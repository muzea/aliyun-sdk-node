export interface CreateWorkitemRecordResponse {
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
     * @example `success`
     */
    errorCode: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 工作时间
     */
    WorkitemTime: {
        /**
         * 工时唯一标识
         * @example `deafe5f33xxxxx6a259d8dafd`
         */
        identifier: string;
        /**
         * 工作项id
         * @example `9144ef6b72d8exxxxx9e61a4d0`
         */
        workitemIdentifier: string;
        /**
         * 实际工时，小时为单位
         * @example `12`
         */
        actualTime: number;
        /**
         * 工时类型，通过获取工时类型接口获得
         * @example `deafe5f33xxxxx6a259d8dafd`
         */
        type: string;
        /**
         * 描述
         * @example `这是一段描述`
         */
        description: string;
        /**
         * 登记人相关信息
         */
        recordUser: {
            /**
             * 阿里云账号
             * @example `1316458xxxxx41068`
             */
            account: string;
            /**
             * 用户id
             * @example `deafe5f33xxxxx6a259d8dafd`
             */
            identifier: string;
            /**
             * 用户实际名
             * @example `王五`
             */
            realName: string;
            /**
             * 用户昵称
             * @example `王武`
             */
            nickName: string;
            /**
             * 用户头像
             * @example `https://tcs-devops.aliyuncs.com/thumbnail/112m7150e256dbba0d6456bafbb65c81f90d/w/200/h/200`
             */
            avatar: string;
            /**
             * 普通用户或者用户组
             * @example `null标识普通用户`
             */
            stamp: string;
            /**
             * 用户英文名
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
             * @example `保留字段`
             */
            mobile: string;
            /**
             * 邮箱地址
             * @example `xxx@xxx.com`
             */
            email: string;
            /**
             * 昵称拼音
             * @example `wangwu
            `
             */
            nickNamePinyin: string;
            /**
             * 实际姓名拼音
             * @example `wangwu`
             */
            realNamePinyin: string;
            /**
             * 展示的昵称
             * @example `王五`
             */
            displayNickName: string;
            /**
             * 展示的实际名
             * @example `王五`
             */
            displayRealName: string;
            /**
             * 展示名
             * @example `王五`
             */
            displayName: string;
            /**
             * 钉钉id
             * @example `xx12322`
             */
            dingTalkId: string;
            /**
             * 角色id
             * @example `1e9903d8b3f1xxxxxf9286ef5`
             */
            tbRoleId: string;
            /**
             * 是否可见
             * @example `true/false`
             */
            isDisabled: boolean;
        };
        /**
         * 开始时间
         * @example `1667205617061`
         */
        gmtStart: number;
        /**
         * 结束时间
         * @example `1667205617089`
         */
        gmtEnd: number;
    };
}
