export interface AddGatewayAuthRequest {
    /**
     * 鉴权名称。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 鉴权类型：
     * - JWT
     * - OIDC
     * - IDaaS
     * - ExternalAuthZ（自建的鉴权服务）
     * @example `JWT`
     */
    "Type"?: string;
    /**
     * 鉴权类型为JWT/OIDC时使用：
     * - JWT：表示JWT claims 的iss(issuer)，即签发人。
     * - OIDC：表示OIDC claims 的iss(issuer)，即签发人
     * @example `https://example.com/auth`
     */
    "Issuer"?: string;
    /**
     * JWT公钥，支持JSON格式。
     * @example `{"keys":[{"e":"AQAB","kid":"DHFbpoIUqrY8t2zpA2qXfCmr5VO5ZEr4RzHU_-envvQ","kty":"RSA","n":"xAE7eB6qugXyCAG3yhh7pkDkT65pHymX-P7KfIupjf59vsdo91bSP9C8H07pSAGQO1MV_xFj9VswgsCg4R6otmg5PV2He95lZdHtOcU5DXIg_pbhLdKXbi66GlVeK6ABZOUW3WYtnNHD-91gVuoeJT_DwtGGcp4ignkgXfkiEm4sw-4sfb4qdt5oLbyVpmW6x9cfa7vs2WTfURiCrBoUqgBo_-4WTiULmmHSGZHOjzwa8WtrtOQGsAFjIbno85jp6MnGGGZPYZbDAa_b3y5u-YpW7ypZrvD8BgtKVjgtQgZhLAGezMt0ua3DRrWnKqTZ0BJ_EyxOGuHJrLsn00fnMQ"}]}`
     */
    "Jwks"?: string;
    /**
     * JWT Token类型：
     * - HEADER：通过Header传输
     * 要校验的Token参数信息，默认是以Bearer为前缀放在Authorization header中，例如：Authorization: Bearer token。
     * @example `HEADER`
     */
    "TokenPosition"?: string;
    /**
     * JWT Token保存的位置。
     * 要校验的Token参数信息，默认是以Bearer为前缀放在Authorization header中，例如：`Authorization: Bearer token`。
     * @example `Authorization`
     */
    "TokenName"?: string;
    /**
     * JWT Token的前缀。
     * 要校验的Token参数信息，默认是以Bearer为前缀放在Authorization header中，例如：`Authorization: Bearer token`。
     * @example `Bearer `
     */
    "TokenNamePrefix"?: string;
    /**
     * 是否透传Token。
     * @example `true`
     */
    "TokenPass"?: boolean;
    /**
     * 授权黑白名单模式：
     * - true：白名单模式（名单中的 hosts + paths 不需要校验即可访问，其余都需要校验）
     * - false：黑名单模式（名单中的 hosts + paths 需要校验，其余可直接访问）
     * @example `true`
     */
    "IsWhite"?: boolean;
    /**
     * 未开放参数，无需传递（鉴权创建后默认为关闭状态）。
     * @example `false`
     */
    "Status"?: boolean;
    /**
     * 授权成功后的重定向地址（OIDC/IDaaS使用，需要与OIDC/IDaaS中配置的重定向地址保持一致。）
     * @example `https://test-.com/oauth2/callback`
     */
    "RedirectUrl"?: string;
    /**
     * 服务注册的应用ID（OIDC/IDaaS使用）。
     * @example `23460e2fdd9bf9ad106****`
     */
    "ClientId"?: string;
    /**
     * 服务注册的应用Secret（OIDC/IDaaS使用）。
     * @example `123****`
     */
    "ClientSecret"?: string;
    /**
     * Cookie的域名，认证通过后会将Cookie发送到指定的域名，保持登录状态。
     * 例如：设置`Cookie-domain=a.example.com`，则Cookie会发送到域名`a.example.com`；设置`Cookie-domain=.example.com`，则Cookie会发送到`example.com`的所有子域名。
     * @example `test.com`
     */
    "CookieDomain"?: string;
    /**
     * OIDC授权作用域（OIDC使用）。
     */
    "ScopesList"?: string[];
    /**
     * IDaaS实例用户登录页地址（IDaaS使用）。
     * @example `https://daxxxxcn.aliyunidaas.com/`
     */
    "LoginUrl"?: string;
    /**
     * 鉴权类型为JWT时使用；JWT claims 的sub（subject），即主体，请确保JWT的Payload中的sub字段的值与此处配置的值一致。如果该参数未设置或者为空，那么默认与Issuer参数设置的值一致
     * @example `testing@secure.istio.io`
     */
    "Sub"?: string;
    /**
     * 自定义鉴权信息。
     */
    "ExternalAuthZJSON"?: {
        /**
         * 鉴权服务ID。
         * @example `1343`
         */
        ServiceId: number;
        /**
         * 鉴权服务提供的鉴权API的Path，API的Path需是前缀匹配。
         * @example `/auth`
         */
        PrefixPath: string;
        /**
         * Token处于请求报文中哪个Header中，常见的有Authorization和Cookie。
         * @example `Authorization`
         */
        TokenKey: string;
        /**
         * 鉴权请求中允许携带的头部。
         */
        AllowRequestHeaders: string[];
        /**
         * 鉴权响应中允许保留的头部。
         */
        AllowUpstreamHeaders: string[];
        /**
         * 鉴权服务的超时时间，单位：秒。
         * @example `10`
         */
        Timeout: number;
        /**
         * 自定义鉴权模式：
         * - true：严格模式，当鉴权服务不可用时（鉴权服务建立连接失败或者返回5xx请求），网关拒绝客户端请求
         * - false：宽松模式，当鉴权服务不可用时（鉴权服务建立连接失败或者返回5xx请求），网关放过客户端请求
         * @example `true`
         */
        IsRestrict: boolean;
        /**
         * 是否允许携带Body。
         * @example `true`
         */
        WithRequestBody: boolean;
        /**
         * Body的最大字节数。
         * @example `4000000`
         */
        BodyMaxBytes: number;
    };
    /**
     * 网关唯一标识ID。
     * @example `gw-*****9b04bb4474cae9d645be850e3d7`
     */
    "GatewayUniqueId"?: string;
    /**
     * 授权资源模式：
     * - 0：简单模式
     * - 1：复杂模式
     * @example `1`
     */
    "AuthResourceMode"?: number;
    /**
     * 复杂模式的YAML配置
     */
    "AuthResourceConfig"?: string;
    /**
     * 鉴权的授权规则列表，多个规则条件之间是“或”关系，规则条件内的多个匹配项之间是“与”关系。
     */
    "AuthResourceList"?: {
        /**
         * 规则内域名的ID。
         * @example `1765`
         */
        DomainId: number;
        /**
         * 规则的匹配路径。
         * @example `/test`
         */
        Path: string;
        /**
         * 请求Path的匹配类型：
         * - EQUAL：精确匹配
         * - PRE：前缀匹配
         * - ERGULAR：正则匹配
         * @example `EQUAL`
         */
        MatchType: string;
        /**
         * 路径是否开启大小写敏感（创建自定义鉴权时使用，其他鉴权类型默认开启大小写敏感）
         * - true：开启大小写敏感
         * - false：关闭大小写敏感
         * @example `true`
         */
        IgnoreCase: boolean;
        /**
         * 规则的请求头（当前仅供自定义鉴权使用）
         */
        AuthResourceHeaderList: {
            /**
             * 请求头名称。
             * @example `x-req`
             */
            HeaderKey: string;
            /**
             * 匹配条件：
             * - EQUAL：等于
             * - NOT_EQUAL：不等于
             * - EXIST：存在
             * - NOT_EXIST：不存在
             * - INCLUDE：包含
             * - EXCLUDE：不包含
             * - PREFIX：前缀
             * - SUFFIX：后缀
             * - REGREX：正则
             * @example `EQUAL`
             */
            HeaderMethod: string;
            /**
             * 请求头的值。
             * @example `123`
             */
            HeaderValue: string;
        }[];
    }[];
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
