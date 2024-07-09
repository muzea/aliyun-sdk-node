export interface ListAgentlessMaliciousFilesRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 紧急程度，多个采用英文半角逗号隔开。取值：
     * - serious：紧急
     * - suspicious：可疑
     * - remind：提醒
     * @example `remind,suspicious`
     */
    "Levels"?: string;
    /**
     * 要查询的恶意文件名称。
     * > 支持模糊搜索。
     * @example `WebShell`
     */
    "FuzzyMaliciousName"?: string;
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `20`
     */
    "PageSize": string;
    /**
     * 恶意文件的md5值。
     * @example `d836968041f7683b5459****`
     */
    "MaliciousMd5"?: string;
    /**
     * 资产唯一标识。
     * @example `d2d94e8b-bb25-4744-8004-1e08a53c****`
     */
    "Uuid"?: string;
    /**
     * 事件ID。
     * @example `81****`
     */
    "EventId"?: number;
    /**
     * 要查询漏洞的资产信息，可以设置为资产名称、公网IP或私网IP（支持模糊查询）。
     * @example `192.168.XX.XX`
     */
    "Remark"?: string;
    /**
     * 是否已处理。取值：
     * - Y：已处理
     * - N：未处理
     * @example `Y`
     */
    "Dealed"?: string;
    /**
     * 告警类型。
     * Lang传入zh时，取值：
     * - WebShell：WebShell
     * - 恶意软件：恶意软件
     * - 恶意脚本：恶意脚本
     * Lang传入en时，取值：
     * - WebShell：WebShell
     * - Malicious Software：恶意软件
     * - Malicious Script：恶意脚本
     * @example `WebShell`
     */
    "MaliciousType"?: string;
    "ScanRange"?: string[];
}
