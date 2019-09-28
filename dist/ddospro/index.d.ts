interface DDOSPRO {
    /**
    * 调用DescribeCcEvents接口查询用户域名的CC攻击事件。
    */ DescribeCcEvents(query: {
        "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `en`
        */ "Lang"?: string;
        /**
        * 查询开始时间戳，单位为秒。
        * @example `1536891600`
        */ "StartTime"?: number;
        /**
        * 要查询的域名。
        * @example `www.aliyun.com`
        */ "Domain"?: string;
        /**
        * 查询结束时间戳，单位为秒。时间跨度不能超过30天。
        * @example `1534921519`
        */ "EndTime"?: number;
        /**
        * 分页大小，最大值为**20**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 分页页号，最小值为**1**。
        * @example `1`
        */ "PageNo"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeBackSourceCidr接口查询高防回源网段地址。
    */ DescribeBackSourceCidr(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * 要查询的线路类型。取值：
        * - **unicom**：中国联通
        * - **telecom**：中国电信
        * - **mobile**：中国移动
        * - **bgp**：BGP线路
        * @example `bgp`
        */ "Line"?: string;
        /**
        * 要查询的地区。取值：
        * > 当Line传入bgp时必需。
        * - **hangzhou**：杭州
        * - **beijing**：北京
        * - **shenzhen**：深圳
        * @example `hangzhou`
        */ "Region"?: string;
    }): Promise<{}>;
    /**
    * 调用UpdatePortRule接口更新非网站转发规则。
    */ UpdatePortRule(query: {
        "RegionId"?: string;
        /**
        * 设置转发端口。
        * @example `255`
        */ "FrontPort": number;
        /**
        * 添加源站列表，以逗号分隔。
        * @example `2.2.2.2,3.3.3.3`
        */ "RealServerList": string;
        /**
        * 要操作的高防实例IP。
        * @example `1.1.1.1`
        */ "Ip": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用CreateCcCustomedRule接口创建网站安全防护CC自定义规则。
    */ CreateCcCustomedRule(query: {
        "RegionId"?: string;
        /**
        * 选择匹配规则，取值：
        * - **prefix**：前缀模式
        * - **match**：完全匹配
        * @example `prefix`
        */ "MatchingRule": string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 允许单一IP的访问次数，取值范围：2~2,000。
        * @example `2`
        */ "VisitCount": number;
        /**
        * 设置规则名称。
        * @example `customeCcRule1`
        */ "Name": string;
        /**
        * 选择阻断类型，取值：
        * - **captcha**：人机识别
        * -  **close**：封禁
        * @example `captcha`
        */ "BlockingType": string;
        /**
        * 设置检测时长，单位为秒，取值范围：5~10,800。
        * @example `5`
        */ "Interval": number;
        /**
        * 设置阻断时间，单位为秒，取值范围：60~86,400。
        * @example `60`
        */ "BlockingTime": number;
        /**
        * 设置防护路径。
        * @example `/a/b/c`
        */ "Uri": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用ConfigSwitchPriority接口修改网站防护中高防IP的调度优先级。
    */ ConfigSwitchPriority(query: {
        "RegionId"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        "Config": string[];
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyTransmitLine接口修改网站防护转发线路。
    */ ModifyTransmitLine(query: {
        "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain"?: string;
        "Ips"?: string[];
    }): Promise<{}>;
    /**
    * 调用DescribeDomainSecurityConfig接口查询用户域名的安全防护配置。
    */ DescribeDomainSecurityConfig(query: {
        "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * 要查询的域名。
        * @example `www.aliyun.com`
        */ "Domain"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyPersistenceTimeOut接口配置会话保持时间。
    */ ModifyPersistenceTimeOut(query: {
        "RegionId"?: string;
        /**
        * 要操作的高防实例IP。
        * @example `1.1.1.1`
        */ "Ip": string;
        /**
        * 转发端口。
        * @example `255`
        */ "FrontPort": number;
        /**
        * 会话保持时间配置内容（JSON字符串格式），具体结构描述如下：
        * - **persistence_timeout**，Integer类型，必选，设置会话保持时间，单位为秒，取值范围：30-3,600。
        *     > 此处的参数名以小写开头。
        * @example `{"persistence_timeout":400}`
        */ "ConfigJson": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * 高防IP策略修改标识。
        * @example `xxxxxxx-xxxx-xxxx-xxxxxxxx`
        */ "LbId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDdosAttackEventSourceIps接口查询高防IP攻击事件的源攻击IP列表。
    */ DescribeDdosAttackEventSourceIps(query: {
        "RegionId"?: string;
        /**
        * 分页大小，最大值为**20**。
        * @example `10`
        */ "PageSize": number;
        /**
        * 查询开始时间戳，单位为毫秒。
        * @example `1536891600`
        */ "StartTime": number;
        /**
        * 查询结束时间戳，单位为毫秒。时间跨度不能超过30天。
        * @example `1536893404`
        */ "EndTime": number;
        /**
        * 要查询的高防实例IP。
        * @example `1.1.1.1`
        */ "Ip": string;
        /**
        * 分页页号，最小值为**1**。
        * @example `1`
        */ "CurrentPage": number;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteCcCustomedRule接口删除网站安全防护CC自定义规则。
    */ DeleteCcCustomedRule(query: {
        "RegionId"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 要删除的规则的名称。
        * @example `customedCcRule1`
        */ "Name": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteTransmitLine接口删除网站防护转发线路。
    */ DeleteTransmitLine(query: {
        "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * 要删除的线路，取值：
        * - **BGP**：bgp线路
        * - **CT**：电信
        * - **CUT**：联通
        * - **MT**：移动
        * @example `CUT`
        */ "Line"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain"?: string;
    }): Promise<{}>;
    /**
    * 调用UpdateCcCustomedRule接口修改网站安全防护CC自定义规则。
    */ UpdateCcCustomedRule(query: {
        "RegionId"?: string;
        /**
        * 选择匹配规则，取值：
        * - **prefix**：前缀模式
        * - **match**：完全匹配
        * @example `prefix`
        */ "MatchingRule": string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 允许单一IP的访问次数，取值范围：2~2,000。
        * @example `100`
        */ "VisitCount": number;
        /**
        * 设置规则名称。
        * @example `testCcRule1`
        */ "Name": string;
        /**
        * 选择阻断类型，取值：
        * - **captcha**：人机识别
        * - **close**：封禁
        * @example `captcha`
        */ "BlockingType": string;
        /**
        * 设置检测时长，单位为秒，取值范围：5~10,800。
        * @example `100`
        */ "Interval": number;
        /**
        * 设置阻断时间，单位为秒，取值范围：60~86,400。
        * @example `100`
        */ "BlockingTime": number;
        /**
        * 设置防护路径。
        * @example `/a/b/c`
        */ "Uri": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyDomainBlackWhiteList接口修改网站安全防护的黑白名单。
    */ ModifyDomainBlackWhiteList(query: {
        "RegionId"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        "Black"?: string[];
        "White"?: string[];
    }): Promise<{}>;
    /**
    * 调用ModifyRealServers接口修改网站防护配置中线路对应的源站。
    */ ModifyRealServers(query: {
        "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * 回源类型，取值：
        * - **IP**：回源到Ip
        * - **DOMAIN**：回源到域名
        * @example `IP`
        */ "Type"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain"?: string;
        /**
        * 要操作的线路，取值：
        * - **BGP**：BGP线路
        * - **CT**：电信
        * - **CUT**：联通
        * - **MT**：移动
        * @example `CUT`
        */ "Line"?: string;
        "RealServers"?: string[];
    }): Promise<{}>;
    /**
    * 调用CreateTransmitLine接口添加网站防护转发线路。
    */ CreateTransmitLine(query: {
        "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * 回源类型，取值：
        * - **IP**：回源到Ip
        * - **DOMAIN**：回源到域名
        * @example `IP`
        */ "Type"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain"?: string;
        "Ips"?: string[];
        "RealServers"?: string[];
    }): Promise<{}>;
    /**
    * 调用ModifyCcTemplate接口修改网站安全防护CC防护模式。
    */ ModifyCcTemplate(query: {
        "RegionId"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 设置CC防护模式，取值：
        * - **0**：正常
        * - **1**：攻击紧急
        * - **2**：严格
        * -  **3**：超级严格
        * @example `0`
        */ "Mode": number;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyCcStatus接口启用或禁用网站安全CC攻击防护功能。
    */ ModifyCcStatus(query: {
        "RegionId"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteDomain接口删除网站防护规则。
    */ DeleteDomain(query: {
        "RegionId"?: string;
        /**
        * 要移除的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyDomainProxy接口修改网站防护的转发协议。
    */ ModifyDomainProxy(query: {
        "RegionId"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        "ProxyType": string[];
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDdosAttackTypeChart接口查询高防IP的攻击类型概览图表。
    */ DescribeDdosAttackTypeChart(query: {
        "RegionId"?: string;
        /**
        * 查询开始时间戳，单位为毫秒。
        * @example `1536893404`
        */ "StartTime": number;
        /**
        * 查询结束时间戳，单位为毫秒。
        * @example `1536891600`
        */ "EndTime": number;
        /**
        * 要查询的高防实例IP。
        * @example `1.1.1.1`
        */ "Ip": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `en`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyCcCustomStatus接口启用或禁用网站安全防护CC自定义规则。
    */ ModifyCcCustomStatus(query: {
        "RegionId"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyIpCnameStatus接口修改网站防护中高防IP的Cname解析状态。
    */ ModifyIpCnameStatus(query: {
        "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain"?: string;
        /**
        * 要操作的高防IP。
        * @example `1.1.1.1`
        */ "Ip"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDdosFlowProportionDiagram接口查询高防IP的攻击比例图表。
    */ DescribeDdosFlowProportionDiagram(query: {
        "RegionId"?: string;
        /**
        * 查询开始时间戳，单位为毫秒。
        * @example `1536891600`
        */ "StartTime": number;
        /**
        * 查询结束时间戳，单位为毫秒。时间跨度不能超过30天。
        * @example `1536893404`
        */ "EndTime": number;
        /**
        * 要查询的高防实例IP。
        * @example `1.1.1.1`
        */ "Ip": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDdosAttackEvents接口查询高防IP的攻击事件。
    */ DescribeDdosAttackEvents(query: {
        "RegionId"?: string;
        /**
        * 分页大小，最大值为**20**。
        * @example `10`
        */ "PageSize": number;
        /**
        * 查询开始时间戳，单位为毫秒。
        * @example `1536891600`
        */ "StartTime": number;
        /**
        * 查询结束时间戳，单位为毫秒。时间跨度不能超过30天。
        * @example `1536893404`
        */ "EndTime": number;
        /**
        * 要查询的高防实例IP。
        * @example `1.1.1.1`
        */ "Ip": string;
        /**
        * 分页页号，最小值为**1**。
        * @example `1`
        */ "CurrentPage": number;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDomainConfigPage接口分页查询用户的网站配置列表。
    */ DescribeDomainConfigPage(query: {
        "RegionId"?: string;
        /**
        * 分页大小，最大值为**5**。
        * @example `5`
        */ "PageSize": number;
        /**
        * 分页页号，最小值为**1**。
        * @example `1`
        */ "PageNo": number;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * 要查询的域名。支持模糊查询。
        * @example `www.aliyun.com`
        */ "Domain"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyHealthCheckConfig接口修改健康检查配置。
    */ ModifyHealthCheckConfig(query: {
        "RegionId"?: string;
        /**
        * 要操作的高防实例IP。
        * @example `1.1.1.1`
        */ "Ip": string;
        /**
        * 转发端口。
        * @example `255`
        */ "FrontPort": number;
        /**
        * 健康检查配置内容（JSON字符串格式），具体结构描述如下：
        * - **check**，Object类型，必选，健康检查内容配置，具体结构描述如下：
        *     > 该参数名以小写开头。
        *     - **interval**，Integer类型，必选，检查间隔。
        *     - **port**，Integer类型，可选，检测端口。
        *
        *         > 协议为**tcp**或**udp**时必填。
        *     - **timeout**，Integer类型，必选，响应超时时间。
        *     - **type**，String类型，必选，协议类型，取值：
        *         - **tcp**
        *         - **udp**
        *         - **http**
        *     - **up**，Integer类型，必选，健康阈值。
        *     - **down**，Integer类型，必选，不健康阈值。
        *     - **domain**，String类型，可选，域名。
        *         > 协议为**http**时可填，非必需。
        *     - **uri**，String类型， 可选，检查路径。
        *         > 协议为http时必填。
        * @example `{"check":{"interval":5,"port":255,"timeout":5,"type":"http","up":3,"down":3,"domain":"www.aliyun.com","uri":"/a/a/a"}}`
        */ "ConfigJson": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * 高防IP策略修改标识。
        * @example `xxxxxxx-xxxx-xxxx-xxxxxxxx`
        */ "LbId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeHealthCheckConfig接口查询非网站转发健康检查类配置。
    */ DescribeHealthCheckConfig(query: {
        "RegionId"?: string;
        /**
        * 要查询的高防IP。
        * @example `1.1.1.1`
        */ "Ip": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyDDoSProtectConfig接口修改DDoS防护配置。
    */ ModifyDDoSProtectConfig(query: {
        "RegionId"?: string;
        /**
        * 要操作的高防实例IP。
        * @example `1.1.1.1`
        */ "Ip": string;
        /**
        * 转发端口。
        * @example `255`
        */ "FrontPort": number;
        /**
        * DDoS防护配置内容（JSON字符串格式），具体结构描述如下：
        * - **check**，Object类型，必选，DDoS防护策略配置，具体结构描述如下：
        *     > 该参数名以小写开头。
        *     - **PayloadLength**，Object类型，包长度过滤，具体结构描述如下：
        *         - **Min**，Integer类型，必选，包长度最小值。
        *         - **Max**，Integer类型，必选，包长度最大值。
        *     - **PersistenceTimeout**，Integer类型，必选，会话保持检查时间，单位为秒。
        *     - **NoDataConn**，String类型，必选，虚假源开关。
        *     - **SynProxy**，String类型，必选，空连接开关。
        *     - **Sla**，Object类型，必选，目的新建、并发链接配置，具体结构描述如下：
        *         - **MaxConnEnable**，Integer类型，必选，目的并发连接限速开关，取值：
        *             - **0**：关闭
        *             - **1**：打开
        *         - **MaxConn**，Integer类型，必选，目的并发连接限速。
        *         - **CpsEnable**，Integer类型，必选，目的新建连接限速开关，取值：
        *             - **0**：关闭
        *             - **1**：打开
        *         - **Cps**，Integer类型，必选，目的新建连接限速。
        *     - **Slimit**，Object类型，必选，源新建、并发链接配置，具体结构描述如下：
        *         - **MaxConnEnable**，Integer类型，必选，源并发连接限速开关，取值：
        *             - **0**：关闭
        *             - **1**：打开
        *         - **MaxConn**，Integer类型，必选，源并发连接限速。
        *         - **CpsEnable**，Integer类型，必选，源新建连接限速开关，取值：
        *             - **0**：关闭
        *             - **1**：打开
        *         - **Cps**，Integer类型，必选，源新建连接限速。
        * @example `{"payload_len":{"min":0,"max":6000},"synproxy":"on","slimit":{"pps":0,"maxconn_enable":1,"bps":0,"maxconn":124,"cps":123,"cps_enable":1},"sla":{"pps":0,"maxconn_enable":1,"outbps":536870912,"cps":125,"maxconn":1226,"inbps":0,"cps_enable":1},"nodata_conn":"off"}`
        */ "ConfigJson": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * 高防IP策略修改标识。
        * @example `xxxxxxx-xxxx-xxxx-xxxxxxxx`
        */ "LbId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeBizFlow接口查询高防IP上的业务流量信息，包括入方向和出方向流量。
    */ DescribeBizFlow(query: {
        "RegionId"?: string;
        /**
        * 查询开始时间戳，单位为秒。
        * @example `1536496397`
        */ "StartTime": number;
        /**
        * 查询结束时间戳，单位为秒。
        * @example `1536498197`
        */ "EndTime": number;
        /**
        * 要查询的高防IP。
        * @example `1.1.1.1`
        */ "Ip": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `en`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeDdosIpConfig接口分页查询高防IP防护配置。
    */ DescribeDdosIpConfig(query: {
        "RegionId"?: string;
        /**
        * 查询索引，从**0**开始。
        * @example `0`
        */ "Index": number;
        /**
        * 分页大小，最大值为**10**。
        * @example `10`
        */ "PageSize": number;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        "Ips"?: string[];
    }): Promise<{}>;
    /**
    * 调用DeletePortRule接口删除非网站转发规则。
    */ DeletePortRule(query: {
        "RegionId"?: string;
        /**
        * 要操作的转发端口。
        * @example `255`
        */ "FrontPort": number;
        /**
        * 要操作的高防实例IP。
        * @example `1.1.1.1`
        */ "Ip": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用ListCcCustomedRule接口查询用户的自定义CC规则。
    */ ListCcCustomedRule(query: {
        "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * 要查询的域名。
        * @example `ww.aliyun.com`
        */ "Domain"?: string;
        /**
        * 分页大小，最大值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 分页页号，最小值为**1**。
        * @example `1`
        */ "CurrentPage"?: number;
    }): Promise<{}>;
    /**
    * 调用CreateDomain接口创建网站防护规则。
    */ CreateDomain(query: {
        "RegionId"?: string;
        /**
        * 添加要防护的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 选择回源类型，取值：
        * -  **IP**：回源到Ip
        * - **DOMAIN**：回源到域名
        * @example `IP`
        */ "Type": string;
        "RealServer": string[];
        "ProxyType": string[];
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * @example `1.1.1.1`
        */ "Ip"?: string;
        /**
        * 是否开启CC攻击防护功能。
        * @example `true`
        */ "CcEnable"?: boolean;
        "Ips"?: string[];
    }): Promise<{}>;
    /**
    * 调用DescribeInstancePage接口查询高防IP的实例信息。
    */ DescribeInstancePage(query: {
        "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * 分页大小，最大值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 分页页号，最小值为**1**。
        * @example `1`
        */ "CurrentPage"?: number;
        /**
        * 要查询的实例ID，优先级比**InstanceIdList**高。
        * @example `ddosBag-cn-xxxxx`
        */ "InstanceId"?: string;
        /**
        * 要查询的线路，取值：
        * - **CUT**：联通
        * - **CT**：电信
        * @example `CUT`
        */ "Line"?: string;
        "InstanceIdList"?: string[];
        "IpList"?: string[];
    }): Promise<{}>;
    /**
    * 调用DescribeDdosPeakFlow接口查询高防IP的攻击峰值。
    */ DescribeDdosPeakFlow(query: {
        "RegionId"?: string;
        /**
        * 要查询的高防实例IP。
        * @example `1.1.1.1`
        */ "Ip": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * 查询开始时间戳，单位为毫秒。
        * @example `1536891600`
        */ "StartTime"?: number;
        /**
        * 查询结束时间戳，单位为毫秒。
        * @example `1536893404`
        */ "EndTime"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribePortRulePage接口分页查询非网站转发规则。
    */ DescribePortRulePage(query: {
        "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * 分页大小，最大值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 要查询的高防实例IP。
        * @example `1.1.1.1`
        */ "Ip"?: string;
        /**
        * 分页页号，最小值为**1**。
        * @example `1`
        */ "CurrentPage"?: number;
    }): Promise<{}>;
    /**
    * 调用CreatePortRule接口创建非网站转发规则。
    */ CreatePortRule(query: {
        "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * @example `cn`
        */ "Lang"?: string;
        /**
        * 设置转发端口。
        * @example `255`
        */ "FrontPort"?: number;
        /**
        * 设置源站端口。
        * @example `255`
        */ "BackPort"?: number;
        /**
        * 设置转发协议，取值：
        * - **tcp**
        * - **udp**
        * @example `tcp`
        */ "ProxyType"?: string;
        /**
        * 添加源站列表，以逗号分隔。
        * @example `2.2.2.2,3.3.3.3`
        */ "RealServerList"?: string;
        /**
        * 要操作的高防实例IP。
        * @example `1.1.1.1`
        */ "Ip"?: string;
    }): Promise<{}>;
    DescribeCnameAutoStatus(query: {
        "RegionId"?: string;
        "Domain": string;
    }): Promise<{}>;
    ModifyElasticBandwidth(query: {
        "RegionId"?: string;
        "ElasticBandwidth": number;
        "Ip": string;
        "SourceIp"?: string;
        "Lang"?: string;
    }): Promise<{}>;
}
export default DDOSPRO;
