export interface TransferRepositoryResponse {
    /**
     * 请求ID
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
     * @example `”“`
     */
    errorMessage: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * 代码库ID
         * @example `19285`
         */
        id: number;
        /**
         * 代码库路径
         * @example `test-repo`
         */
        path: string;
        /**
         * 代码库名称
         * @example `test-repo`
         */
        name: string;
        /**
         * 代码库描述
         * @example `描述信息的具体内容
        `
         */
        description: string;
        /**
         * 代码库完整路径（含完整组路径）
         * @example `codeup-test-org/test-create-codeup`
         */
        pathWithNamespace: string;
        /**
         * 代码库完整名称（含完整组名称）
         * @example `codeup-test-org / test-create-group （斜杠两侧有空格）`
         */
        nameWithNamespace: string;
        /**
         * 可见性
         * - 0：私有，仅代码库成员可见
         * - 10：企业内公开，企业成员可见
         * - 20：表示全平台公开
         * @example `0`
         */
        visibilityLevel: number;
        /**
         * 最后活跃时间
         * @example `2022-01-14T21:08:26+08:00`
         */
        lastActivityAt: string;
        /**
         * 被收藏的数量
         * @example `0`
         */
        starCount: number;
        /**
         * 页面访问时的URL
         * @example `""`
         */
        webUrl: string;
        /**
         * 是否被当前用户收藏
         * @example `true`
         */
        starred: boolean;
        /**
         * 上级路径的ID
         * @example `100003`
         */
        namespaceId: number;
        /**
         * 权限类型
         * - 20-浏览者
         * - 30-开发者
         * - 40-管理员
         * @example `30`
         */
        accessLevel: number;
        /**
         * demo库标识
         * @example `false`
         */
        demoProject: boolean;
        /**
         * 创建时间
         * @example `2022-01-14T21:08:26+08:00`
         */
        createdAt: string;
        /**
         * 更新时间
         * @example `2022-01-14T21:08:26+08:00`
         */
        updatedAt: string;
        /**
         * 归档标识
         * @example `false`
         */
        archived: boolean;
        /**
         * 创建者ID
         * @example `19238`
         */
        creatorId: number;
        /**
         * 加密标识
         * @example `false`
         */
        encrypted: boolean;
    };
}
