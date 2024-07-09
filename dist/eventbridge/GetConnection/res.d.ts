export interface GetConnectionResponse {
    /**
     * 返回的requestId
     * @example `34AD682D-5B91-5773-8132-AA38C130****`
     */
    RequestId: string;
    /**
     * 接口请求返回的信息。
     * @example `success`
     */
    Message: string;
    /**
     * 接口状态或POP错误码。取值说明如下：Success：成功。
     * @example `Success`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: number;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 连接配置信息列表。
         */
        Connections: {
            /**
             * 连接配置名称
             * @example `demo`
             */
            ConnectionName: string;
            /**
             * 数据源ID。
             * @example `5668`
             */
            Id: number;
            /**
             * 连接配置描述信息
             * @example `demo`
             */
            Description: string;
            /**
             * 创建时间
             * @example `1669648905`
             */
            GmtCreate: number;
            /**
             * 网络配置的数据结构
             */
            NetworkParameters: {
                /**
                 * - 公网 ：PublicNetwork
                 * - 专有网络 ：PrivateNetwork
                 * @example `PublicNetwork`
                 */
                NetworkType: string;
                /**
                 * 专有网络VPC的ID
                 * @example `eb-test/vpc-bp1symadadwnwg****`
                 */
                VpcId: string;
                /**
                 * 交换机ID
                 * @example `vsw-bp1iu4x7aeradadown****,vsw-bp193sqmadadlaszpeq****`
                 */
                VswitcheId: string;
                /**
                 * 安全组ID
                 * @example `eb-167adad548759-security_grop/sg-bp1addad26peuh9qh9****`
                 */
                SecurityGroupId: string;
            };
            /**
             * 权限数据结构
             */
            AuthParameters: {
                /**
                 * 权限类型 ：
                 * - BASIC：BASIC_AUTH
                 * - API KEY ：API_KEY_AUTH
                 * - OAUTH ：OAUTH_AUTH
                 * @example `BASIC_AUTH`
                 */
                AuthorizationType: string;
                /**
                 * API KEY 的数据结构
                 */
                ApiKeyAuthParameters: {
                    /**
                     * Api key 的key值
                     * @example `key`
                     */
                    ApiKeyName: string;
                    /**
                     * Api key的value值
                     * @example `value`
                     */
                    ApiKeyValue: string;
                };
                /**
                 * Basic 权限的数据结构
                 */
                BasicAuthParameters: {
                    /**
                     * basic 鉴权的密码
                     * @example `********`
                     */
                    Password: string;
                    /**
                     * basic 鉴权的用户名
                     * @example `admin`
                     */
                    Username: string;
                };
                /**
                 * OAuth请求参数数据结构
                 */
                OAuthParameters: {
                    /**
                     * OAuth获取token的请求地址
                     * @example `http://localhost:8080/oauth/token`
                     */
                    AuthorizationEndpoint: string;
                    /**
                     * 探测类型的方法。取值：
                     * - GET
                     * - POST
                     * - HEAD
                     * @example `POST`
                     */
                    HttpMethod: string;
                    /**
                     * 客户参数数据结构
                     */
                    ClientParameters: {
                        /**
                         * 客户端的ID
                         * @example `ClientID`
                         */
                        ClientID: string;
                        /**
                         * 应用的客户端密钥secret
                         * @example `Qo57Q~F249~S74GmNPA36pZJoJK4f4****`
                         */
                        ClientSecret: string;
                    };
                    /**
                     * Oauth鉴权的请求参数
                     */
                    OAuthHttpParameters: {
                        /**
                         * 请求参数的数据结构列表
                         */
                        BodyParameters: {
                            /**
                             * 是否是鉴权
                             * @example `false`
                             */
                            IsValueSecret: string;
                            /**
                             * body请求参数的key
                             * @example `keyDemo`
                             */
                            Key: string;
                            /**
                             * body请求参数的value
                             * @example `valueDemo`
                             */
                            Value: string;
                        }[];
                        /**
                         * 请求头的参数列表
                         */
                        HeaderParameters: {
                            /**
                             * 是否是鉴
                             * @example `false`
                             */
                            IsValueSecret: string;
                            /**
                             * 请求头参数key
                             * @example `keyDemo`
                             */
                            Key: string;
                            /**
                             * 请求头的参数value
                             * @example `keyDemo`
                             */
                            Value: string;
                        }[];
                        /**
                         * 请求路径参数的数据结构
                         */
                        QueryStringParameters: {
                            /**
                             * 是否是鉴
                             * @example `false`
                             */
                            IsValueSecret: string;
                            /**
                             * 请求路径参数key
                             * @example `keyDemo`
                             */
                            Key: string;
                            /**
                             * 请求路径参数value
                             * @example `valueDemo`
                             */
                            Value: string;
                        }[];
                    };
                };
            };
        }[];
    };
}
