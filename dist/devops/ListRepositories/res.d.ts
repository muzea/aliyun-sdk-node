export interface ListRepositoriesResponse {
    /**
     * 请求ID
     * @example `4D6AF7CC-B43B-5454-86AB-023D25E44868`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 总数量
     * @example `149`
     */
    total: number;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: number;
    /**
     * 返回结果
     */
    result: {
        /**
         * 最后活跃时间
         * @example `2022-01-14T21:08:26+08:00`
         */
        lastActivityAt: string;
        /**
         * 上级路径的id
         * @example `745`
         */
        namespaceId: number;
        /**
         * 头像地址
         * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
         */
        avatarUrl: string;
        /**
         * 被收藏的数量
         * @example `0`
         */
        starCount: number;
        /**
         * 代码库是否归档
         * @example `false`
         */
        archive: boolean;
        /**
         * 创建时间
         * @example `2022-01-14T21:08:26+08:00`
         */
        createdAt: string;
        /**
         * 是否被收藏
         * @example `false`
         */
        star: boolean;
        /**
         * 代码库导入状态
         * 可选值：started / finished / failed / stopping / none
         * @example `started`
         */
        importStatus: string;
        /**
         * 页面访问时的URL
         * @example `""`
         */
        webUrl: string;
        /**
         * 代码库描述
         * @example `测试Codeup托管`
         */
        description: string;
        /**
         * 代码库完整名称（含完整组名称）
         * @example `codeup-test-org / test-codeup（斜杠两侧有空格）`
         */
        nameWithNamespace: string;
        /**
         * 代码库完整路径（含完整组路径）
         * @example `codeup-test-org/test-codeup`
         */
        pathWithNamespace: string;
        /**
         * 代码库路径
         * @example `test-codeup`
         */
        path: string;
        /**
         * 可见性
         * 0 - 私有，仅代码库成员可见
         * 10 - 企业内公开，企业成员可见
         * @example `0`
         */
        visibilityLevel: string;
        /**
         * 权限类型
         * 20-浏览者
         * 30-开发者
         * 40-管理员
         * @example `40`
         */
        accessLevel: number;
        /**
         * 更新时间
         * @example `2022-01-14T21:08:26+08:00`
         */
        updatedAt: string;
        /**
         * 代码库名称
         * @example `codeupTest`
         */
        name: string;
        /**
         * 代码库Id
         * @example `1`
         */
        Id: number;
    }[];
}
