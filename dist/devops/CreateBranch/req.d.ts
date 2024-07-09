export interface CreateBranchRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `60de7a6852743a5162b5f957`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `0cf2c8458ac44d9481aab2dd6ec10596v3
    `
     */
    "accessToken"?: string;
    /**
     * 代码库ID
     * @example `2334815`
     */
    "repositoryId": string;
    /**
     * 请求Body
     */
    "body": {
        /**
         * 分支名称
         * @example `createBranch`
         */
        branchName: string;
        /**
         * 来源分支，指从某个分支创建新分支。
         * @example `master`
         */
        ref: string;
    };
}
