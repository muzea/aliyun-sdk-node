interface UploadRobotTaskCalledFileRequest {
    "RegionId"?: string;
    /**
    * 主账号的ID，即UID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 机器人呼叫任务的唯一任务ID。
    * @example `1045001`
    */ "Id"?: number;
    /**
    * 被叫号码，支持设置多个，号码之间使用英文逗号（,）分隔。
    * @example `13700000000, 13711111111`
    */ "CalledNumber"?: string;
    /**
    * TTS模板的变量值，格式为JSON。必须和具体的号码对应、TtsParam和上面的TtsParamHead变量名称一一对应。
    * @example `[{“number”:”13700000000”,”params”:[“小王”,”小李”,”小周”]}]`
    */ "TtsParam"?: string;
    /**
    * 带变量的呼叫任务，格式为JSON。变量名称列表，和下面的ttsParam配合使用。
    * @example `[“name1”,”name2”,”name3”]`
    */ "TtsParamHead"?: string;
}
export { UploadRobotTaskCalledFileRequest };