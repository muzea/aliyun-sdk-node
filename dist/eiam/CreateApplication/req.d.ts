export interface CreateApplicationRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk2676xxxx`
     */
    "InstanceId": string;
    /**
     * 应用名称。
     * @example `Ram Account SSO`
     */
    "ApplicationName": string;
    /**
     * 应用描述。
     * @example `RAM账号SSO应用`
     */
    "Description"?: string;
    /**
     * 应用Logo地址。
     * @example `https://oss.cn-hangzhou.aliyuncs.com/logo.png`
     */
    "LogoUrl"?: string;
    /**
     * 应用创建来源，取值可选范围：
     * - urn:alibaba:idaas:app:source:template：应用模板。
     * - urn:alibaba:idaas:app:source:standard：标准协议。
     * @example `urn:alibaba:idaas:app:source:standard`
     */
    "ApplicationSourceType": string;
    /**
     * 单点登录协议，取值可选范围：
     * - saml2：SAML 2.0 协议。
     * - oidc：OpenID Connect 协议。
     * @example `saml2`
     */
    "SsoType": string;
    /**
     * 应用模板ID，当ApplicationSourceType参数指定为urn:alibaba:idaas:app:source:template时必填。
     * @example `apt_ramuser_mjqrsi`
     */
    "ApplicationTemplateId"?: string;
}
