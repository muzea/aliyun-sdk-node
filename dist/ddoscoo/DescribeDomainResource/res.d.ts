export interface DescribeDomainResourceResponse {
    /**
     * 查询到的网站业务转发规则的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `39499F01-19D9-4EA4-A0E9-C6014BA5CDBE`
     */
    RequestId: string;
    /**
     * 网站业务转发规则的配置。
     */
    WebRules: {
        /**
         * 网站业务的域名。
         * @example `www.example.com`
         */
        Domain: string;
        /**
         * 是否开启了HTTPS强制跳转。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `false`
         */
        Http2HttpsEnable: boolean;
        /**
         * TLS协议版本。取值：
         * - **tls1.0**：表示TLS 1.0及以上版本。
         * - **tls1.1**：表示TLS 1.1及以上版本。
         * - **tls1.2**：表示TLS 1.2及以上版本。
         * @example `tls1.0`
         */
        SslProtocols: string;
        /**
         * 域名受到违规处罚的原因。取值：
         * - **1**：表示域名未履行ICP备案。
         * - **2**：表示域名经营的业务不符合监管要求。
         * 如果同时包含原因**1**和**2**，该参数返回**2**。
         * @example `1`
         */
        PunishReason: number;
        /**
         * 频率控制防护（CC防护）的模式。取值：
         * - **default**：表示正常模式。
         * - **gf_under_attack**：表示攻击紧急模式。
         * - **gf_sos_verify**：表示严格模式。
         * - **gf_sos_enhance**：表示超级严格模式。
         * @example `default`
         */
        CcTemplate: string;
        /**
         * HTTPS高级设置，仅在网站协议类型支持HTTPS（**ProxyType**包含**https**）时生效。使用JSON结构体转化的字符串格式表示，JSON结构体包含以下字段：
         * - **Http2https**：Integer类型 | 是否开启了HTTPS的强制跳转功能，取值：**0**（表示未开启） | **1**（表示已开启）。
         * - **Https2http**：Integer类型 | 是否开启了HTTP回源功能，取值：**0**（表示未开启） | **1**（表示已开启）。
         * - **Http2**：Integer类型 | 是否开启了HTTP 2.0协议支持，取值：**0**（表示未开启） | **1**（表示已开启）。
         * @example `{"Https2http":0,"Http2":0,"Http2https":0}`
         */
        HttpsExt: string;
        /**
         * 是否开启了频率控制防护（CC防护）。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `true`
         */
        CcEnabled: boolean;
        /**
         * 加密套件的类型。取值：
         * - **default**：表示自定义加密套件。
         * - **all**：表示全部加密套件。
         * - **strong**：表示强加密套件。
         * @example `default`
         */
        SslCiphers: string;
        /**
         * 是否开启了自定义频率控制防护（CC防护）。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `true`
         */
        CcRuleEnabled: boolean;
        /**
         * 是否开启了TLS 1.3协议支持。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `false`
         */
        Ssl13Enabled: boolean;
        /**
         * 源站服务器的地址类型。取值：
         * - **0**：表示使用IP地址格式。
         * - **1**：表示使用域名格式。
         * @example `0`
         */
        RsType: number;
        /**
         * 域名是否受到违规处罚。取值：
         * - **true**：表示已受到违规处罚。您可以通过**PunishReason**查看受到违规处罚的具体原因。
         * - **false**：表示未受到违规处罚。
         * @example `false`
         */
        PunishStatus: boolean;
        /**
         * DDoS高防是否对该网站业务的流量进行转发。取值：
         * - **true**：表示进行流量转发。
         * - **false**：表示已停止流量转发。
         * @example `true`
         */
        ProxyEnabled: boolean;
        /**
         * 域名使用的SSL证书的名称。
         * @example `49944XX.pem`
         */
        CertName: string;
        /**
         * 回源负载算法的类型。取值：
         * - **ip_hash**：表示IP Hash算法。该算法根据请求来源IP进行HASH映射，将同一个IP的所有请求定向到一个源站服务器。
         * - **rr**：表示轮转算法。该算法将所有请求轮流分配给不同源站服务器。
         * - **least_time**：表示Least Time算法。该算法通过智能DNS解析能力，保证业务流量从接入防护节点到转发回源站服务器整个链路的时延最短。
         * @example `ip_hash`
         */
        PolicyMode: string;
        /**
         * 域名对应的DDoS高防CNAME地址。
         * @example `0ekb69x3j9wvXXXX.aliyunddosXXXX.com`
         */
        Cname: string;
        /**
         * 是否启用了OCSP（Online Certificate Status Protocol）功能。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `false`
         */
        OcspEnabled: boolean;
        /**
         * 是否开启了HTTP 2.0。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `false`
         */
        Http2Enable: boolean;
        /**
         * 是否开启了HTTP回源功能。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `false`
         */
        Https2HttpEnable: boolean;
        /**
         * 网站的协议及端口配置。
         */
        ProxyTypes: {
            /**
             * 网站对外服务使用的协议类型。取值：
             * - **http**：表示HTTP协议。
             * - **https**：表示HTTPS协议。
             * - **websocket**：表示WebSocket协议。
             * - **websockets**：表示WebSockets协议。
             * @example `http`
             */
            ProxyType: string;
            /**
             * 网站对外服务使用的端口列表。
             */
            ProxyPorts: string[];
        }[];
        /**
         * 域名关联的DDoS高防实例的ID列表。
         */
        InstanceIds: string[];
        /**
         * 自定义加密套件列表。
         */
        CustomCiphers: string[];
        /**
         * 针对当前域名的白名单IP列表。
         */
        WhiteList: string[];
        /**
         * 针对当前域名的黑名单IP列表。
         */
        BlackList: string[];
        /**
         * 源站服务器地址列表。
         */
        RealServers: string[];
    }[];
}
