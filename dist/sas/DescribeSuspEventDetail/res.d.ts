export interface DescribeSuspEventDetailResponse {
    /**
     * 告警事件的数据来源。
     * @example `aegis_suspicious_****`
     */
    DataSource: string;
    /**
     * 告警事件的名称。
     * @example `WEBSHELL`
     */
    EventName: string;
    /**
     * 发生告警事件的服务器的公网IP。
     * @example `101.132.XX.XX`
     */
    InternetIp: string;
    /**
     * 发生告警事件的服务器的私网IP。
     * @example `172.26.XX.XX`
     */
    IntranetIp: string;
    /**
     * 告警事件最新发生时间。
     * @example ` 2018-10-30 11:43:46 `
     */
    LastTime: string;
    /**
     * 告警事件的处理结果的说明。
     * @example `success`
     */
    OperateMsg: string;
    /**
     * 发生告警事件的服务器实例的UUID。
     * @example `bffb12c3-590a-4db2-b538-****`
     */
    Uuid: string;
    /**
     * 是否支持在线处理告警事件，例如阻断隔离、加白名单、忽略等。取值包括：
     * - **true**：支持在线处置
     * - **false**：不支持在线处置
     * @example `true`
     */
    CanBeDealOnLine: boolean;
    /**
     * 结果的请求ID。
     * @example `0B48AB3C-84FC-424D-A01D-B9270EF46038`
     */
    RequestId: string;
    /**
     * 告警事件类型说明。
     * @example `Malicious Software-Variable Trojan`
     */
    EventTypeDesc: string;
    /**
     * 告警事件的描述信息。
     * @example `The detection model found a suspicious Webshell file on your server, which may be a backdoor file implanted to maintain permissions after the attacker successfully invaded the website.`
     */
    EventDesc: string;
    /**
     * 发生告警事件的服务器的名称。
     * @example `ca_cpm_****`
     */
    InstanceName: string;
    /**
     * 告警事件状态。取值包括：
     * - **1**：pending（待处理）
     * - **2**：ignore（已忽略）
     * - **4**：handled（已确认）
     * - **8**：fault（已标记误报）
     * - **16**：dealing（处理中）
     * - **32**：done（处理完毕）
     * - **64**：expire（已经过期）
     * @example `1`
     */
    EventStatus: string;
    /**
     * 告警事件检测支持的云安全中心版本。取值包括：
     * - **0**：基础版
     * - **1**：高级版
     * - **2**：企业版
     * @example `1`
     */
    SaleVersion: string;
    /**
     * 告警事件的处理结果。
     * @example `quara.Succes`
     */
    OperateErrorCode: string;
    /**
     * 告警事件的危险等级。取值包括：
     * - **serious**：紧急
     * - **suspicious**：可疑
     * - **remind**：提醒
     * @example `serious`
     */
    Level: string;
    /**
     * 记录告警事件的唯一标识ID。
     * @example `11416624`
     */
    Id: number;
    /**
     * 告警事件的详情。
     */
    Details: {
        /**
         * 告警事件详情信息展示的方式。
         * 取值包括：
         * - **text**：文本方式
         * - **html**：富文本的方式
         * @example `html`
         */
        Type: string;
        /**
         * 告警事件的其他属性信息。例如：异常登录告警的登录时间或登录地点、webshell告警的木马文件路径或木马类型等。
         * @example `getopt`
         */
        Value: string;
        /**
         * 告警事件显示名称。
         * @example `Trojan Path`
         */
        NameDisplay: string;
    }[];
}
