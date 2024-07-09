export interface DescribeVpcFirewallControlPolicyResponse {
    /**
     * VPC边界防火墙访问控制策略的总数量。
     * @example `20`
     */
    TotalCount: string;
    /**
     * 本次请求的ID。
     * @example `CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D`
     */
    RequestId: string;
    /**
     * VPC边界防火墙访问控制策略的信息。
     */
    Policys: {
        /**
         * VPC边界防火墙访问控制策略中的目的地址。取值：
         * - 当**DestinationType**为`net`时，Destination为目的CIDR地址。
         * - 当**DestinationType**为`domain`时，Destination为目的域名。
         * - 当**DestinationType**为`group`时，Destination为目的地址簿名称。
         * @example `192.0.XX.XX/24`
         */
        Destination: string;
        /**
         * VPC边界防火墙访问控制策略生效的优先级。
         * 优先级数字从1开始顺序递增，优先级数字越小，表示优先级越高。
         * @example `1`
         */
        Order: number;
        /**
         * VPC边界防火墙访问控制策略中访问流量的目的端口地址簿名称。
         * @example `my_port_group`
         */
        DestPortGroup: string;
        /**
         * VPC边界防火墙访问控制策略中源地址类型。取值：
         * - **net**：源CIDR地址
         * - **group**：源地址簿
         * @example `net`
         */
        SourceType: string;
        /**
         * VPC边界防火墙访问控制策略支持的应用类型，推荐使用ApplicationNameList。取值：
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
         * - **ANY**（表示查询访问控制策略所有的应用类型）
         * @example `HTTP`
         */
        ApplicationName: string;
        /**
         * VPC边界防火墙访问控制策略的唯一标识ID。
         * @example `4037fbf7-3e39-4634-92a4-d0155247****`
         */
        AclUuid: string;
        /**
         * VPC边界防火墙访问控制策略中访问流量的目的端口类型。取值：
         * - **port**：单个端口
         * - **group**：端口地址簿
         * @example `port`
         */
        DestPortType: string;
        /**
         * VPC边界防火墙访问控制策略中的访问源地址。取值：
         * - 当**SourceType**为`net`时，Source为访问源CIDR地址。
         * - 当**SourceType**为`group`时，Source为地址簿名称。
         * @example `192.0.XX.XX/24`
         */
        Source: string;
        /**
         * VPC边界防火墙访问控制策略中目的地址的类型。取值：
         * - **net**：目的CIDR地址
         * - **group**：目的地址簿
         * - **domain**：目的域名
         * @example `net`
         */
        DestinationType: string;
        /**
         * VPC边界防火墙访问控制策略的命中次数。
         * @example `100`
         */
        HitTimes: number;
        /**
         * VPC边界防火墙访问控制策略中访问流量的目的端口。
         * @example `80`
         */
        DestPort: string;
        /**
         * VPC边界防火墙访问控制策略的描述信息。
         * @example `test`
         */
        Description: string;
        /**
         * VPC边界防火墙访问控制策略中设置的访问流量通过云防火墙的方式（动作）。取值：
         * - **accept**：放行
         * - **drop**：拒绝
         * - **log**：观察
         * @example `accept`
         */
        AclAction: string;
        /**
         * VPC边界防火墙访问控制策略中设置访问流量的应用的ID。
         * @example `10**`
         */
        ApplicationId: string;
        /**
         * VPC边界防火墙访问控制策略中访问流量的协议类型。取值：
         * - **TCP**
         * - **UDP**
         * - **ICMP**
         * - **ANY**（表示查询所有协议类型）
         * @example `TCP`
         */
        Proto: string;
        /**
         * VPC边界防火墙访问控制策略中目的地址簿中的网段信息。
         */
        DestinationGroupCidrs: string[];
        /**
         * VPC边界防火墙访问控制策略中目的端口地址簿的详细信息。
         */
        DestPortGroupPorts: string[];
        /**
         * VPC边界防火墙访问控制策略中源地址簿的详细信息。
         */
        SourceGroupCidrs: string[];
        /**
         * 当前阿里云账号的成员账号UID。
         * @example `258039427902****`
         */
        MemberUid: string;
        /**
         * 访问控制策略的启用状态。策略创建后默认启用该策略。取值：
         * - **true**：启用访问控制策略
         * - **false**：不启用访问控制策略
         * @example `true`
         */
        Release: string;
        /**
         * 访问控制策略中的源地址簿类型。唯一取值： **ip**。表示IP地址簿，包含一个或多个IP地址段。
         * @example `ip`
         */
        SourceGroupType: string;
        /**
         * 访问控制策略中的目的地址簿类型。取值：
         * - **ip**：IP地址簿，包含一个或多个IP地址段。
         * - **domain**：域名地址簿，包含一个或多个域名地址。
         * @example `ip`
         */
        DestinationGroupType: string;
        /**
         * 最新命中时间戳。使用秒级时间戳格式表示。
         * @example `1579261141`
         */
        HitLastTime: number;
        /**
         * 修改策略的时间。使用秒级时间戳格式表示。
         * @example `1761062400`
         */
        ModifyTime: number;
        /**
         * 占用访问控制策略的规格数，即每条策略占用规格数的累加值。
         * 单条策略占用访问控制策略的规格数=访问源地址段个数 \* 目的地址个数（IP地址段个数或域名个数）\* 应用数 \* 端口段个数。
         * @example `10,000`
         */
        SpreadCnt: number;
        /**
         * 创建策略的时间。使用秒级时间戳格式表示。
         * @example `1761062400`
         */
        CreateTime: number;
        /**
         * 应用名称列表。
         */
        ApplicationNameList: string[];
        /**
         * 访问控制策略的策略有效期的重复类型。取值：
         * - **Permanent**（默认）：总是
         * - **None**：指定单次时间
         * - **Daily**：每天
         * - **Weekly**：每周
         * - **Monthly**：每月
         * @example `Permanent`
         */
        RepeatType: string;
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
        RepeatDays: number[];
        /**
         * 访问控制策略的策略有效期的重复开始时间。例如：08:00，必须为整点或半点时间，且小于重复结束时间至少半小时。
         * > 当RepeatType为Permanent、None时，RepeatStartTime为空。当RepeatType为Daily、Weekly、Monthly时，RepeatStartTime必须有值，您需要设置重复开始时间。
         * @example `08:00`
         */
        RepeatStartTime: string;
        /**
         * 访问控制策略的策略有效期的重复结束时间。例如：23:30，必须为整点或半点时间，且大于重复开始时间至少半小时。
         * > 当RepeatType为Permanent、None时，RepeatEndTime为空。当RepeatType为Daily、Weekly、Monthly时，RepeatEndTime必须有值，您需要设置重复结束时间。
         * @example `23:30`
         */
        RepeatEndTime: string;
        /**
         * 访问控制策略的策略有效期的开始时间。使用秒级时间戳格式表示。必须为整点或半点时间，且小于结束时间至少半小时。
         * > 当RepeatType为Permanent时，StartTime为空。当RepeatType为None、Daily、Weekly、Monthly时，StartTime必须有值，您需要设置开始时间。
         * @example `1694761200`
         */
        StartTime: number;
        /**
         * 访问控制策略的策略有效期的结束时间。使用秒级时间戳格式表示。必须为整点或半点时间，且大于开始时间至少半小时。
         * > 当RepeatType为Permanent时，EndTime为空。当RepeatType为None、Daily、Weekly、Monthly时，EndTime必须有值，您需要设置结束时间。
         * @example `1694764800`
         */
        EndTime: number;
    }[];
}
