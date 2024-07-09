export interface AddControlPolicyRequest {
    /**
     * 访问者源IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 访问控制策略中设置的流量通过云防火墙的方式。取值：
     * - **accept**：放行
     * - **drop**：拒绝
     * - **log**：观察
     * @example `accept`
     */
    "AclAction": string;
    /**
     * 访问控制策略支持的应用类型。取值：
     * - **FTP**
     * - **HTTP**
     * - **HTTPS**
     * - **Memcache**
     * - **MongoDB**
     * - **MQTT**
     * - **MySQL**
     * - **RDP**
     * - **Redis**
     * - **SMTP**
     * - **SMTPS**
     * - **SSH**
     * - **SSL_No_Cert**
     * - **SSL**
     * - **VNC**
     * - **ANY**（表示所有类型的应用）
     * > 支持的应用类型取值与协议类型（Proto）取值存在依赖关系。Proto为TCP协议时，ApplicationName支持选择以上所有应用类型中的任意一种；Proto为UDP、ICMP或ANY协议类型时，ApplicationName仅支持选择ANY。ApplicationNameList和ApplicationName二选一，必须传其中一个，不能同时为空。
     * @example `ANY`
     */
    "ApplicationName"?: string;
    /**
     * 访问控制策略的描述信息。
     * @example `放行流量`
     */
    "Description": string;
    /**
     * 访问控制策略中流量访问的目的端口。取值：
     * - 当协议类型为ICMP时，DestPort取值为空。
     *
     * > 协议类型为ICMP时，不支持对目的端口进行访问控制。
     * - 当协议类型为TCP、UDP或ANY时，并且目的端口类型（DestPortType）为group时，DestPort取值为空。
     * > 访问控制策略目的端口类型选择group（目的端口地址簿）时，您无需设置具体的目的端口号。需要该访问控制策略管控的所有端口会包含在目的端口地址簿中。
     * - 当协议类型为TCP、UDP或ANY时，并且目的端口类型（DestPortType）为port时，DestPort取值为目的端口号。
     * @example `80`
     */
    "DestPort"?: string;
    /**
     * 访问控制策略中的目的地址段。
     * 取值：
     * - 当DestinationType为net时，Destination为目的CIDR。
     *
     *   例如：1.2.XX.XX/24
     * - 当DestinationType为group时，Destination为目的地址簿名称。
     *   例如：db_group
     * - 当DestinationType为domain时，Destination为目的域名。
     *   例如：*.aliyuncs.com
     * - 当DestinationType为location时，Destination为目的区域。
     *   例如： \["BJ11", "ZB"\]
     * @example `192.0.XX.XX/24`
     */
    "Destination": string;
    /**
     * 访问控制策略中的目的地址类型。取值：
     * - **net**：目的网段（CIDR地址）
     * - **group**：目的地址簿
     * - **domain**：目的域名
     * - **location**：目的区域
     * @example `net`
     */
    "DestinationType": string;
    /**
     * 访问控制策略的流量方向。取值：
     * - **in**：外对内流量访问控制
     * - **out**：内对外流量访问控制
     * @example `in`
     */
    "Direction": string;
    /**
     * 访问控制策略中流量访问的协议类型。取值：
     * - **ANY**（任何协议）
     * - **TCP**
     * - **UDP**
     * - **ICMP**
     * @example `ANY`
     */
    "Proto": string;
    /**
     * 访问控制策略中的源地址。取值：
     * - 当SourceType为net时，Source为源CIDR地址。
     *   例如：1.1.XX.XX/24
     * - 当SourceType为group时，Source为源地址簿名称。
     *   例如：db_group
     * - 当SourceType为location时，Source为源区域。
     *   例如\["BJ11", "ZB"\]
     * @example `192.0.XX.XX/24`
     */
    "Source": string;
    /**
     * 访问控制策略中的源地址类型。取值：
     * - **net**：源网段（CIDR）
     * - **group**：源地址簿
     * - **location**：源区域
     * @example `net`
     */
    "SourceType": string;
    /**
     * 访问控制策略生效的优先级。优先级数字从1开始顺序递增，优先级数字越小，优先级越高。
     * @example `1`
     */
    "NewOrder": string;
    /**
     * 访问控制策略中流量访问的目的端口类型。
     * 取值：
     * - **port**：端口
     * - **group**：端口地址簿
     * @example `port`
     */
    "DestPortType"?: string;
    /**
     * 访问控制策略中访问流量的目的端口地址簿名称。
     * > DestPortType设置为group时，您需要设置目的端口地址簿名称。
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
     * 支持的IP地址版本。
     * 取值：
     * - **4**：表示IPv4地址
     * - **6**：表示IPv6地址
     * @example `6`
     */
    "IpVersion"?: string;
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
