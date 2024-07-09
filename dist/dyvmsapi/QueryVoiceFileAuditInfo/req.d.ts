export interface QueryVoiceFileAuditInfoRequest {
    /**
     * 语音文件ID。
     * 您可以登录[语音服务控制台](https://dyvms.console.aliyun.com/overview/home)，在**语音文件管理**页面查看**语音ID**。
     * > 每次查询最多支持10个语音文件，以半角逗号（,）分隔。
     * @example `8501d2eb-efbb-471f-xxx8-****.wav`
     */
    "VoiceCodes": string;
    /**
     * 语音文件类型。取值：
     * - **0**（默认值）：语音通知文件
     * - **2**：通话放音文件
     * @example `0`
     */
    "BusinessType"?: number;
}
