export interface DeleteFileRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `60de7a6852743a5162b5f957`
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
     * @example `2709413`
     */
    "repositoryId": number;
    /**
     * 分支名称
     * @example `master`
     */
    "branchName": string;
    /**
     * 文件路径
     * @example `src/main/test.java`
     */
    "filePath": string;
    /**
     * 删除文件时的提交信息
     * @example `删除当前文件`
     */
    "commitMessage": string;
}
