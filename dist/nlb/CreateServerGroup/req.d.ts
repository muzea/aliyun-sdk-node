export interface CreateServerGroupRequest {
    /**
     * 服务器组类型。取值：
     * - **Instance**（默认值）：服务器类型，该类型服务器组支持添加**Ecs**、**Ens**、**Eci**类型实例。
     * - **Ip**：IP地址类型，该类型服务器组支持直接添加IP地址类型的后端服务器。
     * @example `Instance`
     */
    "ServerGroupType"?: string;
    /**
     * 服务器组名称。
     * 长度为2~128个字符，必须以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `NLB_ServerGroup`
     */
    "ServerGroupName": string;
    /**
     * 协议版本。取值：
     * - **ipv4**（默认值）：IPv4类型。
     * - **DualStack**：双栈类型。
     * @example `ipv4`
     */
    "AddressIPVersion"?: string;
    /**
     * 转发到后端服务器使用的通信协议。取值：
     * - **TCP**（默认值）
     * - **UDP**
     * - **TCPSSL**
     * @example `TCP`
     */
    "Protocol"?: string;
    /**
     * 服务器组所在VPC的ID。
     * > 如果**ServerGroupType**取值为**Instance**时，只有该VPC下的服务器可以加入到该服务器组。
     * @example `vpc-bp15zckdt37pq72zv****`
     */
    "VpcId": string;
    /**
     * 是否开启全端口转发。取值：
     * - **true**：开启。
     * - **false**（默认值）：关闭。
     * @example `false`
     */
    "AnyPortEnabled"?: boolean;
    /**
     * 是否开启连接优雅中断。取值：
     * - **true**：开启。
     * - **false**（默认值）：关闭。
     * @example `false`
     */
    "ConnectionDrainEnabled"?: boolean;
    /**
     * 设置连接优雅中断超时时间。单位：秒。
     * 取值范围：**0**~**900**。
     * @example `10`
     */
    "ConnectionDrainTimeout"?: number;
    /**
     * 调度算法。取值：
     * - **Wrr**（默认值）：加权轮询，权重值越高的后端服务器，被轮询到的概率也越高。
     * - **Wlc**：加权最小连接数，除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。当权重值相同时，当前连接数越小的后端服务器被轮询到的概率也越高。
     * - **rr**：轮询，按照访问顺序依次将外部请求分发到后端服务器。
     * - **sch**：源IP哈希：相同的源地址会调度到相同的后端服务器。
     * - **tch**：四元组哈希，基于四元组（源IP、目的IP、源端口和目的端口）的一致性哈希，相同的流会调度到相同的后端服务器。
     * - **qch**：QUIC ID哈希，支持将同一个QUIC ID的请求哈希到同一台后端服务器上。
     * >  仅后端协议为UDP时，支持选择QUIC ID哈希。
     * @example `Wrr`
     */
    "Scheduler"?: string;
    /**
     * 是否开启客户端地址保持功能。取值：
     * - **true**（默认值）：开启。
     * - **false**：关闭。
     * @example `true`
     */
    "PreserveClientIpEnabled"?: boolean;
    /**
     * 健康检查相关配置。
     */
    "HealthCheckConfig"?: {
        /**
         * 是否开启健康检查，取值：
         * - **true**（默认值）：开启。
         * - **false**：关闭。
         * @example `true`
         */
        HealthCheckEnabled: boolean;
        /**
         * 健康检查协议。取值：**TCP**（默认值）或**HTTP**。
         * @example `TCP`
         */
        HealthCheckType: string;
        /**
         * 健康检查的后端服务器的端口。
         * 取值范围： **0**~**65535**。
         * 默认值：**0**，表示使用后端服务器的端口进行健康检查。
         * @example `0`
         */
        HealthCheckConnectPort: number;
        /**
         * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**失败**判定为**成功**。
         * 取值范围：**2**~**10**。
         * 默认值：**2**。
         * @example `2`
         */
        HealthyThreshold: number;
        /**
         * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**成功**判定为**失败**。
         * 取值范围：**2**~**10**。
         * 默认值：**2**。
         * @example `2`
         */
        UnhealthyThreshold: number;
        /**
         * 健康检查响应的最大超时时间。单位：秒。
         * 取值范围：**1**~**300**。
         * 默认值：**5**。
         * @example `5`
         */
        HealthCheckConnectTimeout: number;
        /**
         * 健康检查的时间间隔。单位：秒。
         * 取值范围：**1**~**50**。
         * 默认值：**10**。
         * @example `10`
         */
        HealthCheckInterval: number;
        /**
         * 用于健康检查的域名。取值：
         * - **$SERVER_IP**：使用后端服务器内网IP。
         * - **domain**：指定特定域名。长度限制1~80个字符，只能使用大小写字母、数字、短划线（-）、半角句号（.）。
         * > 仅**HealthCheckType**为**HTTP**时，该参数生效。
         * @example `$SERVER_IP`
         */
        HealthCheckDomain: string;
        /**
         * 健康检查路径。
         * 长度为1~80个字符，只能使用大小写英文字母、数字、字符`-/.%?#&`。 必须以正斜线（/）开头。
         * > 仅**HealthCheckType**为**HTTP**时，该参数生效。
         * @example `/test/index.html`
         */
        HealthCheckUrl: string;
        /**
         * 健康状态返回码，多个状态码用半角逗号（,）分隔。
         * 取值：**http\_2xx**（默认值）、**http\_3xx**、**http\_4xx**和**http\_5xx**。
         * > 仅**HealthCheckType**为**HTTP**时，该参数生效。
         */
        HealthCheckHttpCode: string[];
        /**
         * 健康检查方法，取值：**GET**（默认值）或**HEAD**。
         * > 仅**HealthCheckType**为**HTTP**时，该参数生效。
         * @example `GET`
         */
        HttpCheckMethod: string;
        HealthCheckReq: string;
        HealthCheckExp: string;
    };
    /**
     * 服务器组所属的资源组ID。
     * @example `rg-atstuj3rtop****`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建服务器组。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 网络型负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~443657~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。支持字符包括字母、数字、下划线 (_)、点 (.)、冒号 (:)、斜线 (/)、等号 (=)、加号 (+)、减号 (-)、@符号 (@) 。
         * 一次调用最多支持添加20个标签。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。支持字符包括字母、数字、下划线 (_)、点 (.)、冒号 (:)、斜线 (/)、等号 (=)、加号 (+)、减号 (-)、@符号 (@) 。
         * 一次调用最多支持添加20个标签。
         * @example `product`
         */
        Value: string;
    }[];
}
