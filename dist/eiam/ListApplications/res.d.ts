export interface ListApplicationsResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 列表总条数目。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 应用信息列表。
     */
    Applications: {
        /**
         * 实例ID。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        InstanceId: string;
        /**
         * 应用ID。
         * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
         */
        ApplicationId: string;
        /**
         * 应用的客户端ID。
         * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
         */
        ClientId: string;
        /**
         * 应用图标URL地址。
         * @example `https://img.alicdn.com/imgextra/i4/O1CN01lvYwpv1aGowQXDML9_!!6000000003303-0-tps-580-580.jpg`
         */
        LogoUrl: string;
        /**
         * 应用名称。
         * @example `SAML 应用`
         */
        ApplicationName: string;
        /**
         * 应用描述信息。
         * @example `单个应用代码为pkces`
         */
        Description: string;
        /**
         * 单点登录协议，取值可选范围：
         * - saml2：SAML 2.0 协议。
         * - oidc：OpenID Connect 协议。
         * @example `saml2`
         */
        SsoType: string;
        /**
         * 应用创建来源，取值可选范围：
         * - urn:alibaba:idaas:app:source:template：应用模板。
         * - urn:alibaba:idaas:app:source:standard：标准协议。
         * @example `urn:alibaba:idaas:app:source:standard`
         */
        ApplicationSourceType: string;
        /**
         * 应用支持的功能特性，JSON数组格式字符串返回。取值可选范围：
         * - sso：单点登录。
         * - provision：账户同步。
         * - api\_invoke：API开放。
         * @example `["sso", "provision"]`
         */
        Features: string;
        /**
         * 应用状态，取值可选范围：
         * - enabled：启用中。
         * - disabled：禁用中。
         * @example `enabled`
         */
        Status: string;
        /**
         * 应用创建时间，Unix时间戳格式，单位为毫秒。
         * @example `1649830226000`
         */
        CreateTime: number;
        /**
         * 应用最近更新时间，Unix时间戳格式，单位为毫秒。
         * @example `1649830226000`
         */
        UpdateTime: number;
        /**
         * 应用模板是否被云产品托管。
         * @example `true`
         */
        ServiceManaged: boolean;
        /**
         * 托管应用模板的云产品ServiceCode。
         * @example `rpa`
         */
        ManagedServiceCode: string;
        /**
         * 应用模板ID
         * @example `apt_xxx_xxx`
         */
        ApplicationTemplateId: string;
    }[];
}
