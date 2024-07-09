export interface CreateDomainRequest {
    /**
     * WAF实例的ID。
     * > 您可以调用[DescribeInstanceInfo](~~140857~~)查询当前WAF实例的ID。
     * @example `waf-cn-7pp26f1****`
     */
    "InstanceId": string;
    /**
     * 要添加到WAF防护的域名。
     * @example `www.example.com`
     */
    "Domain": string;
    /**
     * 域名对应的源站服务器IP或服务器回源域名。您只能选择设置源站服务器IP或服务器回源域名中的一种：
     * - 设置源站服务器IP时，使用`["ip1","ip2",……]`格式表示。最多支持添加20个IP。
     * - 设置服务器回源域名时，使用`["domain"]`格式表示。只能填写1个域名地址。
     * > 仅在**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式）时，需要设置该参数。
     * @example `["39.XX.XX.197"]`
     */
    "SourceIps"?: string;
    /**
     * 域名在WAF前是否配置有七层代理（例如高防、CDN等），即客户端访问流量到WAF前是否有经过其他七层代理转发。取值：
     * - **0**：表示否。
     * - **1**：表示是。
     * @example `0`
     */
    "IsAccessProduct": number;
    /**
     * WAF获取客户端真实IP的方式。取值：
     * - **0**（默认）：表示WAF读取请求头中X-Forwarded-For（XFF）字段的第一个值作为客户端IP。
     * - **1**：表示WAF读取请求头中由您设置的自定义字段值作为客户端IP。
     * > 仅在**IsAccessProduct**取值为**1**（表示WAF前有其他七层代理服务）时，需要设置该参数。
     * @example `0`
     */
    "AccessHeaderMode"?: number;
    /**
     * 设置用于获取客户端IP的自定义字段列表，使用`["header1","header2",……]`格式表示。
     * > 仅在**AccessHeaderMode**取值为**1**（表示WAF读取请求头中由您设置的自定义字段值作为客户端IP）时，需要设置该参数。
     * @example `["X-Client-IP"]`
     */
    "AccessHeaders"?: string;
    /**
     * 回源时采用的负载均衡算法。取值：
     * - **0**：表示IP Hash算法。
     * - **1**：表示轮询算法。
     * - **2**：表示Least Time算法。
     * > 仅在**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式）时，需要设置该参数。
     * @example `0`
     */
    "LoadBalancing"?: number;
    /**
     * 域名的流量标记字段和值，用于标记经过WAF处理的流量。
     * 该参数值的格式为`[{"k":"_key_","v":"_value_"}]`。其中，`_key_`表示所指定的自定义请求头部字段，`_value_`表示为该字段设定的值。
     * 通过指定自定义请求头部字段和对应的值，当域名的访问流量经过WAF时，WAF自动在请求头部中添加所设定的自定义字段值作为流量标记，便于后端服务统计相关信息。
     * > 如果请求中已存在该自定义头部字段，系统将用所设定的流量标记值覆盖请求中该自定义字段的值。
     * @example `[{"k":"ALIWAF-TAG","v":"Yes"}]`
     */
    "LogHeaders"?: string;
    /**
     * HTTP协议端口列表，使用`[port1,port2,……]`格式表示。
     * > 仅在**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式）时，需要设置该参数。设置该参数表示域名使用HTTP协议。**HttpPort**与**HttpsPort**不允许同时为空。
     * @example `[80]`
     */
    "HttpPort"?: string;
    /**
     * HTTPS协议端口列表，使用`[port1,port2,……]`格式表示。
     * > 仅在**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式）时，需要设置该参数。设置该参数表示域名使用HTTPS协议。**HttpPort**与**HttpsPort**不允许同时为空。
     * @example `[443]`
     */
    "HttpsPort"?: string;
    /**
     * HTTP 2.0协议端口列表，使用`[port1,port2,……]`格式表示。
     * > 仅在**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式）且**HttpsPort**取值不为空（表示域名使用HTTPS协议）时，需要设置该参数。
     * @example `[443]`
     */
    "Http2Port"?: string;
    /**
     * 是否开启HTTP回源。开启HTTP回源后，HTTPS访问请求将通过HTTP协议转发回源站，默认回源端口为80。取值：
     * - **0**（默认）：表示关闭。
     * - **1**：表示开启。
     * > 仅在**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式）且**HttpsPort**取值不为空（表示域名使用HTTPS协议）时，需要设置该参数。
     * @example `0`
     */
    "HttpToUserIp"?: number;
    /**
     * 是否开启HTTPS强制跳转。开启强制跳转后，客户端的HTTP请求将被强制跳转成HTTPS请求，默认跳转端口为443。取值：
     * - **0**（默认）：表示关闭。
     * - **1**：表示开启。
     * > 仅在**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式）且**HttpsPort**取值不为空（表示域名使用HTTPS协议）时，需要设置该参数。
     * @example `0`
     */
    "HttpsRedirect"?: number;
    /**
     * WAF防护集群类型。取值：
     * - **0**（默认）：表示物理集群。
     * - **1**：表示虚拟集群，即WAF独享集群。
     * > 仅在**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式）时，需要设置该参数。
     * @example `0`
     */
    "ClusterType"?: number;
    /**
     * WAF实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-atstuj3rtop****`
     */
    "ResourceGroupId"?: string;
    /**
     * WAF独享集群的连接超时时长。单位：秒。
     * > 仅在**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式）且**ClusterType**取值为**1**（表示域名使用WAF独享集群）时，需要设置该参数。
     * @example `5`
     */
    "ConnectionTime"?: number;
    /**
     * WAF独享集群的读连接超时时长。单位：秒。
     * > 仅在**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式）且**ClusterType**取值为**1**（表示域名使用WAF独享集群）时，需要设置该参数。
     * @example `120`
     */
    "ReadTime"?: number;
    /**
     * WAF独享集群的写连接超时时长。单位：秒。
     * > 仅在**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式）且**ClusterType**取值为**1**（表示域名使用WAF独享集群）时，需要设置该参数。
     * @example `120`
     */
    "WriteTime"?: number;
    /**
     * 域名接入方式。取值：
     * - **waf-cloud-dns**（默认）：表示CNAME接入。
     * - **waf-cloud-native**：表示透明接入。
     * @example `waf-cloud-dns`
     */
    "AccessType"?: string;
    /**
     * 透明接入的服务器及端口配置列表。使用JSON数组转化的字符串格式表示。JSON数组中的每个元素是一个结构体，包含以下字段：
     * - **ProtocolPortConfigs**：JSON Array类型 | 必选 | 表示协议及端口配置列表。JSON数组中的每个元素是一个结构体，包含以下字段：
     *     - **Ports**：Array类型 | 必选 | 表示端口列表，格式为`[port1,port2,……]`。
     *     - **Protocol**：String类型 | 必选 | 表示协议类型。取值：**http**、**https**。
     * - **CloudNativeProductName**：String类型 | 必选 | 表示云产品实例的类型。取值：**ECS**、**SLB**、**ALB**。
     * - **RedirectionTypeName**：String类型 | 必选 | 表示引流端口的类型。取值：**ECS**（表示ECS端口）、**SLB-L4**（表示SLB四层端口）、**SLB-L7**（表示SLB七层端口）、**ALB**（表示ALB端口）。
     * - **InstanceId**：String类型 | 必选 | 表示云产品实例的ID。
     * - **IPAddressList**：Array类型 | 必选 | 表示云产品实例的公网IP列表。格式为`["ip1","ip2",……]`。
     * > 仅在**AccessType**为**waf-cloud-native**（表示域名使用透明接入方式）时，需要设置该参数。
     * @example `[{"ProtocolPortConfigs":[{"Ports":[80],"Protocol":"http"}],"RedirectionTypeName":"ALB","InstanceId":"alb-s65nua68wdedsp****","IPAddressList":["182.XX.XX.113"],"CloudNativeProductName":"ALB"}]`
     */
    "CloudNativeInstances"?: string;
    /**
     * 源站服务器地址同时包含IPv4和IPv6地址时，是否开启IPv4/IPv6回源协议跟随。开启回源协议跟随后，WAF将来自IPv4地址的请求转发到IPv4源站、将来自IPv6地址的请求转发到IPv6源站。取值：
     * - **0**（默认）：表示关闭。
     * - **1**：表示开启。
     * > 仅在**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式）时，需要设置该参数。
     * @example `1`
     */
    "IpFollowStatus"?: number;
    /**
     * 设置是否开启回源SNI。回源SNI表示WAF转发客户端请求到源站服务器，在与源站进行TLS握手时，通过SNI扩展字段（Server Name Indicator extension）指定要访问的主机，并与该主机建立HTTPS连接。如果您的源站服务器有多个虚拟主机（对应不同域名），则您需要开启回源SNI。取值：
     * - **0**：表示关闭。
     * - **1**：表示开启。
     * 中国内地WAF实例默认关闭SNI回源；海外地区WAF实例默认开启SNI回源。
     * > 仅在**AccessType**取值为**waf-cloud-dns**（表示域名使用CNAME接入方式）且**HttpsPort**取值不为空（表示域名使用HTTPS协议）时，需要设置该参数。
     * @example `1`
     */
    "SniStatus"?: number;
    /**
     * 自定义SNI扩展字段的值。如果不设置该参数，则默认使用请求头中**Host**字段的值作为SNI扩展字段的值。
     * 一般情况无需自定义SNI，除非您的业务有特殊配置要求，希望WAF在回源请求中使用与实际请求Host不一致的SNI（即此处设置的自定义SNI）。
     * > 仅在**SniStatus**取值为**1**（表示开启SNI回源）时，需要设置该参数。
     * @example `waf.example.com`
     */
    "SniHost"?: string;
    /**
     * WAF回源失败时，是否重试。取值：
     * - **true**（默认）：表示重试。
     * - **false**：表示不重试。
     * @example `true`
     */
    "Retry"?: boolean;
    /**
     * 是否保持长连接。取值：
     * - **true**（默认）：表示保持长连接。
     * - **false**：表示不保持长连接。
     * @example `true`
     */
    "Keepalive"?: boolean;
    /**
     * 复用长连接的请求个数。取值范围：60~1000，单位：个。
     * > 开启长连接后，复用多少个长连接。
     * @example `1000`
     */
    "KeepaliveRequests"?: number;
    /**
     * 空闲长连接超时时间，取值范围：1~60，默认15，单位：秒。
     * > 复用的长连接空闲多少长后释放。
     * @example `15`
     */
    "KeepaliveTimeout"?: number;
}
