export interface DescribeDomainResponse {
    /**
     * 本次请求的ID。
     * @example `D827FCFE-90A7-4330-9326-D33C8B4C7726`
     */
    RequestId: string;
    /**
     * 域名的配置信息。
     */
    Domain: {
        /**
         * 是否开启了HTTP回源功能。取值：
         * - **0**：表示未开启。
         * - **1**：表示已开启。
         * > 仅当**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式接入WAF）且**HttpsPort**取值不为空（表示域名使用HTTPS协议）时，返回该参数。
         * @example `0`
         */
        HttpToUserIp: number;
        /**
         * 是否开启了回源SNI。回源SNI表示WAF转发客户端请求到源站服务器，在与源站进行TLS握手时，通过SNI扩展字段（Server Name Indicator extension）指定要访问的主机，并与该主机建立HTTPS连接。取值：
         * - **0**：表示未开启。
         * - **1**：表示已开启。
         * > 仅在**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式）且**HttpsPort**取值不为空（表示域名使用HTTPS协议）时，返回该参数。
         * @example `1`
         */
        SniStatus: number;
        /**
         * 域名在WAF前是否配置有其他七层代理（例如高防、CDN等），即客户端访问流量到WAF前是否有经过其他七层代理转发。取值：
         * - **0**：表示否。
         * - **1**：表示是。
         * @example `1`
         */
        IsAccessProduct: number;
        /**
         * WAF获取客户端真实IP的方式。取值：
         * - **0**：表示WAF读取请求头中X-Forwarded-For（XFF）字段的第一个值作为客户端IP。
         * - **1**：表示WAF读取请求头中由您设置的自定义字段值作为客户端IP。
         * > 仅当**IsAccessProduct**取值为**1**（表示WAF前有其他七层代理服务）时，返回该参数。
         * @example `1`
         */
        AccessHeaderMode: number;
        /**
         * 是否开启了HTTPS强制跳转。取值：
         * - **0**：表示未开启。
         * - **1**：表示已开启。
         * > 仅当**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式接入WAF）且**HttpsPort**取值不为空（表示域名使用HTTPS协议）时，返回该参数。
         * @example `0`
         */
        HttpsRedirect: number;
        /**
         * 是否开启了IPv4/IPv6回源协议跟随。取值：
         * - **0**：表示未开启。
         * - **1**：表示已开启。
         * > 仅当**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式接入WAF）时，返回该参数。
         * @example `1`
         */
        IpFollowStatus: number;
        /**
         * 回源时采用的负载均衡算法。取值：
         * - **0**：表示IP Hash算法。
         * - **1**：表示轮询算法。
         * - **2**：表示Least Time算法。
         * > 仅当**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式接入WAF）时，返回该参数。
         * @example `2`
         */
        LoadBalancing: number;
        /**
         * 域名接入方式。取值：
         * - **waf-cloud-dns**：表示CNAME接入。
         * - **waf-cloud-native**：表示透明接入。
         * @example `waf-cloud-dns`
         */
        AccessType: string;
        /**
         * 当前域名配置的版本。
         * @example `40`
         */
        Version: number;
        /**
         * WAF实例对应的集群类型。取值：
         * - **0**：表示物理集群。
         * - **1**：表示虚拟集群，即WAF独享集群。
         * > 仅当**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式接入WAF）时，返回该参数。
         * @example `0`
         */
        ClusterType: number;
        /**
         * WAF集群的读连接超时时长。单位：秒。
         * > 仅当**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式接入WAF）时，返回该参数。
         * @example `120`
         */
        ReadTime: number;
        /**
         * WAF集群的写连接超时时长。单位：秒。
         * > 仅当**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式接入WAF）时，返回该参数。
         * @example `120`
         */
        WriteTime: number;
        /**
         * SNI扩展字段的自定义值。取值为空表示未自定义SNI值，默认使用请求头中**Host**字段的值作为SNI扩展字段的值。
         * > 仅在**SniStatus**取值为**1**（表示开启SNI回源）时，返回该参数。
         * @example `waf.example.com`
         */
        SniHost: string;
        /**
         * WAF实例所属资源组ID。
         * @example `rg-acfm2mkrunv****`
         */
        ResourceGroupId: string;
        /**
         * WAF为域名分配的CNAME地址。
         * > 仅当**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式接入WAF）时，返回该参数。
         * @example `kdmqyi3ck7xogegxpiyfpb0fj21mgkxn.****.com`
         */
        Cname: string;
        /**
         * WAF集群的连接超时时长。单位：秒。
         * > 仅当**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式接入WAF）时，返回该参数。
         * @example `5`
         */
        ConnectionTime: number;
        /**
         * 域名的流量标记字段和值，用于标记经过WAF处理的流量。
         * > 仅当域名开启了流量标记功能时，返回该参数。
         */
        LogHeaders: {
            /**
             * 流量标记字段的名称。
             * @example `ALIWAF-TAG`
             */
            k: string;
            /**
             * 流量标记字段的值。
             * @example `Yes`
             */
            v: string;
        }[];
        /**
         * 透明接入的配置列表。
         * > 仅当**AccessType**取值为**waf-cloud-native**（表示域名使用透明接入方式接入WAF）时，返回该参数。
         */
        CloudNativeInstances: {
            /**
             * 引流端口的类型。取值：
             * - **SLB-L4**：表示从传统型负载均衡CLB（原SLB）实例的四层监听端口引流到WAF进行防护。
             * - **SLB-L7**：表示从传统型负载均衡CLB（原SLB）实例的七层监听端口引流到WAF进行防护。
             * - **ECS**：表示从云服务器ECS实例的监听端口引流到WAF进行防护。
             * - **ALB**：表示从应用型负载均衡ALB实例的HTTP、HTTPS监听端口引流到WAF进行防护。
             * @example `ALB`
             */
            RedirectionTypeName: string;
            /**
             * 云产品实例的类型。取值：
             * - **SLB**：表示传统型负载均衡CLB（原SLB）实例。
             * - **ECS**：表示云服务器ECS实例。
             * - **ALB**：表示应用型负载均衡ALB实例。
             * @example `ALB`
             */
            CloudNativeProductName: string;
            /**
             * 云产品实例的ID。
             * @example `alb-s65nua68wdedsp****`
             */
            InstanceId: string;
            /**
             * 云产品实例的公网IP地址列表。
             * @example `["39.XX.XX.197"]`
             */
            IPAddressList: string[];
            /**
             * 协议及端口配置列表。
             */
            ProtocolPortConfigs: {
                /**
                 * 端口列表。
                 * @example `[80]`
                 */
                Ports: number[];
                /**
                 * 协议类型。取值：
                 * - **http**：表示HTTP协议。
                 * - **https**：表示HTTPS协议。
                 * @example `http`
                 */
                Protocol: string;
            }[];
        }[];
        /**
         * HTTP端口列表。
         * > 仅当**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式接入WAF）时，返回该参数。
         */
        HttpPort: number[];
        /**
         * HTTP 2.0端口列表。
         * > 仅当**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式接入WAF）且**HttpsPort**取值不为空（表示域名使用HTTPS协议）时，返回该参数。
         */
        Http2Port: number[];
        /**
         * 源站服务器地址。
         * > 仅当**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式接入WAF）时，返回该参数。
         */
        SourceIps: string[];
        /**
         * HTTPS端口列表。
         * > 仅当**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式接入WAF）时，返回该参数。
         */
        HttpsPort: number[];
        /**
         * 用于获取客户端IP的自定义字段列表。
         * > 仅当**AccessHeaderMode**取值为**1**（表示WAF读取请求头中由您设置的自定义字段值作为客户端IP）时，返回该参数。
         */
        AccessHeaders: string[];
        /**
         * WAF回源失败时，是否重试。取值：
         * - **true**：表示重试。
         * - **false**：表示不重试。
         * @example `false`
         */
        Retry: boolean;
        /**
         * 是否保持长连接。取值：
         * - **true**：表示保持长连接。
         * - **false**：表示不保持长连接。
         * @example `true`
         */
        Keepalive: boolean;
        /**
         * 复用长连接的请求个数。取值范围：60~1000，单位：个。
         * > 开启长连接后，复用多少个长连接。
         * @example `1000`
         */
        KeepaliveRequests: number;
        /**
         * 空闲长连接超时时间，取值范围：1~60，默认15，单位：秒。
         * > 复用的长连接空闲多少长后释放。
         * @example `15`
         */
        KeepaliveTimeout: number;
    };
}
