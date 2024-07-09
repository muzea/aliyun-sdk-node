export interface DescribeOutgoingDestinationIPRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 设置查询开始时间。使用秒级时间戳格式表示。
     * @example `1656837360`
     */
    "StartTime": string;
    /**
     * 设置查询结束时间。使用秒级时间戳格式表示。
     * @example `1656923760`
     */
    "EndTime": string;
    /**
     * 设置分页查询每页包含多少条结果。
     * 默认值为6，表示每页包含6条结果。最大值为10。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 设置分页查询返回第几页数据。
     * 默认值为1，表示返回第1页数据。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 产品分类ID。默认值为空，取值：
     * - **All** ：全部分类
     * - **RiskDomain** ：风险域名分类
     * - **RiskIP** ：风险IP分类
     * - **AliYun** ：云产品分类
     * - **NotAliYun** ：非云产品分类
     * @example `All`
     */
    "CategoryId"?: string;
    /**
     * 主动外联域名的目的IP。
     * @example `10.0.XX.XX`
     */
    "DstIP"?: string;
    /**
     * 外联ECS的公网IP。
     * @example `192.0.XX.XX`
     */
    "PublicIP"?: string;
    /**
     * 外联ECS的私网IP。
     * @example `192.168.XX.XX`
     */
    "PrivateIP"?: string;
    /**
     * 端口号。
     * @example `80`
     */
    "Port"?: string;
    /**
     * 按照指定的字段排序。取值：
     * - **SessionCount**（默认值）：请求次数。
     * - **TotalBytes**：总流量数。
     * @example `SessionCount`
     */
    "Sort"?: string;
    /**
     * 排序方式。取值：
     * - **asc**：升序。
     * - **desc**（默认）：降序。
     * @example `desc`
     */
    "Order"?: string;
    /**
     * 情报标签ID。取值：
     * - **AliYun**：阿里云产品
     * - **RiskDomain**：风险域名
     * - **RiskIP**：风险IP
     * - **TrustedDomain**：信誉网站
     * - **AliPay**：支付宝
     * - **DingDing**：钉钉
     * - **WeChat**：微信
     * - **QQ**：腾讯QQ
     * - **SecurityService**：安全服务
     * - **Microsoft**：微软
     * - **Amazon**：亚马逊
     * - **Pan**：网盘
     * - **Map**：地图
     * - **Code**：代码托管
     * - **SystemService**：系统服务
     * - **Taobao**：淘宝
     * - **Google**：谷歌
     * - **ThirdPartyService**：第三方平台服务
     * - **FirstFlow**：首次
     * - **Downloader**：恶意下载
     * - **Alexa Top1M**：热门网站
     * - **Miner**：矿池
     * - **Intelligence**：威胁情报
     * - **DDoS**：DDoS木马
     * - **Ransomware**：勒索软件
     * - **Spyware**：间谍软件
     * - **Rogue**：流氓软件
     * - **Botnet**：僵尸网络
     * - **Suspicious**：可疑网站
     * - **C&C**：远控
     * - **Gang**：团伙
     * - **CVE**：漏洞CVE
     * - **Backdoor**：木马后门
     * - **Phishing**：钓鱼网站
     * - **APT**：APT攻击
     * - **Supply Chain Attack**：供应链攻击
     * - **Malicious software**：恶意软件
     * @example `AliYun`
     */
    "TagIdNew"?: string;
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
     * > 支持的应用类型取值与协议类型（Proto）取值存在依赖关系。Proto为TCP协议时，ApplicationNameList支持选择以上所有应用类型。当ApplicationNameList和ApplicationName同时传值时，以ApplicationNameList为准。
     * @example `FTP`
     */
    "ApplicationName"?: string;
}
