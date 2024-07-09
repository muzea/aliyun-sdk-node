export interface GetFileDetectReportResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 文件hash值。
         * @example `c42b5f6bde0b730ece2923266333****`
         */
        FileHash: string;
        /**
         * 威胁等级。取值：
         * - **0**：正常
         * - **1**：可疑
         * - **2**：高危。
         * @example `2`
         */
        ThreatLevel: number;
        /**
         * 云沙箱的具体检测报告。
         * @example `{'BehaviorData': {}, 'ProcessData': {}, 'SandboxData': {}, 'AttackData': [], 'NetworkData': {}, 'SolutionData': {}, 'FileData': {}}`
         */
        Sandbox: string;
        /**
         * 检测文件的基础信息。
         * @example `    {
                "sha256": "",
                "sha512": "",
                "source": "aegis",
                "gmt_first_submit": "",
                "sha1": "",
                "virus_result": "",
                "webshell_result": "",
                "gmt_update": "",
                "sandbox_result": "2",
                "fileSize": "363752",
                "virus_name": "",
            }`
         */
        Basic: string;
        /**
         * 文件名称。
         * @example `挖矿程序`
         */
        Filename: string;
        /**
         * 文件数据是否在云沙箱中存在。取值：
         * - **true**：存在
         * - **false**：不存在
         * @example `true`
         */
        HasData: boolean;
        /**
         * 威胁情报事件，使用JSON数组表示。
         * 取值：
         * - 威胁分类。使用数组表示，数组的元素取值包括DDOS木马、挖矿程序、网络层入侵、网络服务扫描、网络共享发现、矿池 、漏洞利用 、暗网、恶意登录、恶意下载源、中控、Web Shell 、Web攻击等。
         * @example `["挖矿程序"]`
         */
        Intelligences: string;
        /**
         * 从威胁情报、安全事件分析出来的风险标签和服务器标签。使用String数组表示，每一个数组中的取值如下：
         * -  **threat_type_desc**: 威胁类型。
         * - **last_find_time**: 最近发现时间。
         * - **risk_type**: 表示是否是恶意标签。0表示非恶意标签，1表示恶意标签，-1表示未知。
         * - **threat_type**: 威胁类型。使用数组表示，数组的元素取值包括网络层入侵、网络服务扫描、网络共享发现、矿池 、漏洞利用 、暗网、恶意登录、恶意下载源、中控、Web Shell 、Web攻击等。
         * @example `[{"threat_type_desc": "挖矿程序","risk_type": 1,"threat_type": ""}]`
         */
        ThreatTypes: string;
        /**
         * 显示是否展示检测报告。取值：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        ShowTab: boolean;
    };
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `A4EB8B1C-1DEC-5E18-BCD0-D1BBB393XXXX`
     */
    RequestId: string;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回附加消息。
     * @example `successful`
     */
    Message: string;
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
}
