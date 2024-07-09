export interface ListMergeRequestsResponse {
    /**
     * Id of the request
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
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
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 总记录数
     * @example `30`
     */
    total: number;
    /**
     * 返回结果列表
     */
    result: {
        /**
         * 新旧版合并请求的标识，true表示新版，false表示旧版
         * @example `true`
         */
        newMergeRequestIdentifier: boolean;
        /**
         * 代码库ID
         * @example `2369234`
         */
        projectId: number;
        /**
         * 旧版合并请求的ID，若当前为新版合并请求，那么该值为空
         * @example `1`
         */
        id: number;
        /**
         * 合并请求局部ID，表示代码库下的第几个合并请求；若是新版合并请求，那么该值为空
         * @example `1`
         */
        iid: number;
        /**
         * 新版合并请求的唯一ID，仅新版合并请求会有该值
         * @example `bca90244c4b749e0b109df52ac0eb570`
         */
        mrBizId: string;
        /**
         * 合并请求局部ID，表示代码库下的第几个合并请求，新版合并请求字段
         * @example `2`
         */
        localId: number;
        /**
         * 合并请求标题
         * @example `test-合并请求标题`
         */
        title: string;
        /**
         * 合并请求描述内容
         * @example `描述信息的具体内容
        `
         */
        description: string;
        /**
         * 旧版合并请求状态
         * - opened：已开启
         * - reopened：重新打开
         * - closed：已关闭
         * - accepted：评审通过（未合并）
         * - merged：评审通过（已合并）
         * - locked：合并锁定中
         * @example `opened`
         */
        state: string;
        /**
         * 新版合并请求状态
         * - UNDER_DEV：开发中
         * - UNDER_REVIEW：评审中
         * - TO_BE_MERGED：待合并
         * - CLOSED：已关闭
         * - MERGED：已合并
         * @example `UNDER_REVIEW`
         */
        newVersionState: string;
        /**
         * 创建时间
         * @example `2022-03-18 14:24:54`
         */
        createdAt: string;
        /**
         * 更新时间
         * @example `2022-03-18 14:24:54`
         */
        updatedAt: string;
        /**
         * 源分支
         * @example `test-merge-source-branch`
         */
        sourceBranch: string;
        /**
         * 目标分支
         * @example `test-merge-target-branch`
         */
        targetBranch: string;
        /**
         * 作者信息
         */
        author: {
            /**
             * Codeup的用户ID
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
         * 评审人信息列表
         */
        reviewers: {
            /**
             * Codeup的用户ID
             * @example `43127`
             */
            id: number;
            /**
             * 用户名称
             * @example `test-review-user`
             */
            name: string;
            /**
             * 用户登录名
             * @example `root-test-review-user`
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
             * 评审人的头像地址
             * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
             */
            avatarUrl: string;
            /**
             * 用户邮箱
             * @example `username@example.com`
             */
            email: string;
            /**
             * 评审人状态
             * - approved：已同意
             * - comment：发表过评审
             * - pending：还未评审过
             * @example `approved`
             */
            status: string;
            /**
             * 评审人评审完成时间
             * > 仅在新版合并请求才有效，且评审人需要完成评审后，该字段才确保存在，否则为空。
             * @example `2022-03-18 14:24:54`
             */
            reviewTime: string;
            /**
             * 评审人是否已经评审过
             * @example `false`
             */
            hasReviewed: boolean;
            /**
             * 评审人是否发表过评论
             * @example `true`
             */
            hasCommented: boolean;
            /**
             * 评审意见，若未评审则为空
             * - PASS：通过
             * - NOT_PASS：暂不通过
             * @example `PASS`
             */
            reviewOpinionStatus: string;
        }[];
        /**
         * 订阅人信息列表
         */
        subscribers: {
            /**
             * Codeup用户ID
             * @example `1876119`
             */
            id: number;
            /**
             * 用户名称
             * @example `test-subscriber`
             */
            name: string;
            /**
             * 用户登录名
             * @example `root-test-subscriber`
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
         * 源代码库ID
         * @example `2876119`
         */
        sourceProjectId: number;
        /**
         * 目标库ID
         * @example `2876119`
         */
        targetProjectId: number;
        /**
         * 是否在开发中
         * @example `false`
         */
        workInProgress: boolean;
        /**
         * 合并请求详情地址
         * @example `xxx`
         */
        detailUrl: string;
        /**
         * 页面访问时的URL
         * @example `""`
         */
        webUrl: string;
        /**
         * 代码库的SSH克隆地址
         * @example `git@xxx:xxx/test/test.git`
         */
        sshUrl: string;
        /**
         * 创建方式
         * - WEB：网页UI创建
         * - COMMAND_LINE：命令行创建
         * @example `WEB`
         */
        creationMethod: string;
        /**
         * 若是旧版合并请求，枚举值为
         * - BRANCH：分支
         * - COMMIT：提交
         * 若是新版合并请求，枚举值为
         * - BRANCH：分支
         * - REF：提交或者引用评审
         * @example `BRANCH`
         */
        sourceType: string;
        /**
         * 目标类型通常为 BRANCH
         * @example `BRANCH`
         */
        targetType: string;
        /**
         * 代码库完整名称（含完整组名称）
         * @example `codeup-test-org / test-create-group （斜杠两侧有空格）`
         */
        nameWithNamespace: string;
        /**
         * 是否支持fast-forward-only合并方式
         * @example `true`
         */
        supportMergeFFOnly: boolean;
        /**
         * 类标列表
         */
        labels: {
            /**
             * 类标 ID，唯一标识
             * @example `b5b5738b94954bc6aa5a293316ed1d24`
             */
            id: string;
            /**
             * 类标名称
             * @example `新特性`
             */
            name: string;
            /**
             * 类标颜色
             * @example `#006AD4`
             */
            color: string;
            /**
             * 类标描述
             * @example `新的特性或需求`
             */
            description: string;
        }[];
        /**
         * 合并版本（Commit SHA）
         * @example `1a072f5367c21f9de3464b8c0ee8546e47764d2d`
         */
        mergedRevision: string;
    }[];
}
