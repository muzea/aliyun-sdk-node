export interface ModifyVpcFirewallControlPolicyRequest {
    /**
     * 接收消息的语言类型。
     * 取值：
     * - **zh**：（默认）中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 安全访问控制策略中访问流量通过云防火墙的方式（动作）。
     * 取值：
     * - **accept**：放行
     * - **drop**：拒绝
     * - **log**：观察
     * @example `accept`
     */
    "AclAction": string;
    /**
     * 访问控制策略支持的应用类型。
     * 取值：
     * - ANY（表示查询所有类型的应用）
     * - FTP
     * - HTTP
     * - HTTPS
     * - MySQL
     * - SMTP
     * - SMTPS
     * - RDP
     * - VNC
     * - SSH
     * - Redis
     * - MQTT
     * - MongoDB
     * - Memcache
     * - SSL
     * @example `HTTP`
     */
    "ApplicationName"?: string;
    /**
     * 访问控制策略的描述信息。
     * @example `test`
     */
    "Description": string;
    /**
     * 访问控制策略中访问流量的目的端口。
     * @example `80`
     */
    "DestPort"?: string;
    /**
     * 访问控制策略中的目的地址。
     * - 当**DestinationType**为`net`时，Destination为目的CIDR地址。
     *
     *   例如：10.2.3.0/24
     * - 当**DestinationType**为`group`时，Destination为目的地址簿名称。
     *   例如：db_group
     * - 当**DestinationType**为`domain`时，Destination为目的域名。
     *   例如：*.aliyuncs.com
     * @example `10.2.X.X/XX`
     */
    "Destination": string;
    /**
     * 访问控制策略中的目的地址类型。
     * 取值：
     * - **net**：目的网段（CIDR地址）
     * - **group**：目的地址簿
     * - **domain**：目的域名
     * @example `net`
     */
    "DestinationType": string;
    /**
     * VPC边界防火墙的实例ID。您可调用[DescribeVpcFirewallAclGroupList](~~159760~~)接口获取该ID。
     * - VPC边界防火墙防护云企业网时，该参数值使用云企业网实例ID。
     *   例如cen-ervw0g12b5jbw*\*\*\*
     * - VPC边界防火墙防护高速通道时，该参数值使用VPC边界防火墙实例ID。
     *
     *   例如vfw-a42bbb7b887148c9*\*\*\*
     * @example `vfw-a42bbb7b887148c9****`
     */
    "VpcFirewallId": string;
    /**
     * 访问控制策略中流量访问的安全协议类型。
     * 取值：
     * - ANY（表示查询所有协议类型）
     * - TCP
     * - UDP
     * - ICMP
     * @example `TCP`
     */
    "Proto": string;
    /**
     * 访问控制策略中的源地址。
     * 取值：
     * - 当**SourceType**为`net`时，Source为源CIDR地址。
     *   例如：10.2.4.0/24
     * - 当**SourceType**为`group`时，Source为源地址簿名称。
     *   例如：db_group
     * @example `10.2.X.X/XX`
     */
    "Source": string;
    /**
     * 访问控制策略的唯一标识ID。
     * 修改访问控制策略时，需要提供该策略的唯一标识ID。您可调用[DescribeVpcFirewallControlPolicy](~~159758~~)接口获取该ID。
     * @example `00281255-d220-4db1-8f4f-c4df221a****`
     */
    "AclUuid": string;
    /**
     * 访问控制策略中的源地址类型。
     * 取值：
     * - **net**：源网段（CIDR地址）
     * - **group**：源地址簿
     * @example `net`
     */
    "SourceType": string;
    /**
     * 安全访问控制策略中访问流量的目的端口类型。
     * - **port**：端口
     * - **group**：端口地址簿
     * @example `port`
     */
    "DestPortType"?: string;
    /**
     * 访问控制策略中访问流量的目的端口地址簿名称。
     * @example `my_port_group`
     */
    "DestPortGroup"?: string;
    /**
     * 访问控制策略的启用状态。策略创建后默认启用该策略。取值：
     * - **true**：启用访问控制策略
     * - **false**：不启用访问控制策略
     * @example `true`
     */
    "Release"?: string;
    /**
     * 应用名称列表。
     */
    "ApplicationNameList"?: string[];
    /**
     * 访问控制策略的策略有效期的重复类型。取值：
     * - **Permanent**（默认）：总是
     * - **None**：指定单次时间
     * - **Daily**：每天
     * - **Weekly**：每周
     * - **Monthly**：每月
     * @example `Permanent`
     */
    "RepeatType"?: string;
    /**
     * 访问控制策略的策略有效期的重复日期集合。
     * - 当RepeatType为`Permanent`、`None`、`Daily`时，RepeatDays为空集合。
     *   例如：[]
     * - 当RepeatType为Weekly时，RepeatDays不能为空。
     *   例如：[0, 6]
     * > RepeatType设置为Weekly时，RepeatDays不允许重复。
     * - 当RepeatType为`Monthly`时，RepeatDays不能为空。
     *   例如：[1, 31]
     * > RepeatType设置为Monthly时，RepeatDays不允许重复。
     */
    "RepeatDays"?: number[];
    /**
     * 访问控制策略的策略有效期的重复开始时间。例如：08:00，必须为整点或半点时间，且小于重复结束时间至少半小时。
     * > 当RepeatType为Permanent、None时，RepeatStartTime为空。当RepeatType为Daily、Weekly、Monthly时，RepeatStartTime必须有值，您需要设置重复开始时间。
     * @example `08:00`
     */
    "RepeatStartTime"?: string;
    /**
     * 访问控制策略的策略有效期的重复结束时间。例如：23:30，必须为整点或半点时间，且大于重复开始时间至少半小时。
     * > 当RepeatType为Permanent、None时，RepeatEndTime为空。当RepeatType为Daily、Weekly、Monthly时，RepeatEndTime必须有值，您需要设置重复结束时间。
     * @example `23:30`
     */
    "RepeatEndTime"?: string;
    /**
     * 访问控制策略的策略有效期的开始时间。使用秒级时间戳格式表示。必须为整点或半点时间，且小于结束时间至少半小时。
     * > 当RepeatType为Permanent时，StartTime为空。当RepeatType为None、Daily、Weekly、Monthly时，StartTime必须有值，您需要设置开始时间。
     * @example `1694761200`
     */
    "StartTime"?: number;
    /**
     * 访问控制策略的策略有效期的结束时间。使用秒级时间戳格式表示。必须为整点或半点时间，且大于开始时间至少半小时。
     * > 当RepeatType为Permanent时，EndTime为空。当RepeatType为None、Daily、Weekly、Monthly时，EndTime必须有值，您需要设置结束时间。
     * @example `1694764800`
     */
    "EndTime"?: number;
}
