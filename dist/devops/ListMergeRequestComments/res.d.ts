export interface ListMergeRequestCommentsResponse {
    /**
     * 请求ID
     * @example `56C33A95-C04F-59F0-B3CD-E2A2EB9FADBB`
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
     * 返回结果列表
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
         * 评论内容，返回数据为富文本内容
         * @example `{\"htmlValue\":\"<article class=\\\"4ever-article\\\"><p style=\\\"text-align:left;text-indent:0;margin-left:0\\\"><span>测试动态创建整体评论-2</span></p></article>\",\"jsonMLValue\":[\"root\",{},[\"p\",{},[\"span\",{\"data-type\":\"text\"},[\"span\",{\"data-type\":\"leaf\"},\"测试动态创建整体评论-2\"]]]]}`
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
             * @example `codeup`
             */
            name: string;
            /**
             * 用户登录名
             * @example `test-codeup`
             */
            username: string;
            /**
             * 用户状态
             * - active：活跃
             * - blocked：暂不可用
             * @example `active`
             */
            state: string;
            /**
             * 头像地址
             * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
             */
            avatarUrl: string;
            /**
             * 用户邮箱
             * @example `username@example.com`
             */
            email: string;
            /**
             * 主键ID，无业务实义
             * @example `19230`
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
         * 文件路径
         * @example `src/main/test.java`
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
        /**
         * 子评论列表
         */
        childComments: {
            /**
             * 评论唯一业务ID
             * @example `63f0e293357f48f9846ddc4dbbebd0e3`
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
             * @example `2022-03-18 14:24:54`
             */
            commentTime: string;
            /**
             * 上次编辑时间
             * @example `2022-03-18 14:24:54`
             */
            lastEditTime: string;
            /**
             * 评论内容，返回数据为富文本内容
             * @example `{\"htmlValue\":\"
            测试动态创建整体评论-2
            
            \",\"jsonMLValue\":[\"root\",{},[\"p\",{},[\"span\",{\"data-type\":\"text\"},[\"span\",{\"data-type\":\"leaf\"},\"测试动态创建整体评论-2\"]]]]}`
             */
            content: string;
            /**
             * 评论人信息
             */
            author: {
                /**
                 * 阿里云账号ID
                 * @example `204485087002425236`
                 */
                aliyunPk: string;
                /**
                 * 用户名称
                 * @example `codeup`
                 */
                name: string;
                /**
                 * 用户登录名
                 * @example `test-codeup`
                 */
                username: string;
                /**
                 * 用户状态
                 * - active：活跃
                 * - blocked：暂不可用
                 * @example `active`
                 */
                state: string;
                /**
                 * 头像地址
                 * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
                 */
                avatarUrl: string;
                /**
                 * 用户邮箱
                 * @example `username@example.com
                `
                 */
                email: string;
                /**
                 * 主键ID，无业务实义
                 * @example `132582`
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
                 * @example `版本1
                `
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
             * 文件路径
             * @example `src/main/test.java
            `
             */
            filePath: string;
            /**
             * 父评论业务ID
             * @example `5c399e3685e542a28db16d93e9f82abb`
             */
            parentCommentBizId: string;
            /**
             * 父评论业务ID
             * @example `dcf2b23cebfc418f98dbd35e423d9fd3`
             */
            rootCommentBizId: string;
            /**
             * 最后层级子评论列表
             */
            finalChildComments: {
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
                 * @example `2022-03-18 14:24:54`
                 */
                commentTime: string;
                /**
                 * 上次编辑时间
                 * @example `2022-03-18 14:24:54`
                 */
                lastEditTime: string;
                /**
                 * 评论内容，返回数据为富文本内容
                 * @example `{\"htmlValue\":\"
                测试动态创建整体评论-2
                
                \",\"jsonMLValue\":[\"root\",{},[\"p\",{},[\"span\",{\"data-type\":\"text\"},[\"span\",{\"data-type\":\"leaf\"},\"测试动态创建整体评论-2\"]]]]}`
                 */
                content: string;
                /**
                 * 评论人信息
                 */
                author: {
                    /**
                     * 阿里云账号ID
                     * @example `235671547828975455`
                     */
                    aliyunPk: string;
                    /**
                     * 用户名称
                     * @example `codeup`
                     */
                    name: string;
                    /**
                     * 用户登录名
                     * @example `test-codeup`
                     */
                    username: string;
                    /**
                     * 用户状态
                     * - active：活跃
                     * - blocked：暂不可用
                     * @example `active`
                     */
                    state: string;
                    /**
                     * 头像地址
                     * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
                     */
                    avatarUrl: string;
                    /**
                     * 用户邮箱
                     * @example `username@example.com
                    `
                     */
                    email: string;
                    /**
                     * 主键ID，无业务实义
                     * @example `567035`
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
                     * @example `2022-03-18 14:24:54`
                     */
                    createdAt: string;
                };
                /**
                 * 评论所在的文件行号，仅文件行内评论才有
                 * @example `3`
                 */
                lineNumber: string;
                /**
                 * 文件路径
                 * @example `src/main/test.java`
                 */
                filePath: string;
                /**
                 * 父评论业务ID
                 * @example `4c5dcec6a8dc41e69c369737dadc1841`
                 */
                parentCommentBizId: string;
                /**
                 * 根评论业务ID
                 * @example `dcf2b23cebfc418f98dbd35e423d9fd3
                `
                 */
                rootCommentBizId: string;
            }[];
        }[];
    }[];
}
