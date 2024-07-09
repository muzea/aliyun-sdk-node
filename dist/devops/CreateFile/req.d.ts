export interface CreateFileRequest {
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
     * @example `2080972`
     */
    "repositoryId": number;
    /**
     * 请求Body
     */
    "body": {
        /**
         * 文件路径
         * @example `/src/main/test.java`
         */
        filePath: string;
        /**
         * 文件所在分支
         * @example `master`
         */
        branchName: string;
        /**
         * 编码方式
         * 可选：text / base64，默认值为text
         * @example `text`
         */
        encoding: string;
        /**
         * 文件内容
         * @example `文件内容`
         */
        content: string;
        /**
         * 创建文件时的提交信息
         * @example `创建xxx文件`
         */
        commitMessage: string;
    };
}
