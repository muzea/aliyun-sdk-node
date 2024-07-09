export interface GetFileLastCommitRequest {
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段。
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 代码库ID
     * @example `2825387`
     */
    "repositoryId": number;
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `60de7a6852743a5162b5f957`
     */
    "organizationId": string;
    /**
     * 分支名称、标签名称或Commit ID
     * 例如：
     * 分支名称：master
     * 标签名称：tag001
     * CommitID：ff4fb5ac6d1f44f452654336d2dba468ae6c8d04
     * @example `master`
     */
    "sha": string;
    /**
     * 文件路径
     * @example `src/main/test.java`
     */
    "filePath": string;
    /**
     * 展示签名，默认值：false
     * @example `false`
     */
    "showSignature"?: boolean;
}
