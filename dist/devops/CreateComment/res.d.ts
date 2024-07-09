export interface CreateCommentResponse {
    /**
     * 请求ID
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS
    `
     */
    requestId: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 返回结果
     */
    result: {
        /**
         * 评论唯一业务ID
         * @example `5c399e3685e542a28db16d93e9f82abb`
         */
        commentBizId: string;
        /**
         * 评论类型
         * - GLOBAL_COMMENT：全局评论
         * - INLINE_COMMENT：文件行内评论
         * @example `GLOBAL_COMMENT`
         */
        commentType: string;
        /**
         * 评论状态
         * - DRAFT：草稿状态
         * - OPENED：已发表或者开启
         * @example `OPENED`
         */
        state: string;
        /**
         * 是否已解决
         * @example `false`
         */
        resolved: boolean;
        /**
         * 是否已经删除
         * @example `false`
         */
        deleted: boolean;
        /**
         * 评论时间
         * @example `2022-03-18 14:24:54
        `
         */
        commentTime: string;
        /**
         * 上次编辑时间
         * @example `2022-03-18 14:24:54
        `
         */
        lastEditTime: string;
        /**
         * 评论内容
         * @example `xxxx`
         */
        content: string;
        /**
         * 评论人信息
         */
        author: {
            /**
             * 阿里云账号ID
             * @example `284692704493684695`
             */
            aliyunPk: string;
            /**
             * 用户名称
             * @example `test-codeup`
             */
            name: string;
            /**
             * 用户登录名
             * @example `test-codeup`
             */
            username: string;
            /**
             * 用户状态，可选值：
             * - active - 可用状态
             * - blocked - 废弃或不可用
             * @example `active`
             */
            state: string;
            /**
             * 头像地址
             * @example `头像地址
            
            https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
             */
            avatarUrl: string;
            /**
             * 用户邮箱
             * @example `username@example.com`
             */
            email: string;
            /**
             * 主键ID，无业务实义
             * @example `19927`
             */
            id: number;
        };
        /**
         * 关联的版本信息
         */
        relatedPatchSet: {
            /**
             * 版本号
             * @example `1`
             */
            patchSetNo: string;
            /**
             * 版本的唯一业务ID
             * @example `513fcfd81a9142d2bb0db4f72c0aa15b`
             */
            patchSetBizId: string;
            /**
             * 版本名称
             * @example `版本1`
             */
            patchSetName: string;
            /**
             * 版本关联的提交ID
             * @example `1a072f5367c21f9de3464b8c0ee8546e47764d2d`
             */
            commitId: string;
            /**
             * 简短的提交ID
             * @example `1a072f53`
             */
            shortId: string;
            /**
             * 关联的合并类型
             * - MERGE_SOURCE：合并源
             * - MERGE_TARGET：合并目标
             * @example `MERGE_SOURCE`
             */
            relatedMergeItemType: string;
            /**
             * 创建时间
             * @example `2022-03-18 14:24:54
            `
             */
            createdAt: string;
        };
        /**
         * 评论所在的文件行号，仅文件行内评论才有
         * @example `3`
         */
        lineNumber: string;
        /**
         * 文件路径，仅commentType=INLINE_COMMENT时才有
         * @example `src/main/update.txt`
         */
        filePath: string;
        /**
         * 父评论业务ID
         * @example `4c5dcec6a8dc41e69c369737dadc1841`
         */
        parentCommentBizId: string;
        /**
         * 根评论业务ID
         * @example `dcf2b23cebfc418f98dbd35e423d9fd3`
         */
        rootCommentBizId: string;
    };
}
