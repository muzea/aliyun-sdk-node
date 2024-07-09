export interface UpdateConnectionRequest {
    /**
     * 要更新的连接名称。最大长度127个字符。最小长度2个字符。
     * @example `connection-name`
     */
    "ConnectionName": string;
    /**
     * 描述信息。最大长度255个字符。
     * @example `连接配置描述信息`
     */
    "Description"?: string;
    /**
     * 网络配置的数据结构。
     */
    "NetworkParameters": {
        /**
         * - 公网 ：PublicNetwork
         * -  专有网络 ：PrivateNetwork
         * > 选择专有网络时，VpcId、VswitcheId和SecurityGroupId必填。
         * @example `PublicNetwork`
         */
        NetworkType: string;
        /**
         * 专有网络VPC的ID。
         * @example `eb-test/vpc-bp1symadadwnwgmqud
        `
         */
        VpcId: string;
        /**
         * 交换机ID。
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
     * 鉴权数据结构。
     */
    "AuthParameters"?: {
        /**
         * 鉴权类型 ：
         * - BASIC：BASIC_AUTH。这种授权方式是浏览器遵守HTTP协议实现的基本授权方式，HTTP协议进行通信的过程中，HTTP协议定义了基本认证允许HTTP服务器对客户端进行用户身份证的方法。在请求头中添加 Authorization ：Basic空一格Base64加密（`用户名:密码`）固定格式。Username和Password是必填的。
         * - API KEY ：API_KEY_AUTH。固定的格式在请求头中添加Token ：Token值。ApiKeyName和ApiKeyValue是必填的
         * - OAUTH ：OAUTH_AUTH。OAuth2.0是一种授权机制，正常情况，不使用OAuth2.0等授权机制的系统，客户端是可以直接访问资源服务器的资源的，为了用户安全访问数据，在访问中间添加了Access Token机制。客户端需要携带Access Token去访问受到保护的资源。所以OAuth2.0确保了资源不被恶意客户端访问，从而提高了系统的安全性。AuthorizationEndpoint、OAuthHttpParameters和HttpMethod是必填的。
         * @example `BASIC_AUTH`
         */
        AuthorizationType: string;
        /**
         * API Key鉴权的数据结构。
         */
        ApiKeyAuthParameters: {
            /**
             * API Key的key值。
             * @example `name`
             */
            ApiKeyName: string;
            /**
             * API Value的value值。
             * @example `demo`
             */
            ApiKeyValue: string;
        };
        /**
         * Basic鉴权的数据结构。
         */
        BasicAuthParameters: {
            /**
             * basic鉴权的密码。
             * @example `admin`
             */
            Password: string;
            /**
             * basic鉴权的用户名。
             * @example `admin`
             */
            Username: string;
        };
        /**
         * OAuth鉴权参数数据结构。
         */
        OAuthParameters: {
            /**
             * OAuth获取token的请求地址。最大长度127个字符。
             * @example `http://localhost:8080/oauth/token`
             */
            AuthorizationEndpoint: string;
            /**
             * 客户参数数据结构。
             */
            ClientParameters: {
                /**
                 * 客户端的ID。
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
             * 探测类型的方法。取值：
             * - GET
             * - POST
             * - HEAD
             * - DELETE
             * - PUT
             * - PATCH
             * @example `POST`
             */
            HttpMethod: string;
            /**
             * OAuth鉴权的请求参数。
             */
            OAuthHttpParameters: {
                /**
                 * 请求参数的数据结构列表。
                 */
                BodyParameters: {
                    /**
                     * 是否是鉴权。
                     * @example `false`
                     */
                    IsValueSecret: string;
                    /**
                     * body请求参数的key。
                     * @example `name`
                     */
                    Key: string;
                    /**
                     * body请求参数的value。
                     * @example `demo`
                     */
                    Value: string;
                }[];
                /**
                 * 请求头的参数列表。
                 */
                HeaderParameters: {
                    /**
                     * 是否是鉴权。
                     * @example `false`
                     */
                    IsValueSecret: string;
                    /**
                     * 请求头参数key。
                     * @example `name`
                     */
                    Key: string;
                    /**
                     * 请求头参数value。
                     * @example `demo`
                     */
                    Value: string;
                }[];
                /**
                 * 请求路径参数的数据结构。
                 */
                QueryStringParameters: {
                    /**
                     * 是否是鉴权。
                     * @example `false`
                     */
                    IsValueSecret: string;
                    /**
                     * 请求路径参数key。
                     * @example `name`
                     */
                    Key: string;
                    /**
                     * 请求路径参数value。
                     * @example `demo`
                     */
                    Value: string;
                }[];
            };
        };
    };
}
