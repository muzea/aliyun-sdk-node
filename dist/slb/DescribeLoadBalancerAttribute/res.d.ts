export interface DescribeLoadBalancerAttributeResponse {
    /**
     * 传统型负载均衡私网实例的专有网络ID。
     * @example `vpc-25dvzy9f8****`
     */
    VpcId: string;
    Tags: {
        /**
         * 标签列表。
         */
        Tag: {
            /**
             * 实例的标签键。N的取值范围：**1**~**20**。一旦输入该值，则不允许为空字符串。
             * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
             * @example `test`
             */
            TagKey: string;
            /**
             * 实例的标签值。N的取值范围：**1**~**20**。一旦输入该值，可以为空字符串。
             * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
             * @example `value`
             */
            TagValue: string;
        }[];
    };
    /**
     * 传统型负载均衡实例创建时间戳。
     * @example `1504147745000`
     */
    CreateTimeStamp: number;
    /**
     * 传统型负载均衡实例的创建时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
     * @example `2017-08-31T02:49:05Z`
     */
    CreateTime: string;
    /**
     * 传统型负载均衡实例的ID。
     * @example `lb-bp1b6c719dfa08ex****`
     */
    LoadBalancerId: string;
    /**
     * 传统型负载均衡实例付费类型。取值：
     * <props="china">- **PrePay**：包年包月。</props>
     * <props="china">- **PayOnDemand**（默认值）：按量付费。</props>
     * <props="intl">- **PayOnDemand**（默认值）：按量付费。</props>
     * @example `PayOnDemand`
     */
    PayType: string;
    /**
     * 传统型负载均衡实例的地址类型。
     * @example `internet`
     */
    AddressType: string;
    /**
     * 传统型负载均衡实例的网络类型。
     * @example `vpc`
     */
    NetworkType: string;
    /**
     * IP版本。取值：**ipv4**或**ipv6**。
     * @example `ipv4`
     */
    AddressIPVersion: string;
    /**
     * 自动续费周期，取值：**Year**或**Month**（默认值）。
     * >该参数仅适用于中国站包年包月实例，即**PayType**的参数值为**PrePay**且**RenewalStatus**为**AutoRenewal**时有效。
     * @example `Month`
     */
    RenewalCycUnit: string;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF34B540710`
     */
    RequestId: string;
    /**
     * 按带宽计费的公网型实例的带宽峰值。
     * @example `5`
     */
    Bandwidth: number;
    /**
     * 传统型负载均衡实例的名称。
     * @example `lb-instance-test`
     */
    LoadBalancerName: string;
    /**
     * 传统型负载均衡实例的服务地址。
     * @example `42.XX.XX.6`
     */
    Address: string;
    /**
     * 传统型负载均衡实例的备可用区ID。
     * @example `cn-hangzhou-d`
     */
    SlaveZoneId: string;
    /**
     * 传统型负载均衡实例结束时间戳。
     * @example `3249380160000`
     */
    EndTimeStamp: number;
    /**
     * 传统型负载均衡实例的主可用区ID。
     * @example `cn-hangzhou-b`
     */
    MasterZoneId: string;
    /**
     * 传统型负载均衡实例的性能规格。
     * @example `slb.s1.small`
     */
    LoadBalancerSpec: string;
    /**
     * 释放时间的时间戳。
     * @example `1513947075000`
     */
    AutoReleaseTime: number;
    /**
     * 设置修改保护状态的原因，长度为1~80个字符，必须以字母或中文开头，支持数字、半角句号（.）、下划线（_）和短划线（-）。
     * > 仅在**ModificationProtectionStatus**为**ConsoleProtection**时有效。
     * @example `实例业务保障期`
     */
    ModificationProtectionReason: string;
    /**
     * 传统型负载均衡实例所在地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 传统型负载均衡修改保护状态：
     * - **NonProtection**：不限制修改保护，设置后会清空之前设置的**ModificationProtectionReason**。
     * - **ConsoleProtection**：实例控制台修改保护状态。
     * > 当取值为**ConsoleProtection**，即开启修改保护后，用户不能通过负载均衡控制台修改实例配置，但可以通过调用API修改实例配置。
     * @example `ConsoleProtection`
     */
    ModificationProtectionStatus: string;
    /**
     * 传统型负载均衡实例结束时间。
     * @example `2022-09-08T16:00:00Z`
     */
    EndTime: string;
    /**
     * 私网实例的交换机ID。
     * @example `vsw-255ecrwq5****`
     */
    VSwitchId: string;
    /**
     * 传统型负载均衡实例状态：
     * - **inactive**：实例已停止，此状态的实例监听不会再转发流量。
     * - **active**：实例运行中，实例创建后，默认状态为**active**。
     * - **locked**：实例已锁定，实例已经欠费或被阿里云锁定。
     *
     * @example `active`
     */
    LoadBalancerStatus: string;
    /**
     * 企业资源组ID。
     * @example `rg-atstuj3rtop****`
     */
    ResourceGroupId: string;
    /**
     * 公网类型实例付费方式。取值：
     * - **paybytraffic**：按使用流量计费。
     * - **paybybandwidth**：按固定带宽计费。
     * @example `paybytraffic`
     */
    InternetChargeType: string;
    /**
     * 是否开启实例删除保护。
     * 取值：**on**或**off**。
     * @example `off`
     */
    DeleteProtection: string;
    /**
     * 传统型负载均衡实例所属的地域别名。
     * @example `cn-hangzhou`
     */
    RegionIdAlias: string;
    /**
     * 续费状态，取值：
     * - **AutoRenewal**：自动续费。
     * - **Normal**：非自动续费，您需要自行续费负载均衡实例。
     * - **NotRenewal**：不再续费。返回该值后，系统不再发送到期提醒，只在到期前第三天发送不续费提醒。
     * > 该参数仅适用于中国站包年包月实例，即**PayType**的参数值为**PrePay**时有效。
     * @example `AutoRenewal`
     */
    RenewalStatus: string;
    /**
     * 自动续费时长，仅在**RenewalStatus**为**AutoRenewal**时有效。
     * - **RenewalCycUnit**为**Year**时，取值：**1~5**。
     * - **RenewalCycUnit**为**Month**时，取值：**1~9**。
     * > 该参数仅适用于中国站包年包月实例，即**PayType**的参数值为**PrePay**时有效。
     * @example `1`
     */
    RenewalDuration: number;
    ListenerPorts: {
        /**
         * 传统型负载均衡实例前端使用的端口。
         */
        ListenerPort: number[];
    };
    ListenerPortsAndProtocal: {
        /**
         * 监听端口或协议。
         */
        ListenerPortAndProtocal: {
            /**
             * 传统型负载均衡实例前端使用的协议。
             * @example `http`
             */
            ListenerProtocal: string;
            /**
             * 实例前端使用的端口。
             * @example `443`
             */
            ListenerPort: number;
        }[];
    };
    ListenerPortsAndProtocol: {
        /**
         * 实例前端使用的端口和协议。
         */
        ListenerPortAndProtocol: {
            /**
             * 实例前端使用的端口。
             * @example `80`
             */
            ListenerPort: number;
            /**
             * 实例前端使用的协议。
             * @example `https`
             */
            ListenerProtocol: string;
            /**
             * 是否启用监听转发。
             * @example `on`
             */
            ListenerForward: string;
            /**
             * 监听端口和协议描述。
             * @example `监听描述`
             */
            Description: string;
            /**
             * 转发到的目的监听端口，必须是已经存在的HTTPS监听端口。
             * @example `443`
             */
            ForwardPort: number;
        }[];
    };
    BackendServers: {
        /**
         * 实例的后端服务器列表。
         */
        BackendServer: {
            /**
             * 后端服务器类型。
             * ecs：ECS实例（默认）。
             * eni：弹性网卡实例。
             * eci：弹性容器实例。
             * @example `ecs`
             */
            Type: string;
            /**
             * 后端服务器的权重。
             * @example `90`
             */
            Weight: number;
            /**
             * 后端服务器描述。
             * > 若用户未设置**Description**，则该参数不返回。
             * @example `用来接收转发请求的后端服务器`
             */
            Description: string;
            /**
             * ENI或ECI的实例ID。
             * @example `192.XX.XX.11`
             */
            ServerIp: string;
            /**
             * 后端服务器实例ID。
             * @example `i-2zej4lxhjoq1icu*****`
             */
            ServerId: string;
        }[];
    };
    /**
     * 实例计费方式。取值：
     * - **PayBySpec**：按规格计费。
     * - **PayByCLCU**：按使用量计费。
     * @example `PayBySpec`
     */
    InstanceChargeType: string;
}
