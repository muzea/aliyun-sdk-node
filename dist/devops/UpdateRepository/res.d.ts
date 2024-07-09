export interface UpdateRepositoryResponse {
    /**
     * 请求ID
     * @example `EAE03103-5497-58D1-9169-E524DDE8604C`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `“”`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR
    `
     */
    errorCode: string;
    /**
     *
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * 代码库ID
         * @example `2825387`
         */
        id: number;
        /**
         * 代码库名称
         * @example `codeup`
         */
        name: string;
        /**
         * 代码库完整名称（含完整组名称）
         * @example `codeup-test-org / codeup（斜杠两侧有空格）`
         */
        nameWithNamespace: string;
        /**
         * 代码库路径
         * @example `codeup`
         */
        path: string;
        /**
         * 代码库完整路径（含完整组路径）
         * @example `codeup-test-org / codeup`
         */
        pathWithNamespace: string;
        /**
         * 代码库描述
         * @example `codeup代码库描述`
         */
        description: string;
        /**
         * 默认分支
         * @example `master`
         */
        defaultBranch: string;
        /**
         * 可见性
         * 0：私有，仅代码库成员可见
         * 10：企业内公开，企业成员可见
         * @example `0`
         */
        visibilityLevel: number;
        /**
         * 代码库的SSH克隆地址
         * @example `git@codeup.aliyun.com:xxx/test/test.git
        `
         */
        sshUrlToRepo: string;
        /**
         * 代码库的HTTP克隆地址
         * @example `https://codeup.aliyun.com/xxx/test/test.git
        `
         */
        httpUrlToRepo: string;
        /**
         * 代码库的页面访问地址
         * @example `https://codeup.aliyun.com/xxx/test/test
        `
         */
        webUrl: string;
        /**
         * 是否开启issues
         * 可选值：true / false
         * @example `true`
         */
        issuesEnabled: boolean;
        /**
         * 是否开启合并请求
         * 可选值：true / false
         * @example `true`
         */
        mergeRequestsEnabled: boolean;
        /**
         * 是否开启构建
         * 可选值：true / false
         * @example `false`
         */
        buildsEnabled: boolean;
        /**
         * 是否开启wiki
         * 可选值：true / false
         * @example `true`
         */
        wikiEnabled: boolean;
        /**
         * 是否开启snippets
         * 可选值：true / false
         * @example `false`
         */
        snippetsEnabled: boolean;
        /**
         * 创建时间
         * @example `2022-03-18 14:24:54`
         */
        createdAt: string;
        /**
         * 最后活跃时间
         * @example `2022-03-20 14:24:54`
         */
        lastActivityAt: string;
        /**
         * 创建者ID
         * @example `19238`
         */
        creatorId: number;
        /**
         * 代码库所属组或企业空间信息
         */
        namespace: {
            /**
             * 组或企业空间ID
             * @example `29322`
             */
            id: number;
            /**
             * 组或企业空间名称
             * @example `codeup`
             */
            name: string;
            /**
             * 组或企业路径（判断父路径是组还是企业）
             * @example `地址：https://codeup.aliyun.com/60d54f3daccf2bbd6659f3ad/blank923/repo-test
            组路径：blank923
            企业路径：60d54f3daccf2bbd6659f3ad`
             */
            path: string;
            /**
             * 组或企业空间的拥有者ID
             * @example `19238`
             */
            ownerId: number;
            /**
             * 创建时间
             * @example `2022-02-18 14:24:54`
             */
            createdAt: string;
            /**
             * 更新时间
             * @example `2022-03-18 14:24:54`
             */
            updatedAt: string;
            /**
             * 描述
             * @example `组或企业空间的描述信息`
             */
            description: string;
            /**
             * 空间的头像地址
             * @example `https://xxx`
             */
            avatar: string;
            /**
             * 代码仓库可见性
             * 0：私有
             * 10：企业内公开，企业成员可见
             * @example `0`
             */
            visibilityLevel: number;
        };
        /**
         * 归档标识
         * @example `false`
         */
        archived: boolean;
        /**
         * 代码库的头像地址
         * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
         */
        avatarUrl: string;
    };
}
