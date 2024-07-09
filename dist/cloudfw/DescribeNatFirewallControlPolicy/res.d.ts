export interface DescribeNatFirewallControlPolicyResponse {
    /**
     * 返回结果的总条数。
     * @example `28`
     */
    TotalCount: string;
    /**
     * 本次请求的ID。
     * @example `F283567D-8A52-5BAE-9472-*****`
     */
    RequestId: string;
    /**
     * NAT防火墙访问控制策略的信息。
     */
    Policys: {
        /**
         * 访问控制策略中的目的地址。DestinationType（目的类型）不同，目的地址的取值也不同。取值：
         * - 当**DestinationType**为**net**时，目的地址为CIDR格式的IP地址段。例如：192.0.XX.XX/24。
         * - 当**DestinationType**为**domain**时，目的地址为域名。例如：aliyuncs.com。
         * - 当**DestinationType**为**group**时，目的地址为地址簿的名称。例如：db_group。
         * - 当**DestinationType**为**location**时，目的地址为区域名称（具体区域位置编码请参见[AddControlPolicy](~~138867~~)）。例如： \["BJ11", "ZB"\]。
         *
         * @example `x.x.x.x/32`
         */
        Destination: string;
        /**
         * 访问控制策略生效的优先级。
         * 优先级数字从1开始顺序递增，优先级数字越小，优先级越高。
         * @example `1`
         */
        Order: number;
        /**
         * 访问控制策略中流量访问的目的端口地址簿名称。
         * @example `my_port_group`
         */
        DestPortGroup: string;
        /**
         * 访问控制策略中的源地址类型。取值：
         * - **net**：源网段（CIDR地址）
         * - **group**：源地址簿
         * - **location**：源区域
         * @example `net`
         */
        SourceType: string;
        /**
         * DNS解析的时间戳。使用秒级时间戳格式表示。
         * @example `1579261141`
         */
        DnsResultTime: number;
        /**
         * DNS解析结果。
         * @example `111.0.XX.XX,112.0.XX.XX`
         */
        DnsResult: string;
        /**
         * 应用名称，支持多选。
         */
        ApplicationNameList: string[];
        /**
         * 访问控制策略的唯一标识ID。
         * @example `01281255-d220-4db1-8f4f-c4df221a****`
         */
        AclUuid: string;
        /**
         * 访问控制策略中流量访问的目的端口类型。取值：
         * - **port**：端口
         * - **group**：端口地址簿
         * @example `port`
         */
        DestPortType: string;
        /**
         * 访问控制策略中的访问源地址。取值：
         * - 当**SourceType**为`net`时，访问源为CIDR格式的IP地址段。例如：192.0.XX.XX/24。
         * - 当**SourceType**为`group`时，访问源地址为源地址簿名称。例如：db_group。
         * - 当**SourceType**为`location`时，访问源地址为区域（具体区域位置编码请参见[AddControlPolicy](~~138867~~)）。例如： \["BJ11", "ZB"\]。
         * @example `192.0.XX.XX/24`
         */
        Source: string;
        /**
         * 访问控制策略中的目的地址类型。取值：
         * - **net**：目的网段（CIDR）
         * - **group**：目的地址簿
         * - **domain**：目的域名
         * - **location**：目的区域
         * @example `net`
         */
        DestinationType: string;
        /**
         * 访问控制策略的命中次数。
         * @example `100`
         */
        HitTimes: number;
        /**
         * 最新命中时间戳。使用秒级时间戳格式表示。
         * @example `1579261141`
         */
        HitLastTime: number;
        /**
         * 访问控制策略中访问流量的目的端口。
         * @example `80`
         */
        DestPort: string;
        /**
         * 访问控制策略的描述信息。
         * @example `描述信息`
         */
        Description: string;
        /**
         * 访问控制策略中设置的流量通过云防火墙的方式（动作）。取值：
         * - **accept**：放行
         * - **drop**：拒绝
         * - **log**：观察
         * @example `accept`
         */
        AclAction: string;
        /**
         * 访问控制策略中流量访问的安全协议类型。取值：
         * - **ANY**
         * - **TCP**
         * - **UDP**
         * - **ICMP**
         * @example `TCP`
         */
        Proto: string;
        /**
         * 访问控制策略中的目的地址簿中的网段列表。
         */
        DestinationGroupCidrs: string[];
        /**
         * 目的端口地址簿中包含的端口列表。
         */
        DestPortGroupPorts: string[];
        /**
         * 访问控制策略中的源地址簿中的网段列表。
         */
        SourceGroupCidrs: string[];
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
         * 要查询的NAT网关的ID。
         * @example `ngw-xxxxxx`
         */
        NatGatewayId: string;
        /**
         * 访问控制策略的域名解析方式。策略创建后默认启用该策略。取值：
         * - **0**：基于FQDN
         * - **1**：基于DNS动态解析
         * - **2**：基于FQDN与DNS动态解析
         * @example `0`
         */
        DomainResolveType: number;
        /**
         * 占用访问控制策略的规格数，即每条策略占用规格数的累加值。
         * 单条策略占用访问控制策略的规格数=访问源地址段个数 \* 目的地址个数（IP地址段个数或区域个数或域名个数）\* 应用数 \* 端口段个数。
         * @example `10,000`
         */
        SpreadCnt: string;
        /**
         * 创建策略的时间。
         * @example `1761062400`
         */
        CreateTime: number;
        /**
         * 修改策略的时间。
         * @example `1761062400`
         */
        ModifyTime: number;
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
