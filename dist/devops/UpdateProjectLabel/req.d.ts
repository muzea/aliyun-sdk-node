export interface UpdateProjectLabelRequest {
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
     * 类标ID，唯一标识
     * @example `54e2699e538b4ba985177d6eb4d16cee`
     */
    "labelId": string;
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
         * 类标名称
         * @example `缺陷`
         */
        name: string;
        /**
         * 类标颜色
         * @example `#EF433B`
         */
        color: string;
        /**
         * 类标描述
         * @example `需要进行修复的缺陷`
         */
        description: string;
    };
}
