export interface GetRepositoryResponse {
    /**
     * 请求ID
     * @example `37294673-00CA-5B8B-914F-A8B35511E90A`
     */
    requestId: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
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
     * 代码库信息
     */
    repository: {
        /**
         * 归档标识
         * @example `false`
         */
        archive: boolean;
        /**
         * 代码库头像地址
         * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
         */
        avatarUrl: string;
        /**
         * 创建时间
         * @example `2020-06-19T04:02:00.744Z`
         */
        createdAt: string;
        /**
         * 创建者ID
         * @example `19258`
         */
        creatorId: number;
        /**
         * 默认分支
         * @example `master`
         */
        defaultBranch: string;
        /**
         * DEMO库标识
         * @example `false`
         */
        demoProjectStatus: boolean;
        /**
         * 描述
         * @example `repo desc`
         */
        description: string;
        /**
         * HTTP克隆地址
         * @example `https://codeup.aliyun.com/xxx/test/test.git`
         */
        httpUrlToRepository: string;
        /**
         * 代码库ID
         * @example `100`
         */
        id: number;
        /**
         * 最后活跃时间
         * @example `2020-06-19T04:02:00.744Z`
         */
        lastActivityAt: string;
        /**
         * 名称
         * @example `test`
         */
        name: string;
        /**
         * 代码库完整名称（含完整组名称）
         * @example `test / test（斜杠两侧有空格）`
         */
        nameWithNamespace: string;
        /**
         * 父空间
         */
        namespace: {
            /**
             * id
             * @example `100`
             */
            id: number;
            /**
             * 头像地址
             * @example `https://xxx.jpg`
             */
            avatar: string;
            /**
             * 创建时间
             * @example `2020-06-19T04:02:00.744Z`
             */
            createdAt: string;
            /**
             * 描述
             * @example `repo desc`
             */
            description: string;
            /**
             * 父空间名称
             * @example `xxx`
             */
            name: string;
            /**
             * 归属者ID
             * > 即，用户主键ID
             * @example `100`
             */
            ownerId: number;
            /**
             * 父空间路径
             * @example `test`
             */
            path: string;
            /**
             * 更新时间
             * @example `2020-06-19T04:02:00.744Z`
             */
            updatedAt: string;
            /**
             * 可见性
             * 0 - 私有，仅代码库成员可见
             * 10 - 企业内公开，企业成员可见
             * @example `0`
             */
            visibilityLevel: number;
        };
        /**
         * 路径
         * @example `test`
         */
        path: string;
        /**
         * 代码库完整路径（含完整组路径）
         * @example `test/test`
         */
        pathWithNamespace: string;
        /**
         * SSH克隆地址
         * @example `git@codeup.aliyun.com:xxx/test/test.git`
         */
        sshUrlToRepository: string;
        /**
         * 可见性
         * 0 - 私有，仅代码库成员可见
         * 10 - 企业内部公开，企业成员可见
         * @example `0`
         */
        visibilityLevel: number;
        /**
         * 页面访问地址
         * @example `https://codeup.aliyun.com/xxx/test/test`
         */
        webUrl: string;
    };
}
