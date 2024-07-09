export interface ModifyInstanceAttributeRequest {
    /**
     * 实例ID。
     * @example `i-bp67acfmxazb4ph****`
     */
    "InstanceId": string;
    /**
     * 实例的密码。支持长度为8~30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：
     * ```
     * ()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
     * ```
     * 其中，Windows实例不能以斜线号（/）为密码首字符。
     * > 如果传入`Password`参数，建议您使用HTTPS协议发送请求，避免密码泄露。
     * @example `Test123456`
     */
    "Password"?: string;
    /**
     * 操作系统的主机名。您需要注意：
     * - 修改主机名时，实例不能处于创建中（`Pending`）或启动中（`Starting`）的状态，否则可能出现主机名以及`/etc/hosts`配置失效等情况。您可以调用[DescribeInstances](~~25506~~)查询实例当前的状态信息。
     * - 修改主机名后，请调用[RebootInstance](~~25502~~)重启实例，使修改生效。
     * 不同操作系统主机名存在以下限制：
     * - Windows Server系统：长度为2-15个字符，允许使用大小写字母、数字或短划线（-）。不能以短划线（-）开头或结尾，不能连续使用短划线（-），也不能仅使用数字。
     * - 其他类型实例（Linux等）：长度为2-64个字符，允许使用半角句号（.）分隔字符成多段，每段允许使用大小写字母、数字或连字符（-），但不能连续使用半角句号（.）或短划线（-）。不能以半角句号（.）或短划线（-）开头或结尾。
     * @example `testHostName`
     */
    "HostName"?: string;
    /**
     * 实例名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testInstanceName`
     */
    "InstanceName"?: string;
    /**
     * 实例描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `testInstanceDescription`
     */
    "Description"?: string;
    /**
     * 实例自定义数据，需要以Base64编码。
     * 编码前，原始数据不能超过32 KB。建议不要明文传入敏感信息，例如密码和私钥等。如果必须传入敏感信息，建议您加密后再以Base64编码传入，在实例内部以同样的方式解密。
     * @example `ZWNobyBoZWxsbyBlY3Mh`
     */
    "UserData"?: string;
    /**
     * >该参数正在邀测中，暂不开放使用。
     * @example `hide`
     */
    "Recyclable"?: boolean;
    /**
     * 修改突发性能实例的运行模式。取值范围：
     * - Standard：标准模式。
     * - Unlimited：无性能约束模式。
     * 关于突发性能实例运行模式的更多信息，请参见[什么是突发性能实例](~~59977~~)。
     * @example `Standard`
     */
    "CreditSpecification"?: string;
    /**
     * 实例释放保护属性。指定是否支持通过控制台或API（[DeleteInstance](~~25507~~)）释放实例。
     * > 该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。
     * @example `false`
     */
    "DeletionProtection"?: boolean;
    /**
     * 主网卡队列数。
     * @example `8`
     */
    "NetworkInterfaceQueueNumber"?: number;
    /**
     * 实例重新加入的安全组列表。
     * - 安全组ID不能重复。
     * - 实例会离开当前的安全组，如需保留设置，您需要在列表中添加当前的安全组ID。
     * - 支持切换安全组类型，但设置的安全组列表中不能同时包含普通安全组和企业安全组。
     * - 安全组必须和实例属于同一个VPC。
     * - N的取值范围与实例能够加入安全组配额有关。更多信息，请参见[使用限制](~~25412#SecurityGroupQuota1~~)。
     * - 修改安全组后很快会生效于对应的实例，但可能有较小的延迟。
     * @example `sg-bp15ed6xe1yxeycg7o****`
     */
    "SecurityGroupIds"?: string[];
    /**
     * >该参数正在邀测中，暂不开放使用。
     */
    "RemoteConnectionOptions"?: {
        /**
         * >该参数正在邀测中，暂不开放使用。
         * @example `hide`
         */
        Password: string;
        /**
         * >该参数正在邀测中，暂不开放使用。
         * @example `hide`
         */
        Type: string;
    };
    /**
     * 实例MTU是否开启Jumbo frame通信模式，取值范围：
     * -true：开启。
     * -false：不开启。
     * 目前仅部分规格支持开启Jumbo frame。更多信息，请参见[ECS实例MTU](~~200512~~)。
     * @example `false`
     */
    "EnableJumboFrame"?: boolean;
    /**
     * 实例的Cpu拓扑类型。取值范围：
     * - ContinuousCoreToHTMapping：当选择`ContinuousCoreToHTMapping`时，实例的Cpu拓扑中，实例的同一个Core的HT是连续的。
     * - DiscreteCoreToHTMapping：当选择`DiscreteCoreToHTMapping`时，实例的同一个Core的HT是离散的。
     * 默认值：无。
     * >- 仅部分实例规格族支持使用本参数，具体支持实例规格族请参见[查看和修改CPU拓扑结构](~~2636059~~)。
     * - 使用该参数时实例必须为已停止（`Stopped`）状态。
     * @example `DiscreteCoreToHTMapping`
     */
    "CpuOptions.TopologyType"?: string;
}
