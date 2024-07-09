export interface RefreshWebofficeTokenRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * Weboffice 访问凭证。通过[GenerateWebofficeToken](~~478226~~)接口或者[RefreshWebofficeToken](~~478227~~)接口获取。
     * @example `99d1b8b478b641c1b3372f5bd6********`
     */
    "AccessToken": string;
    /**
     * Weboffice 刷新凭证。通过[GenerateWebofficeToken](~~478226~~)接口或者[RefreshWebofficeToken](~~478227~~)接口获取。
     * @example `a730ae0d7c6a487d87c661d199********`
     */
    "RefreshToken": string;
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
}
