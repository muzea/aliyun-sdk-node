export interface ListGroupRepositoriesResponse {
    /**
     * 请求ID
     * @example `9293CBDA-B5BC-5AD6-A8F4-C7873AC7A3DF`
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
     * 总记录数
     * @example `2`
     */
    total: number;
    /**
     * 返回结果列表
     */
    result: {
        /**
         * 代码库ID
         * @example `89616`
         */
        id: number;
        /**
         * 代码库名称
         * @example `test-group-repo`
         */
        name: string;
        /**
         * 代码库路径
         * @example `test-group-repo`
         */
        path: string;
        /**
         * 代码库完整名称（含完整组名称）
         * @example `codeup-test-org / test-group-repo（斜杠两侧有空格）`
         */
        nameWithNamespace: string;
        /**
         * 代码库完整路径（含完整组路径）
         * @example `codeup-test-org/test-group-repo`
         */
        pathWithNamespace: string;
        /**
         * 最后活跃时间
         * @example `2022-03-18 14:24:54`
         */
        lastActivityAt: string;
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
         * 可见性
         * 0：私有，仅代码库成员可见
         * 10：企业内公开，企业成员可见
         * @example `0`
         */
        visibilityLevel: number;
        /**
         * 被收藏的数量
         * @example `0`
         */
        starCount: number;
        /**
         * 代码库的页面访问地址
         * @example `""`
         */
        webUrl: string;
        /**
         * 代码库的SSH克隆地址
         * @example `git@xxx:xxx/test/test.git`
         */
        sshUrl: string;
        /**
         * 代码库的HTTP克隆地址
         * @example `https://xxx/test/test`
         */
        httpUrl: string;
        /**
         * 代码库描述
         * @example `描述详情内容`
         */
        description: string;
        /**
         * 私有库标识
         * - true：私有
         * - false：企业内公开
         * @example `true`
         */
        privateFlag: boolean;
        /**
         * 创建者ID
         * @example `19238`
         */
        creatorId: number;
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
         * 是否开启wiki
         * 可选值：true / false
         * @example `true`
         */
        wikiEnabled: boolean;
        /**
         * 库所属组或者企业空间ID
         * @example `100003`
         */
        namespaceId: boolean;
        /**
         * 是否开启snippets
         * 可选值：true / false
         * @example `false`
         */
        snippetsEnabled: boolean;
        /**
         * 待导入代码库地址（HTTP协议），例如GitHub平台上的代码库地址
         * @example `http://xxx/x`
         */
        importUrl: string;
        /**
         * 归档标识
         * @example `false`
         */
        archived: boolean;
        /**
         * 代码库的提交数量
         * @example `10`
         */
        commitCount: number;
        /**
         * 是否被标星收藏
         * @example `true`
         */
        isStared: boolean;
    }[];
}
