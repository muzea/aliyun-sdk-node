export interface ModifyControlPolicyRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 安全访问控制策略中流量通过云防火墙的方式。取值：
     * - **accept**：放行
     * - **drop**：拒绝
     * - **log**：观察
     * @example `accept`
     */
    "AclAction": string;
    /**
     * 安全访问控制策略支持的应用类型。支持的应用类型有以下几种：
     * - **ANY**
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
     * > **ANY**表示策略应用在所有类型的应用中。
     * > ApplicationNameList和ApplicationName二选一，必须传其中一个，不能同时为空。当ApplicationNameList和ApplicationName同时传值时，以ApplicationNameList为准。
     * @example `HTTP`
     */
    "ApplicationName"?: string;
    /**
     * 安全访问控制策略的描述信息。
     * @example `test`
     */
    "Description": string;
    /**
     * 安全访问控制策略中流量访问的目的端口。
     * @example `80`
     */
    "DestPort"?: string;
    /**
     * 安全访问控制策略中的目的地址。
     * - 当**DestinationType**为net时，**Destination**为目的CIDR。例如：1.2.XX.XX/24
     * - 当**DestinationType**为group时，**Destination**为目的地址簿名称。例如：db_group
     * - 当**DestinationType**为domain时，**Destination**为目的域名。例如：*.aliyuncs.com
     * - 当**DestinationType**为location时，**Destination**为目的区域（具体区域位置编码见后文）。例如： \["BJ11", "ZB"\]
     * @example `192.0.XX.XX/24`
     */
    "Destination": string;
    /**
     * 安全访问控制策略中的目的地址类型。取值：
     * - **net**：目的网段（CIDR）
     * - **group**：目的地址簿
     * - **domain**：目的域名
     * - **location**：目的区域
     * @example `net`
     */
    "DestinationType": string;
    /**
     * 安全访问控制策略的流量方向。取值：
     * - **in**：外对内流量访问控制
     * - **out**：内对外流量访问控制
     * @example `in`
     */
    "Direction": string;
    /**
     * 安全访问控制策略中流量访问的安全协议类型。支持的应用类型有以下几种：
     * - **ANY**
     * - **TCP**
     * - **UDP**
     * - **ICMP**
     * > **ANY**表示策略应用在所有类型的应用中。
     * > 流量方向为出向时，访问的目的地址为域名类型的威胁情报地址簿或云服务地址簿时，可选配置TCP/ANY协议。选择TCP时，应用可选HTTP/HTTPS/SMTP/SMTPS/SSL五种，选择ANY时，应用可选ANY。
     * @example `TCP`
     */
    "Proto": string;
    /**
     * 安全访问控制策略中的源地址。
     * - 当**SourceType**为net时，**Source**为源CIDR。例如：1.2.XX.XX/24
     * - 当**SourceType**为group时，**Source**为源地址簿名称。例如：db_group
     * - 当**SourceType**为location时，**Source**为源区域（具体区域位置编码见后文）。例如\["BJ11", "ZB"\]
     * @example `192.0.XX.XX/24`
     */
    "Source": string;
    /**
     * 安全访问控制策略的唯一标识ID。
     * > 修改安全访问控制策略，需要提供该策略的唯一标识ID，该ID可调用[DescribeControlPolicy](~~138866~~)接口获取。
     * @example `00281255-d220-4db1-8f4f-c4df221ad84c`
     */
    "AclUuid": string;
    /**
     * 安全访问控制策略中的源地址类型。取值：
     * -  **net**：源网段（CIDR）
     * - **group**：源地址簿
     * - **location**：源区域
     * @example `net`
     */
    "SourceType": string;
    /**
     * 安全访问控制策略中流量访问的目的端口类型。取值：
     * - **port**：端口
     * - **group**：端口地址簿
     * @example `port`
     */
    "DestPortType"?: string;
    /**
     * 安全访问控制策略中流量访问的目的端口地址簿名称。
     * @example `my_port_group`
     */
    "DestPortGroup"?: string;
    /**
     * 安全访问控制策略的状态。取值：
     * - true：策略开启状态
     * - false：策略关闭状态
     * @example `true`
     */
    "Release"?: string;
    /**
     * 应用名称列表。
     * > ApplicationNameList和ApplicationName二选一，必须传其中一个，不能同时为空。当ApplicationNameList和ApplicationName同时传值时，以ApplicationNameList为准。
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
