export interface CreateDeployKeyRequest {
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
     * @example `2813489`
     */
    "repositoryId": number;
    /**
     * 请求Body
     */
    "body": {
        /**
         * 部署密钥标题
         * @example `测试密钥`
         */
        title: string;
        /**
         * 部署密钥
         * ><notice>部署密钥不能与SSH密钥相同，详情见：https://help.aliyun.com/document_detail/153709.html?spm=a2cl9.codeup_devops2020_goldlog_projectSettings.0.0.50c83b53WLYIBj
         * ></notice>
         * @example `""`
         */
        key: string;
    };
}
