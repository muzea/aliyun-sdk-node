export interface GetGatewayAuthDetailResponse {
    /**
     * 请求ID
     * @example `9C96CDF8-9E6C-XXXX-XXXX-8F87A10117E6`
     */
    RequestId: string;
    /**
     * HTTP 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 信息。
     * @example `OK`
     */
    Message: string;
    /**
     * 用于和Success同步，当Success为true时，Code为200
     * @example `200`
     */
    Code: number;
    /**
     * 请求是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 鉴权详情
     */
    Data: {
        /**
         * 鉴权ID
         * @example `1100`
         */
        Id: number;
        /**
         * 鉴权名称
         * @example `test`
         */
        Name: string;
        /**
         * 鉴权所属网关的唯一ID
         * @example `gw-6f0dbd108a0249d2b675b3ef50b*****`
         */
        GatewayUniqueId: string;
        /**
         * 鉴权所属网关的ID
         * @example `2274`
         */
        GatewayId: number;
        /**
         * 鉴权类型：
         * - JWT
         * - OIDC
         * - IDaaS
         * - ExternalAuthZ（自建的鉴权服务）
         * @example `JWT`
         */
        Type: string;
        /**
         * 鉴权类型为JWT/OIDC时使用：
         * - JWT：表示JWT claims 的iss(issuer)，即签发人。
         * - OIDC：表示OIDC claims 的iss(issuer)，即签发人
         * @example `https://example.com/auth`
         */
        Issuer: string;
        /**
         * JWT公钥，JSON格式
         * @example `{\n  \"keys\":[\n    {\n      \"kty\": \"RSA\",\n      \"e\": \"AQAB\",\n      \"use\": \"sig\",\n      \"kid\": \"1rGufmH1YN8rqM9ZOLgo7eEST3AnL89Y-m-XGFioLoA\",\n      \"alg\": \"RS256\",\n      \"n\": \"rM2GIc0YTMqwNCwXnjKbW5QndkCEZgyLu3uQUnyZF7HvMTekiTvQg_39mg3dV1eaYYkYfZBogyroJBqAQXhk6VVCxlBjFVp2xstJPVWngMOOlcafwN_BKdN-EQ06O_Uu__e7gNKI3DunkNk0cNaFETE7d4meRYyTlgEzYgsrW05_ufR0BKoddL3E5JsCpUxRjH9ICbodBx0U74W6Dcci-R2EA1DBrEcboE6n90uoJs6UJNriAK_71nAsYonihU5aQFFnyPTkJHfRwHK6JlME6rn-b-rpLSpdyc6U1nOFZP2DEpz8U5FrYoLYSZIU-MQGxDhCnGc_rxl2IyP9B2qcCQ\"\n    }\n  ]\n}\n`
         */
        Jwks: string;
        /**
         * 授权黑白名单模式：
         * - true：白名单模式（名单中的 hosts + paths 不需要校验即可访问，其余都需要校验）
         * - false：黑名单模式（名单中的 hosts + paths 需要校验，其余可直接访问）
         * @example `true`
         */
        IsWhite: boolean;
        /**
         * 鉴权创建的GMT时间
         * @example `2024-02-19T02:41:03.000+0000`
         */
        GmtCreate: string;
        /**
         * 鉴权修改的GMT时间
         * @example `2024-02-19T02:41:03.000+0000`
         */
        GmtModified: string;
        /**
         * JWT Token类型：
         * - HEADER：通过Header传输
         * @example `HEADER`
         */
        TokenPosition: string;
        /**
         * JWT Token保存的位置
         * @example `Authorization`
         */
        TokenName: string;
        /**
         * JWT Token的前缀
         * @example `Bearer `
         */
        TokenNamePrefix: string;
        /**
         * 是否透传Token
         * @example `true`
         */
        TokenPass: boolean;
        /**
         * 鉴权是否开启
         * @example `false`
         */
        Status: boolean;
        /**
         * 授权成功后的重定向地址（OIDC/IDaaS使用，需要与OIDC/IDaaS中配置的重定向地址保持一致。）
         * @example `https://yourdomain/path`
         */
        RedirectUrl: string;
        /**
         * 服务注册的应用ID（OIDC/IDaaS使用）。
         * @example `example-app`
         */
        ClientId: string;
        /**
         * 服务注册的应用Secret（OIDC/IDaaS使用）。
         * @example `xxxxx`
         */
        ClientSecret: string;
        /**
         * Cookie的域名，认证通过后会将Cookie发送到指定的域名，保持登录状态（OIDC/IDaaS使用）。
         * @example `hello.com`
         */
        CookieDomain: string;
        /**
         * OIDC作用域（OIDC使用）。
         * @example `["openid","email"]`
         */
        ScopesList: string;
        /**
         * IDaaS实例用户登录页地址（IDaaS使用）。
         * @example `https://daxxxxcn.aliyunidaas.com/`
         */
        LoginUrl: string;
        /**
         * 鉴权类型为JWT时使用；JWT claims 的sub(subject)，即主体。
         * @example `https://example.com/auth`
         */
        Sub: string;
        /**
         * 自定义鉴权信息
         */
        ExternalAuthZ: {
            /**
             * 鉴权服务ID
             * @example `15300`
             */
            ServiceId: number;
            /**
             * 鉴权API的Path
             * @example `/auth`
             */
            PrefixPath: string;
            /**
             * Token位置，表示Token位于请求报文中哪个Header中，常见的有Authorization和Cookie
             * @example `Authorization`
             */
            TokenKey: string;
            /**
             * 允许的请求头部
             */
            AllowRequestHeaders: string[];
            /**
             * 允许的响应头部
             */
            AllowUpstreamHeaders: string[];
            /**
             * 鉴权服务的超时时间，单位：秒
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
             * 鉴权服务信息
             */
            Service: {
                /**
                 * 鉴权服务名称
                 * @example ` httpbin-auth-service`
                 */
                Name: string;
                /**
                 * 鉴权服务来源类型
                 * @example `K8s`
                 */
                SourceType: string;
                /**
                 * 鉴权服务所属的分组
                 * @example `test`
                 */
                GroupName: string;
                /**
                 * 鉴权服务命名空间
                 * @example `default`
                 */
                Namespace: string;
            };
            /**
             * 是否允许携带Body
             * @example `true`
             */
            WithRequestBody: boolean;
            /**
             * Body的最大字节数
             * @example `4000000`
             */
            BodyMaxBytes: number;
        };
        /**
         * 鉴权的授权规则列表，多个规则条件之间是“或”关系，规则条件内的多个匹配项之间是“与”关系。
         */
        ResourceList: {
            /**
             * 授权规则ID
             * @example `1303`
             */
            Id: number;
            /**
             * 规则所归属鉴权的ID
             * @example `2274`
             */
            AuthId: number;
            /**
             * 规则内域名的ID
             * @example `1765`
             */
            DomainId: number;
            /**
             * 规则内的域名
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 规则的匹配路径
             * @example `/test`
             */
            Path: string;
            /**
             * 授权黑白名单模式：
             * - true：白名单模式（名单中的 hosts + paths 不需要校验即可访问，其余都需要校验）
             * - false：黑名单模式（名单中的 hosts + paths 需要校验，其余可直接访问）
             * @example `true`
             */
            IsWhite: boolean;
            /**
             * 规则所属网关的ID
             * @example `2274`
             */
            GatewayId: number;
            /**
             * 规则所属网关的唯一ID
             * @example `gw-6f0dbd108a0249d2b675b3ef50b*****`
             */
            GatewayUniqueId: string;
            /**
             * 授权规则的创建GMT时间
             * @example `2024-02-19T03:32:38.000+0000`
             */
            GmtCreate: string;
            /**
             * 授权规则的修改GMT时间
             * @example `2024-02-19T03:32:38.000+0000`
             */
            GmtModified: string;
            /**
             * 请求Path的匹配类型：
             * - EQUAL：精确匹配
             * - PRE：前缀匹配
             * - ERGULAR：正则匹配
             * @example `EQUAL`
             */
            MatchType: string;
            /**
             * 路径是否开启大小写敏感
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
                 * 请求头名称
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
                 * 请求头的值
                 * @example `123`
                 */
                HeaderValue: string;
            }[];
        }[];
        /**
         * 授权资源模式：
         * - 0：简单模式
         * - 1：复杂模式
         * @example `0`
         */
        AuthResourceMode: number;
        /**
         * 复杂模式的YAML配置
         * @example `permissions:
          - not_rule:
              or_rules:
                rules:
                - and_rules:
                    rules:
                    - url_path:
                        path:
                          ignore_case: false
                          prefix: /version
                - and_rules:
                    rules:
                    - url_path:
                        path:
                          ignore_case: false
                          prefix: /header`
         */
        AuthResourceConfig: string;
    };
}
