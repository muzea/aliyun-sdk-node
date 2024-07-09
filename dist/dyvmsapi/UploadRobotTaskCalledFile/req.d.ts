export interface UploadRobotTaskCalledFileRequest {
    /**
     * 机器人呼叫任务的唯一任务ID。可通过[CreateRobotTask](~~CreateRobotTask~~)接口获取。
     * @example `1045****`
     */
    "Id": number;
    /**
     * 被叫号码。多个号码之间使用半角逗号（,）分隔。
     * > 在创建智能语音机器人任务后，需要分批上传被叫号码，每个任务最多上传30万个号码，可分多次上传完成。
     * @example `1370****000,1370****111`
     */
    "CalledNumber": string;
    /**
     * TTS模板的变量值。格式为JSON。TtsParam和TtsParamHead变量名称一一对应。
     * - 如果全部号码携带的参数相同，可将number字段里的值写为**all**，变量值仅需上传一份即可。
     * - 如果部分号码携带的参数相同，可将number字段里的值写为**all**，其他号码正常输入number值和对应的变量值，系统会优先取号码自带值。
     * @example `[{"number":"1370****000","params":["小王","小李","小周"]}]`
     */
    "TtsParam"?: string;
    /**
     * 带变量的呼叫任务。格式为JSON。变量名称列表，和TtsParam配合使用。
     * @example `["name1","name2","name3"]`
     */
    "TtsParamHead"?: string;
}
