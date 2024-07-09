export interface CreateMergeRequestRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `6270e731cfea268afc21ccac`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 代码库ID
     * @example `2369234`
     */
    "repositoryId": number;
    /**
     * 请求Body
     */
    "body": {
        /**
         * 源代码库ID
         * @example `2369234`
         */
        sourceProjectId: number;
        /**
         * 源分支名称
         * @example `sourceBranch`
         */
        sourceBranch: string;
        /**
         * 目标代码库ID
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
         * 创建来源，固定取值为：WEB
         * @example `WEB`
         */
        createFrom: string;
        /**
         * 合并请求描述信息
         * @example `测试合并请求`
         */
        description: string;
        /**
         * 评审人阿里云账号ID列表
         */
        reviewerIds: string[];
        /**
         * 关联工作项ID，支持多个，以逗号隔开
         * @example `722200214032b6b31e6f1434ab`
         */
        workItemIds: string;
    };
}
