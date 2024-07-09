export interface UpdateFileRequest {
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
     * @example `2813489`
     */
    "repositoryId": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 旧文件路径
         * @example `src/main/update.txt`
         */
        oldPath: string;
        /**
         * 新文件路径
         * @example `src/main/update.txt`
         */
        newPath: string;
        /**
         * 分支名称
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
         * @example `修改文件的内容`
         */
        content: string;
        /**
         * 更新文件时的提交信息
         * @example `修改update.txt文件内容`
         */
        commitMessage: string;
    };
}
