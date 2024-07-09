export interface DescribeIpReportResponse {
    /**
     * 暂空，保留字段
     * @example `""`
     */
    Context: string;
    /**
     * 威胁情报事件信息。
     * 字段含义：
     * - **source**：威胁情报事件的来源。
     * - **first\_find\_time**：首次发现时间。
     * - **last\_find\_time**：最后活跃时间。
     * - **threat\_type\_l2**：威胁情报详细标签，可以使家族团伙的标签，例如Mykings，可以使攻击手法，例如SQL注入，描述了这个IP具体的威胁基本标签。
     * @example `[{"last_find_time": "2021-01-29 10:50:00", "threat_type_l2": "一句话木马扫描", "first_find_time": "2021-01-29 00:28:43", "source": "aliyun"}]`
     */
    Intelligences: string;
    /**
     * IP 的Whois信息。
     * @example `{   "serial_number": "18395475168054001104",...}`
     */
    Whois: string;
    /**
     * 阿里云为此次调用请求生成的唯一标识符。
     * @example `BE036526-FE84-46A8-9165-F086E9810E2F`
     */
    RequestId: string;
    /**
     * 该 IP 攻击目标的 Top 5 行业分布。
     * 字段含义：
     * - **event_cnt**：攻击次数。
     * - **industry_name**：攻击行业类别。
     * - **gmt\_last\_attack**：最后攻击活跃时间。
     * @example `[{"event_cnt":586,"industry_name":"Gaming","gmt_last_attack":"2020-06-14 21:54:04"}]`
     */
    AttackPreferenceTop5: string;
    /**
     * 对判定结果的置信程度，置信度值越高，说明对判定结果（判定结果是ThreatLevel字段）有多少信心。通常认为置信度大于90的结果可以作为精准结果，对于恶意的高威胁等级的指标可以进行拦截。对于正常（ThreatLevel等于0）的结果可以放行。
     * 取值范围0-100：
     *  - **[90-100)**：认为该情报是高可信的，可以作为拦截或者放行依据，如果ThreatLevel表示高危（ThreatLevel=3）则可拦截，如果ThreatLevel表示正常（ThreatLevel=0）。
     *  - **[60-90)**：认为情报有一定的可信，但是还不能达到拦截指标，通常是有一些恶意行为的IP。可作为安全分析运营的辅助依据。
     *  - **其他**：威胁情报的威胁相关信息认为置信度低。
     * @example `"98"`
     */
    Confidence: string;
    /**
     * 从威胁情报、安全事件分析出来的风险标签，例如远程控制、恶意软件等。
     * 字段含义：
     * - **threat_type**: 英文标签名称
     * - **threat\_type\_desc**: 中文标签含义
     * - **risk_type**: 威胁级别（3高危，2中危，1可疑，0正常，-1未知）
     * - **scenario**: 适用的安全场景（攻击指标、失陷指标）
     * - **first\_find\_time**: 首次标记时间
     * - **last\_find\_time**: 最后标记时间
     * - **attck_stage**: 所属的ATT&CK攻击阶段
     * 常见的威胁标签（threat_type字段）取值：
     * - **IDC**：IDC服务器
     * - **Tor**：暗网
     * - **Proxy**：代理
     * - **NAT**：公共出口
     * - **Miner Pool**：矿池
     * - **C&C Server**：命令与控制服务器
     * - **Brute Force**：暴力破解
     * - **Malicious Login**：恶意登录
     * - **WEB Attack**：WEB攻击
     * - **Malicious Source**：恶意下载源
     * - **Network Service Scanning**：网络服务扫描
     * - **Exploit**：漏洞利用
     * - **Network Share Discovery**：网络共享发现
     * - **Scheduled Task**：Windows计划任务
     * - **BITS Jobs**：BITS作业
     * - **Command-Line Interface**：恶意命令
     * - **Mshta执行**：Mshta执行
     * - **Regsvr32**：Regsvr32执行
     * - **Signed Binary Proxy Execution**：签名的二进制代理执行
     * - **Local Job Scheduling**：Linux计划任务
     * - **Rundll32**：Rundll32执行
     * - **Web Shell**：WebShell通信
     * - **SQL Injection**：SQL注入攻击
     * - **XSS Attack**：XSS攻击
     * @example `[{"threat_type_desc": "漏洞扫描", "last_find_time": "2021-01-29 10:50:00", "risk_type": 2, "scenario": "攻击指标", "threat_type": "Exploit Scanning", "first_find_time": "2021-01-29 00:28:43", "attck_stage": "initial access" }, {"threat_type_desc": "SQL注入", "last_find_time": "2021-02-28 00:18:40", "risk_type": 3, "scenario": "攻击指标", "threat_type": "SQL Injection",    "first_find_time": "2021-02-25 15:54:09", "attck_stage": "" }]`
     */
    ThreatTypes: string;
    /**
     * 该 IP 所适用的攻击场景。
     * 取值：
     * - **攻击指标**：该 IP 会主动发起攻击流量，可以在防火墙、WAF 等安全设备进行匹配由外向内主动发起的源，并根据标签进行拦截。
     * - **失陷指标**：攻击者植入的脚本或者恶意代码会回联该 IP 进行通讯和数据传输，如果在流量或者日志中发现该 IP 意味着当前主机已经被攻破。
     * - **信息数据**：白名单等类型，该字段为信息数据，不具有风险场景
     * @example `"攻击指标"`
     */
    Scenario: string;
    /**
     * IP的基础信息。
     * 字段含义：
     * - **ip**：IP地址
     * - **idc_name**：IDC服务器
     * - **isp**：运营商
     * - **country**：国家
     * - **province**：省份
     * - **city**：城市
     * - **asn**：ASN（Autonomous System Numbers，自治系统编号）
     * - **asn_label**：ASN名称
     * @example `{ "country": "美国", "province": "加利福尼亚州", "city": "洛杉矶", "ip": "X.X.X.X", "isp": "example.com", "idc_name": "*", "asn": "XXXXXX", "asn_label": "VNET" }`
     */
    Ip: string;
    /**
     * 威胁等级，命中以后造成的危害等级，恶意的等级有高危、中危、低危、正常和未知五个等级。使用的时候可以结合置信度（Confidence字段）来使用，对高危并且高置信度的数据进行拦截。对于正常（即白名单）的类型可以进行放行。
     * 取值：
     * - **-1**：未知
     * - **0**：正常，即白名单，可以放行
     * - **1**：低危
     * - **2**：中危
     * - **3**：高危
     * @example `"3"`
     */
    ThreatLevel: string;
    /**
     * 不同攻击阶段的攻击次数。
     * 该参数使用JSON数组表示，数组中的字段含义说明如下：
     * 字段含义：
     * - **event_cnt**：攻击次数。
     * - **threat_type**：攻击所属 ATT&CK 阶段。
     * @example `[{"event_cnt": 2536, "threat_type": "应用层入侵"}]`
     */
    AttackCntByThreatType: string;
    /**
     * 暂空，保留字段
     * @example `""`
     */
    Group: string;
}
