export interface CreateCallTaskRequest {
    /**
     * 通话的任务名称。
     * @example `语音通知`
     */
    "TaskName"?: string;
    /**
     * 语音模板类型。取值：
     * - **VMS\_VOICE_TTS**：语音通知文本转语音模板。
     * - **VMS\_VOICE_CODE**：语音通知文件模板。
     * - **VMS_TTS**：语音验证码模板。
     * @example `VMS_VOICE_CODE`
     */
    "BizType"?: string;
    /**
     * 模板Code。
     * - 如果是语音通知文本转语音模板，可以在[语音服务控制台](https://dyvms.console.aliyun.com/call/notify/list/textToVoice)**文本转语音模板**页面获取**模板ID**。
     * - 如果是语音通知文件模板，可以在[语音服务控制台](https://dyvms.console.aliyun.com/call/notify/list/voiceFiles)**语音通知文件**页面获取**语音ID**。
     * - 如果是语音验证码模板，可以在[语音服务控制台](https://dyvms.console.aliyun.com/call/code/list)**语音验证码**页面获取**模板ID**。
     * @example `TTS_2122****`
     */
    "TemplateCode"?: string;
    /**
     * 模板名称。
     * - 如果是语音通知文本转语音模板，可以在[语音服务控制台](https://dyvms.console.aliyun.com/call/notify/list/textToVoice)**文本转语音模板**页面获取**模板名称**。
     * - 如果是语音通知文件模板，可以在[语音服务控制台](https://dyvms.console.aliyun.com/call/notify/list/voiceFiles)**语音通知文件**页面获取**语音文件名**。
     * - 如果是语音验证码模板，可以在[语音服务控制台](https://dyvms.console.aliyun.com/call/code/list)**语音验证码**页面获取**模板名称**。
     * @example `语音通知模板`
     */
    "TemplateName"?: string;
    /**
     * 主叫号码类型。固定取值：**LIST**。
     * @example `LIST`
     */
    "ResourceType"?: string;
    /**
     * 主叫号码。目前仅支持虚拟号码。
     * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/virtual/list)**虚拟号管理**页面获取虚拟号码。
     * @example `05516214****`
     */
    "Resource"?: string;
    /**
     * 被叫号码类型。取值：
     * - **LIST**：用半角逗号（,）分隔被叫号码。
     * - **JSON**：JSON格式带模板参数的被叫号码列表。
     * @example `JSON`
     */
    "DataType"?: string;
    /**
     * 被叫号码。
     * - 当**DataType**取值为**LIST**时，被叫号码填写的格式为LIST格式。
     * - 当**DataType**取值为**JSON**时，被叫号码填写的格式为JSON格式。
     * @example ` { "paramNames":["name1","name2","key3"], "calleeList":[ { "callee":"1310000****", "params":["zangsan","zhangsan01","zhangsan02"] }, { "callee":"1310000****", "params":["zangsan","zhangsan01","zhangsan02"] } ] }`
     */
    "Data"?: string;
    /**
     * 参数暂不可用。
     * @example `1`
     */
    "FireTime"?: string;
    /**
     * 参数暂不可用。
     * @example `1`
     */
    "StopTime"?: string;
    /**
     * 参数暂不可用。
     * @example `1`
     */
    "ScheduleType"?: string;
}
