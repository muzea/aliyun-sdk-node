export interface CreateVpcFirewallControlPolicyRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙访问控制策略中设置的流量通过云防火墙的方式（动作）。取值：
     * - **accept**：放行
     * - **drop**：拒绝
     * - **log**：观察
     * @example `accept`
     */
    "AclAction": string;
    /**
     * VPC边界防火墙访问控制策略支持的应用类型。取值：
     * - **FTP**
     * - **HTTP**
     * - **HTTPS**
     * - **MySQL**
     * - **SMTP**
     * - **SMTPS**
     * - **RDP**
     * - **VNC**
     * - **SSH**
     * - **Redis**
     * - **MQTT**
     * - **MongoDB**
     * - **Memcache**
     * - **SSL**
     * - **ANY**（表示支持所有的应用类型）
     * @example `HTTP`
     */
    "ApplicationName"?: string;
    /**
     * VPC边界防火墙访问控制策略的描述信息。
     * @example `test`
     */
    "Description": string;
    /**
     * VPC边界防火墙访问控制策略中流量访问的目的端口。
     * > 当**DestPortType**为`port`时，设置该参数。
     * @example `80`
     */
    "DestPort"?: string;
    /**
     * VPC边界防火墙访问控制策略中流量访问的目的地址。取值：
     * - 当**DestinationType**为`net`时，**Destination**为目的CIDR地址。
     * - 当**DestinationType**为`group`时，**Destination**为目的地址簿名称。
     * - 当**DestinationType**为`domain`时，**Destination**为目的域名。
     * @example `10.2.XX.XX/24`
     */
    "Destination": string;
    /**
     * VPC边界防火墙访问控制策略中的目的地址类型。取值：
     * - **net**：目的网段（CIDR）
     * - **group**：目的地址簿
     * - **domain**：目的域名
     * @example `net`
     */
    "DestinationType": string;
    /**
     * VPC边界防火墙访问控制策略组ID。
     * -  当VPC边界防火墙防护通过云企业网连接的两个VPC之间的流量时，策略组ID使用云企业网实例ID。
     *
     * - 当VPC边界防火墙防护通过高速通道连接的两个VPC之间的流量时，策略组ID使用VPC边界防火墙实例ID。
     * > 您可以调用[DescribeVpcFirewallAclGroupList](~~159760~~)接口获取该ID。
     * @example `vfw-a42bbb7b887148c9****`
     */
    "VpcFirewallId": string;
    /**
     * VPC边界防火墙访问控制策略中流量访问的安全协议类型。取值：
     * - **ANY**（不确定具体协议类型时可设置为ANY）
     * - **TCP**
     * - **UDP**
     * - **ICMP**
     * @example `TCP`
     */
    "Proto": string;
    /**
     * VPC边界防火墙访问控制策略中的源地址。
     * - 当SourceType为`net`时，Source为源CIDR。
     * - 当SourceType为`group`时，Source为源地址簿名称。
     * @example `10.2.XX.XX/24`
     */
    "Source": string;
    /**
     * VPC边界防火墙访问控制策略中的源地址类型。取值：
     * - **net**：源网段（CIDR）
     * - **group**：源地址簿
     * @example `net`
     */
    "SourceType": string;
    /**
     * VPC边界防火墙访问控制策略生效的优先级。
     * 优先级数字从1开始顺序递增，优先级数字越小，优先级越高。
     * @example `1`
     */
    "NewOrder": string;
    /**
     * VPC边界防火墙访问控制策略中流量访问的目的端口类型。取值：
     * - **port**：端口
     * - **group**：端口地址簿
     * @example `port`
     */
    "DestPortType"?: string;
    /**
     * VPC边界防火墙访问控制策略中流量访问的目的端口地址簿名称。
     * > 当**DestPortType**为`group`时，设置该参数。
     * @example `my_port_group`
     */
    "DestPortGroup"?: string;
    /**
     * 当前阿里云账号的成员账号UID。
     * @example `258039427902****`
     */
    "MemberUid"?: string;
    /**
     * 访问控制策略的启用状态。策略创建后默认启用该策略。取值：
     * - **true**：启用访问控制策略
     * - **false**：不启用访问控制策略
     * @example `true`
     */
    "Release"?: string;
    /**
     * 访问控制策略支持的应用类型列表。
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
