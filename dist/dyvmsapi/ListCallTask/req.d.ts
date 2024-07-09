export interface ListCallTaskRequest {
    /**
     * 当前页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的任务个数。默认取值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 模板名称。
     * - 如果是语音通知文本转语音模板，可以在[语音服务控制台](https://dyvms.console.aliyun.com/call/notify/list/textToVoice)**文本转语音模板**页面获取**模板名称**。
     * - 如果是语音通知文件模板，可以在[语音服务控制台](https://dyvms.console.aliyun.com/call/notify/list/voiceFiles)**语音通知文件**页面获取**语音文件名**。
     * - 如果是语音验证码模板，可以在[语音服务控制台](https://dyvms.console.aliyun.com/call/code/list)**语音验证码**页面获取**模板名称**。
     * @example `身份验证`
     */
    "TemplateName"?: string;
    /**
     * 任务状态。取值：
     * - **INIT**：新建任务，任务未启动。
     * - **RELEASE**：任务解析中。
     * - **RUNNING**：任务运行中。
     * - **STOP**：任务暂停。
     * - **SYSTEM_STOP**：系统暂停。
     * - **CANCEL**：任务取消。
     * - **SYSTEM_CANCEL**：系统取消。
     * - **DONE**：任务已完成。
     * > 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/call/task/list)**任务中心**页面，查看任务状态。
     * @example `INIT`
     */
    "Status"?: string;
    /**
     * 任务名称。
     * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/call/task/list)**任务中心**页面，查看任务名称。
     * @example `验证码`
     */
    "TaskName"?: string;
    /**
     * 任务ID。
     * - 通过[CreateCallTask接口](https://help.aliyun.com/zh/vms/developer-reference/api-dyvmsapi-2017-05-25-createcalltask?spm=a2c4g.11186623.0.0.51c25dac5r5vgj)获取任务ID。
     * - 在[语音服务控制台](https://dyvms.console.aliyun.com/call/task/list)**任务中心**页面，查看任务ID。
     * @example `18908**`
     */
    "TaskId"?: string;
    /**
     * 任务模板类型。取值：
     * - **VMS_VOICE_TTS**：语音通知文本转语音模板。
     * - **VMS_VOICE_CODE**：语音通知文件模板。
     * - **VMS_TTS**：语音验证码模板。
     * @example `VMS_TTS`
     */
    "BizType"?: string;
}
