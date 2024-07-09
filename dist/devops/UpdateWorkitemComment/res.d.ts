export interface UpdateWorkitemCommentResponse {
    /**
     * Id of the request
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
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
     * @example `InvalidParam.NotFound`
     */
    errorCode: string;
    /**
     * true或者false
     * @example `true`
     */
    success: string;
    /**
     * 评论
     */
    comment: {
        /**
         * 评论唯一id
         * @example `1964584`
         */
        id: string;
        /**
         * 评论内容
         * @example `这是更新后的评论内容`
         */
        content: string;
        /**
         * 所属资源类型
         * @example `workitem`
         */
        targetType: string;
        /**
         * 资源id，工作项目id
         * @example `deafe5f33xxxxx6a259d8dafd`
         */
        targetIdentifier: string;
        /**
         * 父任务id
         * @example `2684432`
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
         * @example `MARKDOWN/RICHTEXT`
         */
        formatType: string;
        /**
         * 用户信息
         */
        user: {
            /**
             * 阿里云账号
             * @example `1316458xxxxx41068`
             */
            account: string;
            /**
             * 用户id
             * @example `9144ef6b72d8exxxxx9e61a4d0`
             */
            identifier: string;
            /**
             * 用户真实姓名
             * @example `王五`
             */
            realName: string;
            /**
             * 用户昵称
             * @example `王五`
             */
            nickName: string;
            /**
             * 用户头像
             * @example `https://tcs-devops.aliyuncs.com/thumbnail/112m7150e256dbba0d6456bafbb65c81f90d/w/200/h/200`
             */
            avatar: string;
            /**
             * 展示名称
             * @example `王五`
             */
            displayName: string;
        };
    };
}
