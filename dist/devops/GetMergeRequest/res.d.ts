export interface GetMergeRequestResponse {
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * 合并请求唯一ID
         * @example `bca90244c4b749e0b109df52ac0eb570`
         */
        mrBizId: string;
        /**
         * 代码库ID
         * @example `2369234`
         */
        projectId: number;
        /**
         * 合并请求局部ID，表示代码库下的第几个合并请求
         * @example `1`
         */
        localId: number;
        /**
         * 创建时间
         * @example `2023-05-30T02:53:36Z`
         */
        createTime: string;
        /**
         * 更新时间
         * @example `2023-05-30T02:53:36Z`
         */
        updateTime: string;
        /**
         * 合并请求类型，通常为CODE_REVIEW
         * - CODE_REVIEW：代码评审
         * - REF_REVIEW：引用评审
         * @example `CODE_REVIEW`
         */
        mrType: string;
        /**
         * 源代码库ID
         * @example `2369234`
         */
        sourceProjectId: number;
        /**
         * 源分支
         * @example `test-merge-request`
         */
        sourceBranch: string;
        /**
         * 目标库ID
         * @example `2369234`
         */
        targetProjectId: number;
        /**
         * 目标分支
         * @example `master`
         */
        targetBranch: string;
        /**
         * 合并请求标题
         * @example `test-合并请求标题`
         */
        title: string;
        /**
         * 合并请求描述信息
         * @example `test-合并请求的具体描述内容`
         */
        description: string;
        /**
         * 评审人信息列表
         */
        reviewers: {
            /**
             * Codeup的用户ID
             * @example `90452`
             */
            id: number;
            /**
             * 用户名称
             * @example `test-codeup`
             */
            name: string;
            /**
             * 用户登录名
             * @example `root-test-codeup`
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
             * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
             */
            avatarUrl: string;
            /**
             * 用户邮箱
             * @example `username@example.com`
             */
            email: string;
            /**
             * 评审人是否已经评审过
             * @example `false`
             */
            hasReviewed: boolean;
            /**
             * 评审意见，若未评审则为空
             * - PASS：通过
             * - NOT_PASS：暂不通过
             * @example `NOT_PASS`
             */
            reviewOpinionStatus: string;
            /**
             * 评审人评审完成时间
             * > 需要确保评审人已经完成评审，否则该值为空
             * @example `2023-05-30T02:53:36Z`
             */
            reviewTime: string;
            /**
             * 评审人是否发表过评论
             * @example `true`
             */
            hasCommented: boolean;
        }[];
        /**
         * 作者信息
         */
        author: {
            /**
             * Codeup用户ID
             * @example `19927`
             */
            id: number;
            /**
             * 用户名称
             * @example `test-codeup`
             */
            name: string;
            /**
             * 用户登录名
             * @example `root-test-codeup`
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
             * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
             */
            avatarUrl: string;
            /**
             * 用户邮箱
             * @example `username@example.com`
             */
            email: string;
        };
        /**
         * 订阅人信息列表
         */
        subscribers: {
            /**
             * Codeup的用户ID
             * @example `90452`
             */
            id: number;
            /**
             * 用户名称
             * @example `test-subscriber`
             */
            name: string;
            /**
             * 用户登录名
             * @example `test-subscriber`
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
             * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
             */
            avatarUrl: string;
            /**
             * 用户邮箱
             * @example `username@example.com`
             */
            email: string;
        }[];
        /**
         * 合并请求状态
         * - UNDER_DEV：开发中
         * - UNDER_REVIEW：评审中
         * - TO_BE_MERGED：待合并
         * - CLOSED：已关闭
         * - MERGED：已合并
         * @example `UNDER_REVIEW`
         */
        status: string;
        /**
         * 创建来源
         * - WEB：网页UI创建
         * - COMMAND_LINE：命令行创建
         * @example `WEB`
         */
        createFrom: string;
        /**
         * 源分支相较于目标分支多出的commit数量
         * @example `1`
         */
        ahead: number;
        /**
         * 目标分支相较于源分支落后的commit数量
         * @example `1`
         */
        behind: number;
        /**
         * 待办事项
         */
        todoList: {
            /**
             * 卡点项列表
             */
            requirementCheckItems: {
                /**
                 * 卡点项类型
                 * - MERGE_CONFLICT_CHECK：合并冲突检测
                 * - COMMENTS_CHECK：评论检查
                 * - CI_CHECK：自动化检查
                 * - REVIEWER_APPROVED_CHECK：评审人通过检查
                 * @example `COMMENTS_CHECK`
                 */
                itemType: string;
                /**
                 * 是否通过卡点项
                 * @example `true`
                 */
                pass: boolean;
            }[];
        };
        /**
         * 是否所有卡点通过
         * @example `true`
         */
        allRequirementsPass: boolean;
        /**
         * 是否支持fast-forward-only的合并方式
         * @example `true`
         */
        supportMergeFastForwardOnly: boolean;
        /**
         * 合并请求详情地址
         * @example `xxx`
         */
        detailUrl: string;
        /**
         * 页面访问时的URL
         * @example `xxx`
         */
        webUrl: string;
        /**
         * 目标库的全名称（含完整组路径）
         * @example `orgId / test-group / test-target-repo（斜杠两侧有空格）`
         */
        targetProjectNameWithNamespace: string;
        /**
         * 目标库的全路径（含完整组路径）
         * @example `orgId/test-group/test-target-repo`
         */
        targetProjectPathWithNamespace: string;
        /**
         * 合并版本（Commit SHA）
         * @example `1a072f5367c21f9de3464b8c0ee8546e47764d2d`
         */
        mergedRevision: string;
    };
}
