export interface CreateServiceCredentialRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如  https:// devops.aliyun.com/organization/【OrgId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 服务证书名称
         * @example `张三的Git证书`
         */
        name: string;
        /**
         * 服务证书类型，默认USERNAME_PASSWORD
         * @example `USERNAME_PASSWORD  （用户密码类型）`
         */
        type: string;
        /**
         * 可见范围：如PERSON
         * @example `PERSON  （私有）`
         */
        scope: string;
        /**
         * 用户名
         * @example `zhangsan`
         */
        username: string;
        /**
         * 密码
         * @example `zhangsan`
         */
        password: string;
    };
}
