export interface GetWorkitemCommentListResponse {
    /**
     * Id of the request
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误消息
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
     * true 接口调用成功，false 接口调用失败
     * @example `true 接口调用成功，false 接口调用失败`
     */
    success: string;
    /**
     * 评论列表
     */
    commentList: {
        /**
         * 评论id
         * @example `6573`
         */
        id: number;
        /**
         * 评论内容
         * @example `066961`
         */
        content: string;
        /**
         * 资源类型
         * @example `workitem`
         */
        targetType: string;
        /**
         * 资源id，也就是工作项id
         * @example `9144ef6b72d8exxxxx9e61a4d0`
         */
        targetIdentifier: string;
        /**
         * 父评论id
         * @example `1013131897677566`
         */
        parentId: number;
        /**
         * 创建时间
         * @example `1667205617061`
         */
        createTime: number;
        /**
         * 修改时间
         * @example `1646323200000`
         */
        modifiedTime: number;
        /**
         * 是否置顶
         * @example `true/false`
         */
        isTop: boolean;
        /**
         * 置顶时间
         * @example `1667205617089`
         */
        topTime: number;
        /**
         * 格式类型
         * @example `RICHTEXT/MARKDOWN`
         */
        formatType: string;
        /**
         * 创建人对象
         */
        user: {
            /**
             * 人员账户
             * @example `null`
             */
            account: string;
            /**
             * 人员唯一标识
             * @example `123xxxxxxx222`
             */
            identifier: string;
            /**
             * 人员真实姓名
             * @example `张三`
             */
            realName: string;
            /**
             * 人员昵称
             * @example `李四`
             */
            nickName: string;
            /**
             * 图标
             * @example `null`
             */
            avatar: string;
        };
    }[];
}
