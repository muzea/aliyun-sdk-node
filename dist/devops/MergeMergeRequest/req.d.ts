export interface MergeMergeRequestRequest {
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
     * @example `2709413`
     */
    "repositoryId": number;
    /**
     * 合并请求局部ID，表示代码库下的第几个合并请求
     * @example `1`
     */
    "localId": number;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 合并方式
         * - no-fast-forward：默认合并方式，创建一个合并节点合并
         * - squash：压缩合并方式
         * - rebase：rebase合并
         * - ff-only：fast-forward-only合并请求
         * @example `no-fast-forward`
         */
        mergeType: string;
        /**
         * 合并提交信息
         * @example `""`
         */
        mergeMessage: string;
        /**
         * 是否在合并后删除评审分支
         * @example `true`
         */
        removeSourceBranch: boolean;
    };
}
