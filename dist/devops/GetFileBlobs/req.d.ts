export interface GetFileBlobsRequest {
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
     * @example `2744800`
     */
    "repositoryId": number;
    /**
     * 文件路径
     * @example `src/Test.java`
     */
    "filePath": string;
    /**
     * 分支名称、标签名称或者提交的版本号
     * @example `master  / tag1.0 /  ecykhdd`
     */
    "ref": string;
    /**
     * 文件开始行，若为空，则取文件全部内容
     * @example `10`
     */
    "from"?: number;
    /**
     * 文件结束行，且只有在from不为空时才有意义
     * @example `10`
     */
    "to"?: number;
}
