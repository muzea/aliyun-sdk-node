export interface CreateCommitWithMultipleFilesRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 代码库ID或者全路径
     * @example `2835387 或 codeup/codeup-demo`
     */
    "repositoryIdentity": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 代码分支名称
         * @example `master`
         */
        branch: string;
        /**
         * 提交说明信息
         * @example `auto`
         */
        commitMessage: string;
        /**
         * 操作数组，每个action代表一个文件的操作
         */
        actions: {
            /**
             * 操作类型
             * - create：创建文件
             * - delete：删除文件
             * - move：移动文件
             * - update：更新文件
             * @example `create`
             */
            action: string;
            /**
             * 文件路径
             * @example `src/test.java`
             */
            filePath: string;
            /**
             * 变更前的文件路径
             * @example `src/main/test.java`
             */
            previousPath: string;
            /**
             * 文件内容
             * ><notice>若是更新操作，则是完全覆盖，即传入的content内容，会直接覆盖原有的文件内容></notice>
             * @example `xxx`
             */
            content: string;
        }[];
    };
}
