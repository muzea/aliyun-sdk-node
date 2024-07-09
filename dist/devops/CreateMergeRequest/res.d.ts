export interface CreateMergeRequestResponse {
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
     * @example `SYSTEM_UNKNOWN_ERROR`
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
         * @example `2023-06-02T03:41:22Z`
         */
        createTime: string;
        /**
         * 更新时间
         * @example `2023-06-02T03:41:22Z`
         */
        updateTime: string;
        /**
         * 合并请求类型，固定为：CODE_REVIEW
         * @example `CODE_REVIEW`
         */
        mrType: string;
        /**
         * 评审分支所在的代码库ID
         * @example `2369234`
         */
        sourceProjectId: number;
        /**
         * 源分支名称
         * @example `sourceBranch`
         */
        sourceBranch: string;
        /**
         * 目标分支所在的代码库ID
         * @example `2369234`
         */
        targetProjectId: number;
        /**
         * 目标分支名称
         * @example `targetBranch`
         */
        targetBranch: string;
        /**
         * 合并请求标题
         * @example `测试合并请求的标题`
         */
        title: string;
        /**
         * 合并请求描述信息
         * @example `测试合并请求`
         */
        description: string;
        /**
         * 评审人信息列表
         */
        reviewers: {
            /**
             * Codeup用户ID
             * @example `7905`
             */
            id: number;
            /**
             * 用户名称
             * @example `codeup`
             */
            name: string;
            /**
             * 企业登录名
             * @example `root-codeup`
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
             * 邮箱地址
             * @example `username@example.com`
             */
            email: string;
            /**
             * 评审人是否已经评审过
             * @example `false`
             */
            hasReviewed: boolean;
            /**
             * 评审意见
             * - PASS：通过
             * - NOT_PASS：暂不通过
             * @example `PASS`
             */
            reviewOpinionStatus: string;
        }[];
        /**
         * 创建人信息
         */
        author: {
            /**
             * Codeup的用户ID
             * @example `19230`
             */
            id: number;
            /**
             * 用户名称
             * @example `test-codeup`
             */
            name: string;
            /**
             * 用户登录名
             * @example `test-codeup-nickname`
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
             * Codeup用户ID
             * @example `10092`
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
         * 创建来源，取值为：WEB
         * @example `WEB`
         */
        createFrom: string;
        /**
         * 源分支相较于目标分支多出的commit数量
         * @example `2`
         */
        ahead: number;
        /**
         * 目标分支相较于源分支落后的commit数量
         * @example `0`
         */
        behind: number;
        /**
         * 详情页地址
         * @example `xxx`
         */
        detailUrl: string;
        /**
         * 合并请求的web地址
         * @example `https://codeup.aliyun.com/xxx/test/test
        `
         */
        webUrl: string;
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
    };
}
