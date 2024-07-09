export interface CreateWorkitemCommentResponse {
    /**
     * Id of the request
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
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
     * 调用是否成功。
     * @example `true 接口调用成功，false 接口调用失败`
     */
    success: string;
    /**
     * 审核备注。最长支持512字节。
     */
    Comment: {
        /**
         * 唯一标识
         * @example `26842`
         */
        Id: number;
        /**
         * 内容
         * @example `有关于黑龙江地区旅店业室内广告屏出租`
         */
        content: string;
        /**
         * 用户相关信息
         */
        user: {
            /**
             * 阿里云id
             * @example `13164xxxxx41068`
             */
            account: string;
            /**
             * 用户identifier
             * @example `1e9903d8bxxxxxxe9df9286ef5`
             */
            identifier: string;
            /**
             * 实际名
             * @example `王五`
             */
            realName: string;
            /**
             * 昵称
             * @example `王五`
             */
            nickName: string;
            /**
             * 头像链接
             * @example `https://xxxxx/thumbnail/112m7150e256dbba0d6456bafbb65c81f90d/w/200/h/200`
             */
            avatar: string;
            /**
             * 展示名字
             * @example `王五`
             */
            displayName: string;
            /**
             * 资源类型
             * @example `workitem`
             */
            targetType: string;
        };
        /**
         * 资源类型
         * @example `workitem`
         */
        targetType: string;
        /**
         * 资源id，也就是项目id
         * @example `79d523806bdxxxxx95612a5154`
         */
        targetIdentifier: string;
        /**
         * 父工作流id
         * @example `26842`
         */
        parentId: number;
        /**
         * 创建时间
         * @example `1667202662000`
         */
        createTime: number;
        /**
         * 修改时间
         * @example `1637995553000`
         */
        modifiedTime: number;
        /**
         * 是否置顶
         * @example `true/false`
         */
        isTop: boolean;
        /**
         * 置顶时间
         * @example `1667202662000`
         */
        topTime: number;
        /**
         * 评论类型
         * @example `RICHTEXT/MARKDOWN `
         */
        formatType: string;
    };
}
