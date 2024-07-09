export interface DescribeFileReportResponse {
    /**
     * 威胁情报事件，使用JSON数组表示。
     * 取值：
     * - 威胁分类。使用数组表示，数组的元素取值包括DDOS木马、挖矿程序、网络层入侵、网络服务扫描、网络共享发现、矿池 、漏洞利用 、暗网、恶意登录、恶意下载源、中控、Web Shell 、Web攻击等。
     * @example `["DDOS木马"]`
     */
    Intelligences: string;
    /**
     * 阿里云为此次调用请求生成的唯一标识符。
     * @example `3F2BBCA2-4EE5-456F-93B1-DE0B69CAFD71`
     */
    RequestId: string;
    /**
     * 文件Hash值。
     * @example `02e6b7cf0d34c6eac059f754b751208b`
     */
    FileHash: string;
    /**
     * 从威胁情报、安全事件分析出来的风险标签和服务器标签。使用String数组表示，每一个数组中的取值如下：
     * - **threat_type_desc**：威胁类型。取值包括：Rootkit、后门程序、可疑程序、挖矿程序、DDOS木马、恶意程序、蠕虫病毒、可疑黑客工具木马程序、被污染的基础软件（被植入了恶意代码）、感染型病毒、漏洞利用程序、勒索病毒、自变异木马、高危程序、黑客工具。
     * - **last_find_time**：最近发现时间。
     * - **risk_type**：表示是否是恶意标签。**0**表示非恶意标签，**1**表示恶意标签，**-1**表示未知。
     * - **threat_type**：威胁类型。使用数组表示，数组的元素取值包括网络层入侵、网络服务扫描、网络共享发现、矿池 、漏洞利用 、暗网、恶意登录、恶意下载源、中控、Web Shell 、Web攻击等。
     * @example `[{"threat_type_desc": "DDoS木马","risk_type": 1,"threat_type": "DDOS"}]`
     */
    ThreatTypes: string;
    /**
     * 基础信息。字段说明如下：
     * - **md5**：文件MD5值。
     * - **sha1**：文件SHA1值。
     * - **sha256**：文件SHA256值。
     * - **sha512**：文件SHA512值。
     * - **virus_result**：文件静态扫描结果。**0**表示正常，**1**表示恶意，**-1**表示未知。
     * - **sandbox_result**：文件动态沙箱运行结果。**0**表示正常，**1**表示恶意，**-1**表示未知。
     * - **source**：文件来源。唯一取值为**aegis**，表示是由云安全中心检测出该文件。
     * @example `"Basic": {"sha1": "","virus_result": "1","sandbox_result": "-1","sha256": "","sha512": "","virus_name": "自变异木马","source": "aegis","md5": "...}`
     */
    Basic: string;
    /**
     * 威胁等级。
     * 取值：
     * - **-1**：未知
     * - **0**：正常
     * - **1**：可疑
     * - **2**：中危
     * - **3**：高危
     * @example `2`
     */
    ThreatLevel: string;
    /**
     * 暂空，保留字段
     * @example `""`
     */
    Sandbox: string;
}
