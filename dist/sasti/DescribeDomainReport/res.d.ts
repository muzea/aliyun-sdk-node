export interface DescribeDomainReportResponse {
    /**
     * 详细的威胁情报事件，使用JSON数组表示。
     * 字段含义：
     * - **source**：威胁情报数据来源。
     * - **first\_find\_time**：首次发现时间。
     * - **last\_find\_time**：最后活跃时间。
     * - **threat\_type\_l2**：威胁情报详细标签，可以使家族团伙的标签，例如mykings，apt32，可以使攻击手法，例如bits job，描述连接域名使用的手法。
     * - **threat\_type**：威胁情报详细标签对应的一级标签，即威胁的大分类标签。
     * - **refer**：相关参考。
     * @example `[{ "last_find_time": "2020-06-17 03:54:23", "threat_type_l2": "恶意下载源", "first_find_time": "2020-01-01 00:59:52", "source": "aliyun" }, { "last_find_time": "2020-11-10 14:45:12", "threat_type_l2": "regsvr32.exe执行恶意文件", "first_find_time": "2017-09-22 11:15:00", "source": "aliyun" } ]`
     */
    Intelligences: string;
    /**
     * 域名。
     * @example `example.com`
     */
    Domain: string;
    /**
     * 域名绑定的SSL证书信息。使用JSON串表示。
     * @example `{   "serial_number": "18395475168054001104",   "validity_end": "2029-12-02 06:00:31",   "issuer": "example.ca",...}`
     */
    SslCert: string;
    /**
     * 被攻击的网站所属的Top 5行业。使用JSON数组表示。
     * 字段含义：
     * - **event_cnt**：攻击次数。
     * - **industry_name**：攻击行业类别。
     * - **gmt\_last\_attack**：最后攻击活跃时间。
     * @example `[{"event_cnt":586,"industry_name":"Gaming","gmt_last_attack":"2020-06-14 21:54:04"}]`
     */
    AttackPreferenceTop5: string;
    /**
     * 该域名相关的详细威胁情报数据，使用JSON数组表示，每一个数组的字段含义如下：
     * - **threat_type_desc**：标签的中文描述。
     * - **first\_find\_time**：首次标记时间。
     * - **last\_find\_time**：最后标记时间。
     * - **risk_type**：表示是否是恶意标签。**0**表示非恶意标签，**1**表示低危标签，**2**表示中危标签，**3**表示高危标签，**-1**表示未知。
     * - **scenario**： 该域名所归属的场景，失陷指标或攻击指标。
     * - **attck_stage**：该恶意行为所属的 ATT&CK 攻击阶段。
     * - **threat_type**：威胁类型。
     * 常见的威胁标签（threat_type字段）取值：
     * - **Botnet**：僵尸网络
     * - **Trojan**：木马
     * - **Worm**：蠕虫
     * - **Malware**：恶意软件
     * - **Ransomware**：勒索软件
     * - **APT**：高级持续威胁攻击
     * - **RAT**：远控
     * - **C&C Server**：命令与控制服务器
     * - **Miner Pool**：矿池
     * - **Malicious Source**：恶意下载源
     * - **Scheduled Task**：Windows计划任务
     * - **BITS Jobs**：BITS作业
     * - **Command-Line Interface**：恶意命令
     * - **Mshta执行**：Mshta执行
     * - **Regsvr32**：Regsvr32执行
     * - **Signed Binary Proxy Execution**：签名的二进制代理执行
     * - **Local Job Scheduling**：Linux计划任务
     * - **Rundll32**：Rundll32执行
     * @example `[{ "threat_type_desc": "恶意下载源", "last_find_time": "2020-06-17 03:54:23", "risk_type": 3, "scenario": "失陷指标", "threat_type": "Malicious Source", "first_find_time": "2020-01-01 00:59:52", "attck_stage": "delivery" }, { "threat_type_desc": "Regsvr32执行", "last_find_time": "2020-11-10 14:45:12", "risk_type": 3, "scenario": "失陷指标", "threat_type": "Regsvr32", "first_find_time": "2017-09-22 11:15:00", "attck_stage": "defense evasion" } ]`
     */
    ThreatTypes: string;
    /**
     * 对判定结果的置信程度，置信度值越高，说明对判定结果（判定结果是ThreatLevel字段）有多少信心。通常认为置信度大于90的结果可以作为精准结果，对于恶意的高威胁等级的指标可以进行拦截。对于正常（ThreatLevel等于0）的结果可以放行。
     * 取值范围60-100：
     *  - **[90-100)**：认为该情报是高可信的，可以作为拦截或者放行依据，如果ThreatLevel表示高危（ThreatLevel=3）则可拦截，如果ThreatLevel表示正常（ThreatLevel=0）。
     *  - **[60-90)**：认为情报有一定的可信，但是还不能达到拦截指标，通常是有一些恶意行为的域名。可作为安全分析运营的辅助依据。
     *  - **其他**：威胁情报的威胁相关信息认为置信度低。
     * @example `95`
     */
    Confidence: string;
    /**
     * 威胁等级，命中以后造成的危害等级，恶意的等级有高危、中危、低危、正常和未知五个等级。使用的时候可以结合置信度（Confidence字段）来使用，对高危并且高置信度的数据进行拦截。对于正常（即白名单）的类型可以进行放行。
     * 取值：
     * - **-1**：未知
     * - **0**：正常，即白名单，可以放行
     * - **1**：低危
     * - **2**：中危
     * - **3**：高危
     * @example `2`
     */
    ThreatLevel: string;
    /**
     * 不同攻击阶段的攻击次数。
     * 该参数使用JSON数组表示，数组中的字段含义说明如下：
     * 字段含义：
     * - **event_cnt**：攻击次数。
     * - **threat_type**：攻击所属 ATT&CK 阶段。
     * @example ` {"event_cnt": 27, "threat_type": "网络层入侵"}`
     */
    AttackCntByThreatType: string;
    /**
     * 保留字段，暂空
     * @example `""`
     */
    Context: string;
    /**
     * 域名的Whois信息。使用JSON串表示。
     * @example `{"registrant_phone": "", "registrar": "科技有限公司", "registrar_url": "", "whois_server": "whois.cnnic.cn", "admin_phone": "", "registrar_phone": "", "registrant_email": "", "admin_email": "", "admin_organization": "", "tech_name": "", "registrant_city": "", "tech_street": "", "tech_phone": "", "dnssec": "unsigned", "admin_province": "", "tech_organization": "", "registrant_country": "", "admin_city": "", "registrant_province": "", "admin_street": "", "tech_email": "", "nameservers": "ns4.myhostadmin.net,ns1.myhostadmin.net,ns2.myhostadmin.net,ns3.myhostadmin.net,ns5.myhostadmin.net,ns6.myhostadmin.net", "registrar_email": "", "domain_status": "ok", "domain": "example.com", "tech_city": "", "registrant_name": "朱轩", "registrant_organization": "", "tech_country": "", "registrant_street": "", "admin_name": "", "tech_province": "", "admin_country": ""}`
     */
    Whois: string;
    /**
     * 阿里云为此次调用请求生成的唯一标识符。
     * @example `718747A4-9A75-4130-88F9-C9B47350B7F5`
     */
    RequestId: string;
    /**
     * 该域名所适用的攻击场景。
     * 可以取以下的一个或者多个值：
     * - **攻击指标**：域名通常不为攻击指标。
     * - **失陷指标**：攻击者植入的脚本或者恶意代码会回联该域名进行通讯和数据传输，如果在流量或者日志中发现该域名意味着当前主机已经被攻破。失陷以后对外的C2连接
     * - **信息数据**：白名单等类型，该字段为信息数据，不具有风险场景
     * @example `"失陷指标"`
     */
    Scenario: string;
    /**
     * 域名的基础信息。使用JSON格式表示。
     * 字段含义如下：
     * - **domain**：域名
     * - **sld_domain**：SLD域名
     * - **reg_date**：域名注册时间
     * - **expire_date**：域名过期时间
     * - **child\_domain\_cnt**：子域名数量
     * - **malicious\_child\_domain\_cnt**：恶意子域名数量
     * - **ip\_cnt**：近1年该域名的解析IP数量
     * - **malicious\_ip\_cnt**：近1年该域名解析IP为恶意IP的数量
     * @example `{ "ip_cnt": "36", "domain": "example.com", "child_domain_cnt": "18", "sld_domain": "example.com", "malicious_ip_cnt": "28", "malicious_child_domain_cnt": "4" }`
     */
    Basic: string;
    /**
     * 暂空，保留字段
     * @example `""`
     */
    Group: string;
}
