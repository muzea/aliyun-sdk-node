export interface CreateRepositoryResponse {
    /**
     * 错误信息
     * @example `SYSTEM_UNAUTHORIZED_ERROR`
     */
    errorMessage: string;
    /**
     * 请求ID
     * @example `F590C9D8-E908-5B6C-95AC-56B7E8011FFA`
     */
    requestId: string;
    /**
     * 错误码
     * @example `401`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回详情结果
     */
    result: {
        /**
         * id
         * @example `2959`
         */
        id: number;
        /**
         * 描述
         * @example `线下测试`
         */
        description: string;
        /**
         * 默认分支
         * @example `master`
         */
        defaultBranch: string;
        /**
         * 可见性。0：私有，10：内部公开
         * @example `0`
         */
        visibilityLevel: string;
        /**
         * ssh地址
         * @example `""`
         */
        sshUrlToRepo: string;
        /**
         * http地址
         * @example `""`
         */
        httpUrlToRepo: string;
        /**
         * web url
         * @example `""`
         */
        webUrl: string;
        /**
         * 名称
         * @example `codeupTest`
         */
        name: string;
        /**
         * 名称（含父路径）
         * @example `codeup-test-org / test-codeup`
         */
        nameWithNamespace: string;
        /**
         * 路径
         * @example `test-codeup`
         */
        path: string;
        /**
         * 路径（含父路径）
         * @example `codeup-test-org/test-codeup`
         */
        pathWithNamespace: string;
        /**
         * 创建时间
         * @example `2022-01-14T21:08:26+08:00`
         */
        createdAt: string;
        /**
         * 最后活跃时间
         * @example `2022-01-14T21:08:26+08:00`
         */
        lastActivityAt: string;
        /**
         * 创建者id
         * @example `1233`
         */
        creatorId: number;
        /**
         * 父路径信息
         */
        namespace: {
            /**
             * id
             * @example `3194`
             */
            id: number;
            /**
             * 名称
             * @example `codeup`
             */
            name: string;
            /**
             * 路径
             * @example `codeup`
             */
            path: string;
            /**
             * 归属者id
             * @example `123`
             */
            ownerId: number;
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
             * 描述
             * @example `codeup repo description`
             */
            description: string;
            /**
             * 头像地址
             * @example `""`
             */
            avatar: string;
            /**
             * 公开性
             * @example `true`
             */
            public: boolean;
            /**
             * 可见性。0：私有，10：内部公开
             * @example `0`
             */
            visibilityLevel: string;
        };
        /**
         * 归档标识
         * @example `false`
         */
        archived: boolean;
        /**
         * 代码库头像地址
         * @example `""`
         */
        avatar_url: string;
        /**
         * demo库标识
         * @example `false`
         */
        demoProject: boolean;
        /**
         * 从SVN导入
         * @example `false`
         */
        Import_from_svn: boolean;
    };
}
