export interface UpdateEndpointGroupRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 终端节点组ID。
     * @example `epg-bp1dmlohjjz4kqaun****`
     */
    "EndpointGroupId": string;
    /**
     * 终端节点组的名称。
     * 名称长度为1~128个字符，以大小写字母或中文开头，可包含数字、半角句号（.）下划线（_）和短划线（-）。
     * @example `group1`
     */
    "Name"?: string;
    /**
     * 终端节点组描述信息。
     * 描述长度最大200字符，不能以`http://`和`https://`开头。
     * @example `EndpointGroup`
     */
    "Description"?: string;
    /**
     * 终端节点组所属的地域ID。
     * @example `cn-hangzhou`
     */
    "EndpointGroupRegion": string;
    /**
     * 监听有多个终端节点组时的权重。
     * @example `20`
     */
    "TrafficPercentage"?: number;
    /**
     * 健康检查的时间间隔。单位：秒。取值范围：**1**-**50**。
     * @example `3`
     */
    "HealthCheckIntervalSeconds"?: number;
    /**
     * 健康检查路径。
     * @example `/healthcheck`
     */
    "HealthCheckPath"?: string;
    /**
     * 健康检查的端口。取值范围：**1**~**65535**。
     * @example `20`
     */
    "HealthCheckPort"?: number;
    /**
     * 健康检查的协议。取值：
     * - **tcp**或**TCP**：TCP协议。
     * - **http**或**HTTP**：HTTP协议。
     * - **https**或**HTTPS**：HTTPS协议。
     * @example `tcp`
     */
    "HealthCheckProtocol"?: string;
    /**
     * 针对健康检查状态变化所需要的连续健康检查次数，即从成功到失败的连续健康检查失败次数或从失败到成功的连续健康检查成功次数。
     * 取值范围：**2**~**10**。
     * @example `3`
     */
    "ThresholdCount"?: number;
    /**
     * 终端节点配置信息。
     */
    "EndpointConfigurations"?: {
        /**
         * 终端节点类型，取值：
         * - **Domain**：自定义域名。
         * - **Ip**：自定义IP。
         * - **PublicIp**：阿里云公网IP。
         * - **ECS**：阿里云ECS实例。
         * - **SLB**：阿里云SLB实例。
         * - **ALB**：阿里云ALB实例。
         * - **OSS**：阿里云OSS实例。
         * - **ENI**：阿里云弹性网卡。
         * - **NLB**：阿里云NLB实例。
         * > - 终端节点类型取值为**ECS**、**ENI**、**SLB**、**ALB**或**NLB**时，如果服务关联角色不存在，系统会自动创建一个名称为AliyunServiceRoleForGaVpcEndpoint的服务关联角色。
         * > - 终端节点类型取值为**ALB**时，如果服务关联角色不存在，系统会自动创建一个名称为AliyunServiceRoleForGaAlb的服务关联角色。
         * > - 终端节点类型取值为**OSS**时，如果服务关联角色不存在，系统会自动创建一个名称为AliyunServiceRoleForGaOss的服务关联角色。
         * > - 终端节点类型取值为**NLB**时，如果服务关联角色不存在，系统会自动创建一个名称为AliyunServiceRoleForGaNlb的服务关联角色。
         *  > > 更多信息，请参见[服务关联角色](~~178360~~)。
         * @example `Ip`
         */
        Type: string;
        /**
         * 是否开启保持客户端源IP功能，取值：
         * - **true**：开启保持客户端源IP功能。
         * - **false**（默认值）：不开启保持客户端源IP功能。
         * @example `false`
         */
        EnableClientIPPreservation: boolean;
        /**
         * 终端节点的权重。
         * 取值范围：**0**~**255**。
         * > 如果某个终端节点的权重设置为0，全球加速将终止向该终端节点分发流量，请您谨慎操作。
         * @example `20`
         */
        Weight: number;
        /**
         * 是否使用ProxyProtocol方式开启保持客户端源IP功能，取值：
         * - **true**：开启保持客户端源IP功能。
         * - **false**（默认值）：不开启保持客户端源IP功能。
         */
        EnableProxyProtocol: boolean;
        /**
         * 根据Type（终端节点类型）输入对应的IP、域名或实例ID。
         * @example `120.XX.XX.21`
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
     * 后端服务协议。取值：
     * - **HTTP**
     * - **HTTPS**
     * > - 仅为HTTP或HTTPS协议的监听实例创建终端节点组时才支持配置该项。
     * > - 对于HTTP协议的监听实例，后端服务协议支持且仅支持HTTP。
     * @example `HTTP`
     */
    "EndpointRequestProtocol"?: string;
    /**
     * 端口映射关系。
     */
    "PortOverrides"?: {
        /**
         * 配置端口映射中的监听端口。
         * > - 仅为HTTP或HTTPS协议的监听实例配置终端节点组时才支持配置端口映射关系。
         * > - 端口映射中的监听端口必须与当前监听的端口一致。
         * @example `443`
         */
        ListenerPort: number;
        /**
         * 配置端口映射中的终端节点端口。
         * @example `80`
         */
        EndpointPort: number;
    }[];
    /**
     * 是否开启健康检查。取值：
     * - **true**（默认值）：开启健康检查。
     * - **false**：关闭健康检查。
     * @example `true`
     */
    "HealthCheckEnabled"?: boolean;
}
