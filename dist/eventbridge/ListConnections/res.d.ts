export interface ListConnectionsResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `E3619976-8714-5D88-BBA2-6983D798A8BB`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 接口状态或POP错误码。取值说明如下：Success：成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 返回连接配置的列表信息
     */
    Data: {
        /**
         * 返回连接配置的列表信息
         */
        Connections: {
            /**
             * 连接配置名称
             * @example `connection-name`
             */
            ConnectionName: string;
            /**
             * 连接配置描述信息
             * @example `连接配置描述信息`
             */
            Description: string;
            /**
             * 连接配置的id
             * @example `1141093`
             */
            Id: number;
            /**
             * 创建数据源的时间戳
             * @example `1592838994234`
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
                 * 专有网络VPC的ID。
                 * @example `eb-test/vpc-bp1symadadwnwgmqud`
                 */
                VpcId: string;
                /**
                 * 交换机id
                 * @example `vsw-bp1iu4x7aeradadown1og8,vsw-bp193sqmadadlaszpeqbt2c`
                 */
                VswitcheId: string;
                /**
                 * 安全组ID。
                 * @example `eb-167adad548759-security_grop/sg-bp1addad26peuh9qh9rtyb`
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
                     * @example `Token`
                     */
                    ApiKeyName: string;
                    /**
                     * Api key的value值
                     * @example `asdkjnqkwejooa`
                     */
                    ApiKeyValue: string;
                };
                /**
                 * Basic 权限的数据结构
                 */
                BasicAuthParameters: {
                    /**
                     * basic 鉴权的密码
                     * @example `admin`
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
                         * 应用的客户端密钥secret。
                         * @example `ClientSecret`
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
                             * @example `name`
                             */
                            Key: string;
                            /**
                             * body请求参数的value
                             * @example `demo`
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
                             * @example `name`
                             */
                            Key: string;
                            /**
                             * 请求头参数value
                             * @example `demo`
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
                             * @example `name`
                             */
                            Key: string;
                            /**
                             * 请求路径参数value
                             * @example `demo`
                             */
                            Value: string;
                        }[];
                    };
                };
            };
        }[];
        /**
         * 如果还有多余的返回值则会返回NextToken。
         * @example `0`
         */
        NextToken: string;
        /**
         * 总条数。
         * @example `1`
         */
        Total: number;
        /**
         * 页大小
         * @example `10`
         */
        MaxResults: number;
    };
}
