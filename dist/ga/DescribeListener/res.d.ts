export interface DescribeListenerResponse {
    /**
     * 监听的描述信息。
     * @example `Listener`
     */
    Description: string;
    /**
     * 请求ID。
     * @example `6FEA0CF3-D3B9-43E5-A304-D217037876A8	`
     */
    RequestId: string;
    /**
     * 监听的状态。
     * - **configuring**：配置中。
     * - **init**：初始化。
     * - **updating**：更新中。
     * - **deleting**：删除中。
     * @example `active`
     */
    State: string;
    /**
     * 创建监听的时间戳。单位：毫秒。
     * @example `1577786252000`
     */
    CreateTime: string;
    /**
     * 监听端口信息。
     */
    PortRanges: {
        /**
         * 用来接收请求并向终端节点进行转发的起始监听端口。
         * @example `20`
         */
        FromPort: number;
        /**
         * 用来接收请求并向终端节点进行转发的结束监听端口。
         * @example `20`
         */
        ToPort: number;
    }[];
    /**
     * 后端端口信息。
     */
    BackendPorts: {
        /**
         * 后端服务器接收请求的起始端口。
         * 当您的监听协议为HTTPS，且监听的端口和后端服务器提供服务的端口一致时才会返回该项。
         * @example `80`
         */
        FromPort: string;
        /**
         * 后端服务器接收请求的结束端口。
         * @example `80`
         */
        ToPort: string;
    }[];
    /**
     * SSL证书列表。
     */
    Certificates: {
        /**
         * 证书类型。
         * 目前，仅支持返回**Server**（服务端证书）。
         * @example `Server`
         */
        Type: string;
        /**
         * SSL证书ID。
         * @example `449****-cn-hangzhou`
         */
        Id: string;
    }[];
    /**
     * 监听的网络传输协议类型。
     * - **tcp**：TCP协议。
     * - **udp**：UDP协议。
     * - **http**：HTTP协议。
     * - **https**：HTTPS协议。
     * @example `tcp`
     */
    Protocol: string;
    /**
     * 监听ID。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    ListenerId: string;
    /**
     * 客户端亲和性。
     * - 返回为**NONE**时：不保持客户端亲和性，即不能确保来自同一客户端的连接请求始终定向到同一终端节点。
     * - 返回为**SOURCE_IP**时，保持客户端亲和性。即客户端访问有状态的应用程序时，可以将来自同一客户端的所有请求都定向到同一终端节点，而不考虑源端口和协议。
     * @example `SOURCE_IP`
     */
    ClientAffinity: string;
    /**
     * 监听的名称。
     * @example `Listener`
     */
    Name: string;
    /**
     * 监听绑定的访问控制策略组信息。
     */
    RelatedAcls: {
        /**
         * 监听绑定的访问策略组ID。
         * @example `123`
         */
        AclId: string;
        /**
         * 是否开启了访问控制功能。
         * - **on**：已开启。
         * - **off**：未开启。
         * @example `off`
         */
        Status: string;
    }[];
    /**
     * 访问控制类型：
     * - **white**：仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。设置白名单存在一定业务风险。一旦设置白名单，就只有白名单中的IP可以访问全球加速监听。如果开启了白名单访问，但访问策略组中没有添加任何IP，则全球加速监听不会转发请求。
     * - **black**：来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。如果开启了黑名单访问，但访问策略组中没有添加任何IP，则全球加速监听会转发全部请求。
     * 当**Status**参数的值为**on**时，返回该项。
     * @example `white`
     */
    AclType: string;
    /**
     * 全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    AcceleratorId: string;
    /**
     * 是否开启了保持客户端源IP功能。
     * - **true**：开启了保持客户端源IP功能。开启后，支持后端服务查看客户端的原始IP地址。
     * - **false**：未开启保持客户端源IP功能。
     * @example `false`
     */
    ProxyProtocol: boolean;
    /**
     * `XForward`字段配置信息。
     */
    XForwardedForConfig: {
        /**
         * 是否通过`GA-ID`头字段获取全球加速实例ID。
         * - **true**：是。
         * - **false**：否。
         * > 仅HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForGaIdEnabled: boolean;
        /**
         * 是否通过`GA-AP`字段获取加速地域信息。
         * - **true**：是。
         * - **false**：否。
         * > 仅HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForGaApEnabled: boolean;
        /**
         * 是否通过`GA-X-Forward-Proto`字段获取全球加速实例的监听协议。
         * - **true**：是。
         * - **false**：否。
         * > 仅HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForProtoEnabled: boolean;
        /**
         * 是否通过`GA-X-Forward-Port`字段获取全球加速实例的监听端口。
         * - **true**：是。
         * - **false**：否。
         * > 仅HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForPortEnabled: boolean;
        /**
         * 是否通过`X-Real-IP`字段获取真实的客户端IP。
         * - **true**：是。
         * - **false**：否。
         * > 仅HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XRealIpEnabled: boolean;
    };
    /**
     * 安全策略实例ID。
     * - **tls_cipher_policy_1_0**
     *     - 支持的TLS版本：TLSv1.0、TLSv1.1和TLSv1.2。
     *     - 支持的加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
     * - **tls_cipher_policy_1_1**
     *     - 支持的TLS版本： TLSv1.1和TLSv1.2。
     *     - 支持的加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
     * - **tls_cipher_policy_1_2**
     *     - 支持的TLS版本：TLSv1.2。
     *     - 支持的加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
     * - **tls_cipher_policy_1_2_strict**
     *     - 支持的TLS版本：TLSv1.2。
     *     - 支持的加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、ECDHE-RSA-AES128-SHA和ECDHE-RSA-AES256-SHA。
     * - **tls_cipher_policy_1_2_strict_with_1_3**
     *     - 支持的TLS版本：TLSv1.2及TLSv1.3。
     *     - 支持的加密算法套件：TLS_AES_128_GCM_SHA256、TLS_AES_256_GCM_SHA384、TLS_CHACHA20_POLY1305_SHA256、TLS_AES_128_CCM_SHA256、TLS_AES_128_CCM_8_SHA256、ECDHE-ECDSA-AES128-GCM-SHA256、ECDHE-ECDSA-AES256-GCM-SHA384、ECDHE-ECDSA-AES128-SHA256、ECDHE-ECDSA-AES256-SHA384、ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、ECDHE-ECDSA-AES128-SHA、ECDHE-ECDSA-AES256-SHA、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA。
     * > 仅HTTPS监听支持此参数。
     * @example `tls_cipher_policy_1_0`
     */
    SecurityPolicyId: string;
    /**
     * 监听的路由类型。
     * - **Standard**：智能路由类型。
     * - **CustomRouting**：自定义路由类型。
     * @example `Standard`
     */
    Type: string;
    /**
     * 托管实例所属的服务方ID。
     * > 仅在**ServiceManaged**参数为**True**时有效。
     * @example `ALB`
     */
    ServiceId: string;
    /**
     * 是否为托管实例。取值：
     * - **true**：是托管实例。
     * - **false**：不是托管实例。
     * @example `true`
     */
    ServiceManaged: boolean;
    /**
     * 用户在此托管实例下可执行的动作策略列表。
     * > -  仅在**ServiceManaged**参数为**True**时有效。
     * > - 当实例处于托管状态时，用户对实例的操作会受到限制，某些操作行为会被禁止。
     */
    ServiceManagedInfos: {
        /**
         * 托管策略动作名称，取值：
         * - **Create**：创建实例。
         * - **Update**：更新当前实例。
         * - **Delete**：删除当前实例。
         * - **Associate**：引用/被引用当前实例。
         * - **UserUnmanaged**：用户解托管实例。
         * - **CreateChild**：在当前实例下创建子资源。
         * @example `Update`
         */
        Action: string;
        /**
         * 子资源类型，取值：
         * - **Listener**：监听资源。
         * - **IpSet**：加速地域资源。
         * - **EndpointGroup**：终端节点组资源。
         * - **ForwardingRule**：转发策略资源。
         * - **Endpoint**：终端节点资源。
         * - **EndpointGroupDestination**：自定义路由监听下的终端节点组协议映射资源。
         * - **EndpointPolicy**：自定义路由监听下的终端节点通行策略资源。
         * > 仅在**Action**参数为**CreateChild**时有效。
         * @example `Listener`
         */
        ChildType: string;
        /**
         * 托管策略动作是否被托管，取值：
         * - **true**：托管策略动作被托管，用户无权在托管实例下执行Action指定的操作。
         * - **false**：托管策略动作未被托管，用户可在托管实例下执行Action指定的操作。
         * @example `false`
         */
        IsManaged: boolean;
    }[];
    /**
     * 连接空闲超时时间。单位：秒。
     * @example `900`
     */
    IdleTimeout: number;
    /**
     * HTTP/HTTPS的连接请求超时时间。单位：秒。
     * >仅对Protocol（网络传输协议类型）为HTTP或HTTPS的监听有效。如果在超时时间内后端服务器一直没有响应，全球加速将放弃等待，并给客户端返回HTTP 504错误码。
     * @example `60`
     */
    RequestTimeout: number;
    /**
     * HTTP协议的最大版本，取值：
     * - **http3**：HTTP/3。
     * - **http2**：HTTP/2。
     * - **http1.1**：HTTP/1.1。
     * > 仅HTTPS监听支持此参数。
     * @example `http2`
     */
    HttpVersion: string;
}
