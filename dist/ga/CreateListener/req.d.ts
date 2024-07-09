export interface CreateListenerRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000	`
     */
    "ClientToken"?: string;
    /**
     * 全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    "AcceleratorId": string;
    /**
     * 监听的名称。
     * 名称长度为1~128个字符，以大小写字母或中文开头，可包含数字、半角句号（.）下划线（_）和短划线（-）。
     * @example `Listener`
     */
    "Name"?: string;
    /**
     * 监听的描述信息。
     * 描述长度最大为200个字符，不能以`http://`和`https://`开头。
     * @example `Listener`
     */
    "Description"?: string;
    /**
     * 客户端亲和性。
     * - 不传入值时，不保持客户端亲和性，即不能确保来自同一客户端的连接请求始终定向到同一终端节点。
     * - 取值为**SOURCE_IP**时，保持客户端亲和性。即客户端访问有状态的应用程序时，可以将来自同一客户端的所有请求都定向到同一终端节点，而不考虑源端口和协议。
     * @example `SOURCE_IP`
     */
    "ClientAffinity"?: string;
    /**
     * 监听的网络传输协议类型，取值：
     * - **tcp**：TCP协议。
     * - **udp**：UDP协议。
     * - **http**：HTTP协议。
     * - **https**：HTTPS协议。
     * @example `tcp`
     */
    "Protocol"?: string;
    /**
     * 是否开启保持客户端源IP功能。
     * - **true**：开启保持客户端源IP功能。开启后，支持后端服务查看客户端的原始IP地址。
     * - **false**（默认值）：不开启保持客户端源IP功能。
     * > 该参数后续将不在监听API中配置，建议在终端节点组的相关API中进行配置。关于**ProxyProtocol**，请参见[CreateEndpointGroup](~~153259~~)和[UpdateEndpointGroup](~~153262~~)。
     * @example `false`
     */
    "ProxyProtocol"?: boolean;
    /**
     * 监听端口信息。
     * 可配置的监听端口范围为**1**~**65499**。
     * 最多可配置端口数量与监听路由类型和监听协议类型相关，更多信息，请参见[监听端口](~~153216~~)。
     */
    "PortRanges": {
        /**
         * 用来接收请求并向终端节点进行转发的起始监听端口。
         * 可配置的监听端口范围为**1**~**65499**，且需满足**FromPort**≤**ToPort**。
         * 最多可配置端口数量与监听路由类型和监听协议类型相关，更多信息，请参见[监听端口](~~153216~~)。
         * >对于HTTP或HTTPS协议的监听，只支持配置一个监听端口，即起始监听端口和结束监听端口需相同。
         * @example `20`
         */
        FromPort: number;
        /**
         * 用来接收请求并向终端节点进行转发的结束监听端口。
         * 可配置的监听端口范围为**1**~**65499**，且需满足**FromPort**≤**ToPort**。
         * 最多可配置端口数量与监听路由类型和监听协议类型相关，更多信息，请参见[监听端口](~~153216~~)。
         * >对于HTTP或HTTPS协议的监听，只支持配置一个监听端口，即起始监听端口和结束监听端口需相同。
         * @example `20`
         */
        ToPort: number;
    }[];
    /**
     * SSL证书列表。
     */
    "Certificates"?: {
        /**
         * SSL证书ID。
         * >仅HTTPS协议的监听需要配置该参数。
         * @example `449****-cn-hangzhou`
         */
        Id: string;
    }[];
    /**
     * `XForward`字段配置信息。
     */
    "XForwardedForConfig"?: {
        /**
         * 是否通过`GA-ID`头字段获取全球加速实例ID。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 仅HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForGaIdEnabled: boolean;
        /**
         * 是否通过`GA-AP`字段获取加速地域信息。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 仅HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForGaApEnabled: boolean;
        /**
         * 是否通过`GA-X-Forward-Proto`字段获取全球加速实例的监听协议。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 仅HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForProtoEnabled: boolean;
        /**
         * 是否通过`GA-X-Forward-Port`字段获取全球加速实例的监听端口。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 仅HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XForwardedForPortEnabled: boolean;
        /**
         * 是否通过`X-Real-IP`字段获取真实的客户端IP。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 仅HTTP和HTTPS监听支持此参数。
         * @example `false`
         */
        XRealIpEnabled: boolean;
    };
    /**
     * 安全策略实例ID。取值：
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
    "SecurityPolicyId"?: string;
    /**
     * 监听的路由类型。取值：
     * - **Standard**（默认值）：智能路由类型。
     * - **CustomRouting**：自定义路由类型。
     * > - 监听支持自定义路由类型的功能邀测中，如需使用，请联系阿里云客户经理。
     * > - 同一个标准型全球加速实例，不支持同时配置两种路由类型的监听，且路由类型配置完成后不支持变更。更多信息，请参见[监听概述](~~153216~~)。
     * @example `Standard`
     */
    "Type"?: string;
    /**
     * 智能路由类型监听的终端节点组的配置信息。
     * 您最多可以配置10个该类型终端节点组。
     * > 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
     */
    "EndpointGroupConfigurations"?: {
        /**
         * 智能路由类型监听的终端节点组名称。
         * 名称长度为1~128个字符，以大小写字母或中文开头，可包含数字、半角句号（.）下划线（_）和短划线（-）。
         * 您最多可以输入10个终端节点组名称。
         * > 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
         * @example `test`
         */
        EndpointGroupName: string;
        /**
         * 智能路由类型监听的终端节点组描述信息。
         * 描述长度最大200字符，不能包含`http://`和`https://`字符。
         * 您最多可以输入10个终端节点组描述信息。
         * > 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
         * @example `test`
         */
        EndpointGroupDescription: string;
        /**
         * 智能路由类型监听的终端节点组所属地域ID。
         * 您最多可以输入10个终端节点组的地域ID。
         * > 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
         * @example `cn-hangzhou`
         */
        EndpointGroupRegion: string;
        /**
         * 流量调配值，即智能路由类型监听有多个终端节点组时，配置到不同终端节点组的流量比例。
         * 取值范围：**1**~**100**。默认值：**100**。
         * 您最多可以输入10个终端节点组的流量调配值。
         * > 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
         * @example `100`
         */
        TrafficPercentage: number;
        /**
         * 是否为智能路由类型监听的终端节点组开启健康检查。取值：
         * - **true**：开启健康检查。
         * - **false**（默认值）：关闭健康检查。
         * 您最多可以开启10个终端节点组的健康检查。
         * > 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
         * @example `false`
         */
        HealthCheckEnabled: boolean;
        /**
         * 健康检查的时间间隔，单位：秒。
         * 您最多可以输入10个健康检查的时间间隔。
         * > 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
         * @example `3`
         */
        HealthCheckIntervalSeconds: number;
        /**
         * 健康检查路径。
         * 您最多可以输入10个健康检查路径。
         * > 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
         * @example `/healthcheck`
         */
        HealthCheckPath: string;
        /**
         * 健康检查的端口。取值范围：**1**~**65535**。
         * 您最多可以输入10个健康检查的端口。
         * > 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
         * @example `20`
         */
        HealthCheckPort: number;
        /**
         * 健康检查的协议。取值：
         * - **tcp**或**TCP**：TCP协议。
         * - **http**或**HTTP**：HTTP协议。
         * - **https**或**HTTPS**：HTTPS协议。
         * 您最多可以输入10个健康检查的协议。
         * > 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
         * @example `tcp`
         */
        HealthCheckProtocol: string;
        /**
         * 针对健康检查状态变化所需要的连续健康检查次数，即从成功到失败的连续健康检查失败次数或从失败到成功的连续健康检查成功次数。
         * 取值范围：**2**~**10**。默认值：**3**。
         * 您最多可以输入10个健康检查状态变化所需要的连续健康检查次数值。
         * > 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
         * @example `3`
         */
        ThresholdCount: number;
        /**
         * 智能路由类型监听的终端节点配置信息。
         */
        EndpointConfigurations: {
            /**
             * 智能路由类型监听的终端节点类型。取值：
             * - **Domain**：自定义域名。
             * - **Ip**：自定义IP。
             * - **PublicIp**：阿里云公网IP。
             * - **ECS**：阿里云ECS实例。
             * - **SLB**：阿里云SLB实例。
             * - **ALB**：阿里云ALB实例。
             * - **OSS**：阿里云OSS实例。
             * - **ENI**：阿里云弹性网卡。
             * - **NLB**：阿里云NLB 实例。
             * 在智能路由类型监听的某个终端节点组中，您最多可以输入100个终端节点类型。
             * >- 当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息，且该参数必填。
             * >- 终端节点类型取值为**ECS**、**ENI**、**SLB**、**ALB**或**NLB**时，如果服务关联角色不存在，系统会自动创建一个名称为AliyunServiceRoleForGaVpcEndpoint的服务关联角色。
             * >- 终端节点类型取值为**ALB**时，如果服务关联角色不存在，系统会自动创建一个名称为AliyunServiceRoleForGaAlb的服务关联角色。
             * >- 终端节点类型取值为**OSS**时，如果服务关联角色不存在，系统会自动创建一个名称为AliyunServiceRoleForGaOss的服务关联角色。
             * >- 终端节点类型取值为**NLB**时，如果服务关联角色不存在，系统会自动创建一个名称为 AliyunServiceRoleForGaNlb的服务关联角色。
             * >> 更多信息，请参见[服务关联角色](~~178360~~)。
             * @example `Ip`
             */
            Type: string;
            /**
             * 智能路由类型监听的终端节点权重。
             * 取值范围：**0**~**255**。
             * 在智能路由类型监听的某个终端节点组中，您最多可以输入100个终端节点的权重。
             * > - 当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息，且该参数必填。
             * > - 如果某个终端节点的权重设置为0，全球加速将终止向该终端节点分发流量，请您谨慎操作。
             * @example `20`
             */
            Weight: number;
            /**
             * 智能路由类型监听的终端节点的IP或域名。
             * 在智能路由类型监听的某个终端节点组中，您最多可以输入100个终端节点的IP或域名。
             * > 当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息，且该参数必填。
             * @example `47.0.XX.XX`
             */
            Endpoint: string;
            /**
             * 弹性网卡的私网IP地址。
             * > 当终端节点类型为**ENI**时，可以选择配置该参数，如果不配置默认为ENI的主私网IP地址。
             * @example `172.168.XX.XX`
             */
            SubAddress: string;
        }[];
        /**
         * 智能路由类型监听的终端节点后端服务协议。取值：
         * - **HTTP**（默认值）：HTTP协议。
         * - **HTTPS**：HTTPS协议。
         * 您最多可以输入10个后端服务协议。
         * >- 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
         * >- 仅为HTTP或HTTPS协议的智能路由类型监听创建终端节点组时才支持配置该项。
         * >- 对于HTTP协议的监听，后端服务协议支持且仅支持**HTTP**。
         * @example `HTTP`
         */
        EndpointRequestProtocol: string;
        /**
         * 智能路由类型监听的终端节点组类型。取值：
         * - **default**（默认值）：默认终端节点组。
         * - **virtual**：虚拟终端节点组。
         * 您最多可以输入10个终端节点组类型。
         * >- 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
         * >-  仅HTTP或HTTPS协议的智能路由类型监听才支持创建虚拟终端节点组。
         * @example `default`
         */
        EndpointGroupType: string;
        /**
         * 端口映射关系。
         */
        PortOverrides: {
            /**
             * 配置端口映射时的监听端口。
             * 您最多可以输入5个端口映射中的监听端口。
             * >- 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
             * >- 仅为HTTP或HTTPS协议的智能路由类型监听创建终端节点组时才支持创建端口映射关系。
             * >- 端口映射中的监听端口必须与当前监听的监听端口一致。
             * @example `443`
             */
            ListenerPort: number;
            /**
             * 配置端口映射时的终端节点端口。
             * 您最多可以输入5个端口映射中的终端节点端口。
             * >- 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
             * >- 仅为HTTP或HTTPS协议的智能路由类型监听创建终端节点组时才支持创建端口映射关系。
             * @example `80`
             */
            EndpointPort: number;
        }[];
        /**
         * 是否使用TOA方式开启保持客户端源IP功能，取值：
         * - **true**：开启保持客户端源IP功能。
         * - **false**（默认值）：不开启保持客户端源IP功能。
         * 您最多可以配置10个该功能项。
         * >- 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
         * >- 仅当监听为TCP协议类型且终端节点后端服务部署在阿里云上时，支持配置为**true**。
         * >- **EnableClientIPPreservationToa**与**EnableClientIPPreservationProxyProtocol**不能同时为**true**。
         * @example `false`
         */
        EnableClientIPPreservationToa: boolean;
        /**
         * 是否使用ProxyProtocol方式保留客户端源IP。取值：
         * - **true**：使用ProxyProtocol方式保留客户端源IP。
         * - **false**（默认值）：不使用ProxyProtocol方式保留客户端源IP。
         * 您最多可以配置10个该功能项。
         * >- 仅当**Type**（监听路由类型）值为**Standard**（智能路由类型）时，支持配置智能路由类型监听的终端节点组和终端节点信息。
         * >- 仅当监听为TCP协议类型且终端节点后端服务部署在非阿里云上时，支持配置为**true**。
         * >- **EnableClientIPPreservationToa**与**EnableClientIPPreservationProxyProtocol**不能同时为**true**。
         * @example `false`
         */
        EnableClientIPPreservationProxyProtocol: boolean;
    }[];
    /**
     * 自定义路由类型监听的终端节点组配置信息。
     * 您最多可以配置5个该类型终端节点组。
     * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
     */
    "CustomRoutingEndpointGroupConfigurations"?: {
        /**
         * 自定义路由类型监听的终端节点组所属地域ID。
         * 您最多可以输入5个终端节点组地域ID。
         * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
         * @example `cn-hangzhou`
         */
        EndpointGroupRegion: string;
        /**
         * 自定义路由类型监听的终端节点组名称。
         * 名称长度为1~128个字符，以大小写字母或中文开头，可包含数字、半角句号（.）下划线（_）和短划线（-）。
         * 最多可以输入5个终端节点组名称。
         * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
         * @example `test`
         */
        Name: string;
        /**
         * 自定义路由类型监听的终端节点组的描述信息。
         * 描述长度最大200字符，不能包含`http://`和`https://`字符。
         * 最多可以输入5个终端节点组的描述信息。
         * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
         * @example `test`
         */
        Description: string;
        /**
         * 自定义路由类型监听的终端节点组的映射信息配置。
         * 您需要输入终端节点组后端服务端口范围和协议类型，输入信息与关联的监听端口范围将形成映射关系。
         * 自定义路由类型监听的每个终端节点组下，最多可输入20条映射端口范围和协议类型信息。
         * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
         */
        DestinationConfigurations: {
            /**
             * 自定义路由类型监听的终端节点组后端服务的协议类型。
             * 自定义路由类型监听的每个终端节点组映射端口范围和协议类型信息中，最多可以输入4个后端服务协议类型。
             * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
             */
            Protocols: string[];
            /**
             * 自定义路由类型监听的终端节点组后端服务起始端口。
             * 取值范围：**1**~**65499**，且需满足**FromPort**≤**ToPort**，即终端节点组后端服务起始端口需小于等于终端节点组后端服务结束端口。
             * 自定义路由类型监听的每个终端节点组下，最多可输入20条后端服务起始端口信息。
             * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
             * @example `80`
             */
            FromPort: number;
            /**
             * 自定义路由类型监听的终端节点组后端服务结束端口。
             * 取值范围：**1**~**65499**，且需满足**FromPort**≤**ToPort**，即终端节点组后端服务起始端口需小于等于终端节点组后端服务结束端口。
             * 自定义路由类型监听的每个终端节点组下，最多可输入20条后端服务结束端口信息。
             * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
             * @example `80`
             */
            ToPort: number;
        }[];
        /**
         * 自定义路由类型监听的终端节点信息。
         * 自定义路由类型监听的每个终端节点组下，最多可输入10个终端节点信息。
         * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
         */
        EndpointConfigurations: {
            /**
             * 自定义路由类型监听的终端节点后端服务类型。取值：
             *  **PrivateSubNet**（默认值）：私网CIDR。
             * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
             * @example `PrivateSubNet`
             */
            Type: string;
            /**
             * 自定义路由类型监听的终端节点交换机（vSwitch）实例名称。
             * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
             * @example `vsw-test01`
             */
            Endpoint: string;
            /**
             * 自定义路由类型监听的终端节点后端服务流量通行策略，取值：
             * - **DenyAll**（默认值）：拒绝所有访问流量访问指定后端服务。
             * - **AllowAll**：允许所有访问流量访问指定后端服务。
             * - **AllowCustom**：指定可以接收访问流量的通行目标。
             * 您需要指定该通信目标的IP地址和端口范围，端口范围输入为空时，表示支持该通行目标的所有端口。
             * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
             * @example `DenyAll`
             */
            TrafficToEndpointPolicy: string;
            /**
             * 自定义路由类型监听的终端节点流量通行目标配置。
             * 自定义路由类型监听的每个终端节点下，最多可输入20个通行目标。
             * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
             */
            PolicyConfigurations: {
                /**
                 * 指定可以接受访问流量的通行目标IP地址。
                 * 仅当**TrafficToEndpointPolicy**取值为**AllowCustom**时，该项生效。
                 * 自定义路由类型监听的每个终端节点下，最多可输入20个通行目标IP地址。
                 * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
                 * @example `10.0.XX.XX`
                 */
                Address: string;
                /**
                 * 指定可以接受访问流量的通行目标端口范围。该端口范围必须属于终端节点组后端服务端口范围。
                 * 输入为空时，表示支持该通行目标的所有端口。
                 * 仅当**TrafficToEndpointPolicy**（流量通行策略）取值为**AllowCustom**（指定可接受访问流量的通行目标）时，该项生效。
                 * 自定义路由类型监听的每个终端节点下，最多可输入20个通行目标的端口范围，每个通行目标最多可输入5个端口范围。
                 * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
                 */
                PortRanges: {
                    /**
                     * 指定可以接受访问流量的通行目标的起始端口。该端口取值必须属于终端节点组后端服务端口范围。
                     * 仅当**TrafficToEndpointPolicy**（流量通行策略）取值为**AllowCustom**（指定可接受访问流量的通行目标）时，该项生效。
                     * 自定义路由类型监听的每个终端节点下，最多可输入20个通行目标的端口范围，每个通行目标最多可输入5个起始端口。
                     * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
                     * @example `80`
                     */
                    FromPort: number;
                    /**
                     * 指定可以接受访问流量的通行目标的结束端口。该端口取值必须属于终端节点组后端服务端口范围。
                     * 仅当**TrafficToEndpointPolicy**（流量通行策略）取值为**AllowCustom**（指定可接受访问流量的通行目标）时，该项生效。
                     * 自定义路由类型监听的每个终端节点下，最多可输入20个通行目标的端口范围，每个通行目标最多可输入5个结束端口。
                     * > 仅当**Type**（监听路由类型）值为**CustomRouting**（自定义路由类型）时，支持配置自定义路由类型监听的终端节点组和终端节点信息。
                     * @example `80`
                     */
                    ToPort: number;
                }[];
            }[];
        }[];
    }[];
    /**
     * 连接空闲超时时间。单位：秒。
     * - TCP：10-900s，默认900s
     * - UDP：10-20s ，默认20s
     * - HTTP/HTTPS：1-60秒，默认15s
     * @example `900`
     */
    "IdleTimeout"?: number;
    /**
     * HTTP/HTTPS的连接请求超时时间。单位：秒。
     * 可选：1-180秒，默认60s。
     * >仅对Protocol（网络传输协议类型）为HTTP或HTTPS的监听有效。如果在超时时间内后端服务器一直没有响应，全球加速将放弃等待，并给客户端返回HTTP 504错误码。
     * @example `15`
     */
    "RequestTimeout"?: number;
    /**
     * HTTP协议的最大版本，取值：
     * - **http3**：HTTP/3。
     * - **http2**（默认值）：HTTP/2。
     * - **http1.1**：HTTP/1.1。
     * > 仅HTTPS监听支持此参数。
     * @example `http2`
     */
    "HttpVersion"?: string;
}
