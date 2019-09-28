interface DYVMSAPI {
    /**
    * 调用DeleteRobotTask删除智能语音任务。
    */ DeleteRobotTask(query: {
        "RegionId"?: string;
        /**
        * 主账号的ID，即UID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 机器人呼叫任务的唯一任务ID。
        * @example `1045001`
        */ "TaskId"?: number;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "Data": boolean;
    }>;
    /**
    * 调用接口QueryRobotInfoList查看机器人列表。
    */ QueryRobotInfoList(query: {
        "RegionId"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 审核状态，包括：
        * - **CONFIGURABLE**：可配置。
        * - **AUDITING**：审核中 。
        * - **AUDITPASS**：审核通过。
        * - **AUDITFAIL**：审核失败。
        * @example `AUDITING`
        */ "AuditStatus"?: string;
    }): Promise<{
        "Data": string;
        "Message": string;
        "RequestId": string;
        "Code": string;
    }>;
    /**
    * 调用CancelRobotTask终止智能语音任务。
    */ CancelRobotTask(query: {
        "RegionId"?: string;
        /**
        * 主账号的ID，即UID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 机器人呼叫任务的唯一任务ID。
        * @example `1045001`
        */ "TaskId"?: number;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "Data": boolean;
    }>;
    /**
    * 调用QueryRobotTaskList获取智能语音任务详情。
    */ QueryRobotTaskList(query: {
        "RegionId"?: string;
        /**
        * 主账号的ID，即UID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 任务名称
        * @example `任务测试`
        */ "TaskName"?: string;
        /**
        * 任务状态，状态如下：INIT                         未开始
        * READY                    准备开始
        * DISPATCH               解析中
        * EXCUTING              执行中
        * MANUAL_STOP     手动暂停
        * SYSTEM_STOP      系统暂停
        * ARREARS_STOP    欠费暂停
        * CANCEL                 手动终止
        * SYSTEM_CANCEL 系统终止
        * FINISH                    已完成
        * @example `EXCUTING`
        */ "Status"?: string;
        /**
        * 任务创建日期，yyyy-MM-dd格式。
        * @example `2019-06-14`
        */ "Time"?: string;
        /**
        * 分页参数，每页个数
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 分页参数，第几页
        * @example `1`
        */ "PageNo"?: number;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "Data": {
            "id": number;
            "taskName": string;
            "robotId": number;
            "robotName": string;
            "status": string;
            "scheduleType": string;
            "createTime": string;
            "completeTime": string;
            "fireTime": string;
            "totalCount": number;
            "finishCount": number;
        }[];
    }>;
    /**
    * 调用QueryRobotTaskDetail获取智能语音任务详情。
    */ QueryRobotTaskDetail(query: {
        "RegionId"?: string;
        /**
        * 主账号的ID，即UID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 机器人呼叫任务的唯一任务ID。
        * @example `1045001`
        */ "Id"?: number;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "Data": {
            "id": number;
            "taskName": string;
            "robotId": number;
            "robotName": string;
            "corpName": string;
            "caller": string;
            "numberStatusIdent": boolean;
            "status": string;
            "scheduleType": string;
            "retryType": number;
            "recallStateCodes": string;
            "recallTimes": number;
            "recallInterval": number;
            "createTime": string;
            "fireTime": string;
            "completeTime": string;
            "called": {
                "fileName": string;
                "ossFilePath": string;
            }[];
        };
    }>;
    /**
    * 调用QueryRobotTaskCallList查询智能语音任务通话列表。
    */ QueryRobotTaskCallList(query: {
        "RegionId"?: string;
        /**
        * 主账号的ID，即UID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 分页参数，当前页数
        * @example `1`
        */ "PageNo"?: number;
        /**
        * 分页参数，每页记录数
        * @example `20`
        */ "PageSize"?: number;
        /**
        * 机器人呼叫任务的唯一任务ID。
        * @example `1045001`
        */ "TaskId"?: string;
        /**
        * 通话时长，左边数值。
        * @example `0`
        */ "DurationFrom"?: string;
        /**
        * 通话时长，右边数值。
        * @example `60`
        */ "DurationTo"?: string;
        /**
        * 对话轮次，左边数值。
        * @example `0`
        */ "DialogCountFrom"?: string;
        /**
        * 对话轮次，右边数值。
        * @example `5`
        */ "DialogCountTo"?: string;
        /**
        * 挂断方向，0-用户，1-机器人。
        * @example `1`
        */ "HangupDirection"?: string;
        /**
        * 通话结果， 200002-占线，200005-无法接通，200010-关机，200011-停机，200012-呼损。
        * @example `200002`
        */ "CallResult"?: string;
        /**
        * 被叫号码。
        * @example `1300000000`
        */ "Called"?: string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "Data": {
            "taskId": number;
            "caller": string;
            "called": string;
            "duration": string;
            "label": string;
            "dialogCount": string;
            "callResult": string;
            "hangupDirection": string;
            "transferResult": string;
            "transferNumber": string;
            "transferFailReason": string;
            "callId": string;
            "recallCurTimes": number;
            "callStartTime": string;
            "callEndTime": string;
            "sureCount": number;
            "denyCount": number;
            "rejectCount": number;
            "customCount": number;
            "konwledgeCount": number;
            "defaultCount": number;
            "knowledgeBusinessCount": number;
            "knowledgeCommonCount": number;
        }[];
    }>;
    /**
    * 调用接口CreateRobotTask发起智能语音机器人外呼任务。
    */ CreateRobotTask(query: {
        "RegionId"?: string;
        /**
        * 主账号的ID，即UID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 任务名称。支持中文和英文，0~30个字符。
        * @example `批量任务测试`
        */ "TaskName"?: string;
        /**
        * 指定机器人ID，即话术ID。表示选择哪个机器人/话术发起呼叫。
        * 请在[话术管理页面](https://dyvms.console.aliyun.com/dyvms.htm#/smart-call/saas/robot/list)中查看**话术ID**。
        * @example `1234567`
        */ "DialogId"?: number;
        /**
        * 公司名称，和[资质管理页面](https://dyvms.console.aliyun.com/dyvms.htm#/corp/normal)中的**公司名称**完全一致，该参数为可选。
        * @example `阿里巴巴通信技术(北京)有限公司	`
        */ "CorpName"?: string;
        /**
        * 被叫号码。仅支持中国大陆号码。
        * 支持设置1~1000个被叫号码，号码之间使用英文逗号（,）分隔。
        * @example `13700000000`
        */ "Caller"?: string;
        /**
        * 号码状态(早媒体)识别标识。默认为fasle，如果需要启用早媒体语音识别标识，请设置为true。
        * @example `true`
        */ "NumberStatusIdent"?: boolean;
        /**
        * 是否自动重拨，1位重拨，0为不重拨。
        * @example `1`
        */ "RetryType"?: number;
        /**
        * 需要重拨的通话状态，200010为关机，200011为停机， 200002为占线， 200012为呼损，200005为无法接通。
        * @example `200010,200011`
        */ "RecallStateCodes"?: string;
        /**
        * 重拨次数。
        * @example `1`
        */ "RecallTimes"?: number;
        /**
        * 重拨间隔，单位为分钟，必须大于1。
        * @example `5`
        */ "RecallInterval"?: number;
        /**
        * 是否调用自有线路，默认为false。
        * @example `false`
        */ "IsSelfLine"?: boolean;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "Data": string;
    }>;
    /**
    * 调用接口IvrCall发起交互式语音通话。
    */ IvrCall(query: {
        "RegionId"?: string;
        /**
        * 被叫显号，必须是已购买的号码。
        * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal)上查看已购买的号码。
        * @example `4001112222`
        */ "CalledShowNumber": string;
        /**
        * 被叫号码。仅支持中国大陆号码。
        * @example `13700000000`
        */ "CalledNumber": string;
        /**
        * 呼叫开始时播放的提示音，可以指定为：
        * - **语音文件**：语音ID。可以在[文本转语音模板页面](https://dyvms.console.aliyun.com/dyvms.htm#/file/notify)查看语音ID。
        * - **文本转语音模板**：模板ID。可以在[文本转语音模板页面](https://dyvms.console.aliyun.com/dyvms.htm#/template)查看模板ID。
        * @example `TTS_1234`
        */ "StartCode": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 文本转语音模板（TTS）变量替换关系，格式为JSON。
        * > 当**StartCode**为文本转语音模板（TTS）、且模板中带变量的情况下此参数为必选。
        * @example `{“name”:”xxx”,”code”:”123”}`
        */ "StartTtsParams"?: string;
        "MenuKeyMap"?: string[];
        /**
        * 重复播放次数，取值范围为1~3。
        * @example `3`
        */ "PlayTimes"?: number;
        /**
        * 播放结束时播放的结束提示音，支持以下两种方式：
        * - 语音文件
        * - 文本转语音（TTS）模板
        * > 参数**ByeCode**的类型需要与参数**StartCode**一致，即必须同时为语音文件或文本转语音（TTS）模板。
        * @example `TTS_1234`
        */ "ByeCode"?: string;
        /**
        * 文本转语音模板变量替换关系，格式为JSON。
        * > 当**ByeCode**为文本转语音（TTS）模板、且模板中带变量的情况下此参数为必选。
        * @example `{“name”:”xxx”,”code”:”123”}	`
        */ "ByeTtsParams"?: string;
        /**
        * 等待用户按键超时时间，单位为毫秒。
        * @example `3000`
        */ "Timeout"?: number;
        /**
        * 预留给调用方使用的ID，最终会通过在回执消息中将此ID带回给调用方。
        * @example `abcdefgh`
        */ "OutId"?: string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "CallId": string;
    }>;
    /**
    * 调用接口QueryCallDetailByCallId查询指定通话的呼叫详情。
    */ QueryCallDetailByCallId(query: {
        "RegionId"?: string;
        /**
        * 通话的唯一识别ID。调用其他外呼接口发起通话后，返回参数中会携带**CallId**。
        * @example `116014888060^102816313060`
        */ "CallId": string;
        /**
        * 产品ID。
        * - **11000000300006**：语音通知。
        * - **11010000138001**：语音验证码。
        * - **11000000300005**：IVR。
        * - **11000000300004**：点击拨号。
        * - **11000000300009**：SIP。
        * - **11030000180001**：智能外呼。
        * @example `11000000300006`
        */ "ProdId": number;
        /**
        * 指定通话发生的时间，格式为Unix时间戳，单位毫秒。会查询这个时间点对应的一整天的记录。
        * @example `1553774465`
        */ "QueryDate": number;
        /**
        * 主账号的ID，即UID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "Code": string;
        "Data": string;
        "Message": string;
        "RequestId": string;
    }>;
    /**
    * 调用StartRobotTask启动智能语音任务或者定时启动智能语音任务。
    */ StartRobotTask(query: {
        "RegionId"?: string;
        /**
        * 主账号的ID，即UID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 机器人呼叫任务的唯一任务ID。
        * @example `1045001`
        */ "TaskId"?: number;
        /**
        * 定时启动时间，格式为yyyy-MM-dd HH:mm:ss。
        * @example `2019-06-14 14:55:23`
        */ "ScheduleTime"?: string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "Data": boolean;
    }>;
    /**
    * 调用StopRobotTask暂停智能语音任务。
    */ StopRobotTask(query: {
        "RegionId"?: string;
        /**
        * 主账号的ID，即UID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 机器人呼叫任务的唯一任务ID。
        * @example `1045001`
        */ "TaskId"?: number;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "Data": boolean;
    }>;
    /**
    * 调用接口ClickToDial发起一次双方通话。
    */ ClickToDial(query: {
        "RegionId"?: string;
        /**
        * 主叫显号，必须是已购买的号码。
        * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal)上查看已购买的号码。
        * @example `4001112221`
        */ "CallerShowNumber": string;
        /**
        * 主叫号码。仅支持中国大陆号码。
        * @example `13700000000`
        */ "CallerNumber": string;
        /**
        * 被叫显号，必须是已购买的号码。
        * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal)上查看已购买的号码。
        * @example `4001112222`
        */ "CalledShowNumber": string;
        /**
        * 被叫号码。仅支持中国大陆号码。
        * @example `13700000001`
        */ "CalledNumber": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 通话过程是否录音。
        * @example `true`
        */ "RecordFlag"?: boolean;
        /**
        * 是否开启实时ASR功能。
        * @example `true`
        */ "AsrFlag"?: boolean;
        /**
        * 整个通话的最长时长，单位为秒。超过该时长后系统自动挂断电话。
        * @example `100`
        */ "SessionTimeout"?: number;
        /**
        * ASR模型ID。请在[ASR模型管理页面](https://dyvms.console.aliyun.com/dyvms.htm#/smart-call/asr/1)查看ASR模型ID。
        * @example `2070aca1eff146f9a7bc826f1c3d4d33`
        */ "AsrModelId"?: string;
        /**
        * 预留给调用方使用的ID, 最终会通过在回执消息中将此ID带回给调用方。
        * 字符串类型，长度为1~15个字节。
        * @example `abcdefgh`
        */ "OutId"?: string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "CallId": string;
    }>;
    /**
    * 调用接口SingleCallByVoice发起语音文件类型的语音通知。
    */ SingleCallByVoice(query: {
        "RegionId"?: string;
        /**
        * 被叫显号，必须是已购买的号码。
        * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal)上查看已购买的号码。
        * @example `4001112222`
        */ "CalledShowNumber": string;
        /**
        * 被叫号码。仅支持中国大陆号码。
        * @example `13700000000`
        */ "CalledNumber": string;
        /**
        * 语音文件的语音ID，可以在[文本转语音模板页面](https://dyvms.console.aliyun.com/dyvms.htm#/file/notify)查看语音ID。
        * @example `2d4c-4e78-8d2a-afbb06cf6216.wav`
        */ "VoiceCode": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 语音文件的播放次数，取值范围为1~3。
        * @example `3`
        */ "PlayTimes"?: number;
        /**
        * 语音文件播放的音量。取值范围为0~100，默认为100。
        * @example `100`
        */ "Volume"?: number;
        /**
        * > 该参数为废弃参数，暂不支持使用。
        * @example `100`
        */ "Speed"?: number;
        /**
        * 预留给调用方使用的ID, 最终会通过在回执消息中将此ID带回给调用方。
        * 字符串类型，长度为1~15个字节。
        * @example `abcdefgh`
        */ "OutId"?: string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "CallId": string;
    }>;
    /**
    * 调用接口QueryCallDetailByTaskId查看指定机器人外呼任务的话单详情。
    */ QueryCallDetailByTaskId(query: {
        "RegionId"?: string;
        /**
        * 机器人呼叫任务的唯一任务ID，成功下发机器人外呼任务后返回。可以在控制台[任务列表](https://dyvms.console.aliyun.com/dyvms.htm#/smart-call/saas/task/list)中查看，或调用接口**BatchRobotSmartCall**成功后记录返回的参数**TaskId**。
        * @example `4001112222`
        */ "TaskId": string;
        /**
        * 机器人外呼任务的开始时间。Unix时间戳格式。
        * > 单位为毫秒。
        * @example `123456789000`
        */ "QueryDate": number;
        /**
        * 被叫号码。当前仅支持查看一个被叫号码的外呼记录。
        * @example `15900000000`
        */ "Callee": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "Data": string;
        "Message": string;
        "RequestId": string;
        "Code": string;
    }>;
    /**
    * 调用CancelOrderRobotTask取消定时启动智能语音任务。
    */ CancelOrderRobotTask(query: {
        "RegionId"?: string;
        /**
        * 主账号的ID，即UID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 机器人呼叫任务的唯一任务ID。
        * @example `1045001`
        */ "TaskId"?: number;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "Data": boolean;
    }>;
    /**
    * 调用接口SmartCallOperate在智能外呼通话中，发起指定动作。
    */ SmartCallOperate(query: {
        "RegionId"?: string;
        /**
        * 通话的唯一回执ID，由接口**SmartCall**返回。
        * @example `116012854210^102814279210`
        */ "CallId": string;
        /**
        * 在智能外呼通话中，指定被叫号码发起的动作。
        * > 当前仅支持参数**parallelBridge**，表示指定动作为被叫号码与呼叫中心坐席桥接。
        * @example `parallelBridge`
        */ "Command": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 扩展字段。
        * @example `Param`
        */ "Param"?: string;
    }): Promise<{
        "Code": string;
        "Message": string;
        "RequestId": string;
        "Status": string;
    }>;
    /**
    * 调用接口BatchRobotSmartCall发起机器人外呼任务。
    */ BatchRobotSmartCall(query: {
        "RegionId"?: string;
        /**
        * 被叫显号，必须是已购买的号码。
        * 支持设置1~100个被叫显号，号码之间使用英文逗号（,）分隔。
        * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal)上查看已购买的号码。
        * @example `4001112222`
        */ "CalledShowNumber": string;
        /**
        * 被叫号码。仅支持中国大陆号码。
        * 支持设置1~1000个被叫号码，号码之间使用英文逗号（,）分隔。
        * @example `13700000000`
        */ "CalledNumber": string;
        /**
        * 指定机器人ID，即话术ID。表示选择哪个机器人/话术发起呼叫。
        * 请在[话术管理页面](https://dyvms.console.aliyun.com/dyvms.htm#/smart-call/saas/robot/list)中查看**话术ID**。
        * @example `1234567`
        */ "DialogId": string;
        /**
        * 任务名称。支持中文和英文，0~30个字符。
        * @example `批量任务测试	`
        */ "TaskName": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 公司名称，必须和[资质管理页面](https://dyvms.console.aliyun.com/dyvms.htm#/corp/normal)中的**公司名称**完全一致。
        * > 如果开通了**自有线路**功能，即**isSelfLine**为**true**时，该参数为可选。反之则必须填写公司名称。
        * @example `阿里巴巴通信技术(北京)有限公司	`
        */ "CorpName"?: string;
        /**
        * 早媒体语音识别标识。默认为fasle，如果需要启用早媒体语音识别标识，请设置为true。
        * @example `true`
        */ "EarlyMediaAsr"?: boolean;
        /**
        * 预设的呼叫时间。Unix时间戳格式，单位为毫秒。
        * > 当参数**ScheduleCall**为true时必选。
        * @example `1554110977000`
        */ "ScheduleTime"?: number;
        /**
        * 是否定时呼叫。如果设置为true，则必须设置**ScheduleTime**。
        * @example `true`
        */ "ScheduleCall"?: boolean;
        /**
        * TTS模板的变量值，格式为JSON。
        * 必须和具体的号码对应、TtsParam和上面的TtsParamHead变量名称一一对应。
        * @example `[{“number”:”13700000000”,”params”:[“小王”,”小李”,”小周”]}]`
        */ "TtsParam"?: string;
        /**
        * 带变量的呼叫任务，格式为JSON。变量名称列表，和下面的ttsParam配合使用
        * @example `[“name1”,”name2”,”name3”]`
        */ "TtsParamHead"?: string;
        /**
        * 是否调用自有线路，默认为false。
        * @example `true`
        */ "IsSelfLine"?: boolean;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "TaskId": string;
    }>;
    /**
    * 调用接口SingleCallByTts发起语音通知，播放的音频为文本转语音模板转换后的音频文件。
    */ SingleCallByTts(query: {
        "RegionId"?: string;
        /**
        * 被叫显号，必须是已购买的号码。
        * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal)上查看已购买的号码。
        * @example `4001112222`
        */ "CalledShowNumber": string;
        /**
        * 被叫号码。仅支持中国大陆号码。
        * @example `13700000000`
        */ "CalledNumber": string;
        /**
        * 文本转语音（TTS）模板ID。可以在[文本转语音模板页面](https://dyvms.console.aliyun.com/dyvms.htm#/template)查看模板ID。
        * > 必须是已审核通过的文本转语音模板。
        * @example `TTS_10001`
        */ "TtsCode": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 文本转语音（TTS）模板变量转换关系，格式为JSON。
        * @example `{“AckNum”:”123456”}`
        */ "TtsParam"?: string;
        /**
        * 语音通知的播放次数，取值范围为1~3。
        * @example `3`
        */ "PlayTimes"?: number;
        /**
        * 语音通知的播放音量。取值范围为0~100，默认为100。
        * @example `100`
        */ "Volume"?: number;
        /**
        * > 该参数为废弃参数，暂不支持使用。
        * @example `5`
        */ "Speed"?: number;
        /**
        * 预留给调用方使用的ID, 最终会通过在回执消息中将此ID带回给调用方。
        * 字符串类型，长度为1~15个字节。
        * @example `abcdefgh`
        */ "OutId"?: string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "CallId": string;
    }>;
    /**
    * 调用接口CancelCall取消点击呼叫接口ClickToDial发起的呼叫。
    */ CancelCall(query: {
        "RegionId"?: string;
        /**
        * 此次通话的唯一回执ID，可以从接口**ClickToDial**的返回信息中获取。
        * @example `116012854210^102814279210`
        */ "CallId": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "Code": string;
        "Message": string;
        "RequestId": string;
        "Status": string;
    }>;
    /**
    * 调用接口SmartCall发起智能语音交互通话。
    */ SmartCall(query: {
        "RegionId"?: string;
        /**
        * 被叫显号，必须是已购买的号码。
        * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal)上查看已购买的号码。
        * @example `4001112222`
        */ "CalledShowNumber": string;
        /**
        * 被叫号码。仅支持中国大陆号码。
        * @example `13700000000`
        */ "CalledNumber": string;
        /**
        * 智能外呼放音文件，支持网络文件、控制台上传的语音文件和TTS三种方式。其中，支持使用多个文件和TTS参数混播，之间用逗号分隔。TTS参数的替换值在**VoiceCodeParam**中指定。
        * - 放音文件为网络文件时：参数**VoiceCode**指定为可被公网访问的语音文件URL。
        * - 放音文件为控制台上传的语音文件时：参数**VoiceCode**指定为文件的语音ID。可以在[智能外呼放音文件](https://dyvms.console.aliyun.com/dyvms.htm#/file/smartcall)中单击进入文件详情，查看智能外呼放音文件的**语音ID**。
        * - 放音文件为TTS时：参数**VoiceCode**指定为文本转语音（TTS）模板的模板ID。可以在[文本转语音模板](https://dyvms.console.aliyun.com/dyvms.htm#/template)中查看**模板ID**。
        * > 如需将放音文件设置为网络文件或TTS，请先[提交云工单](https://selfservice.console.aliyun.com/ticket/category/dyvms/today)联系小二开通。
        * @example `2d4c-4e78-8d2a-afbb06cf6216.wav,$name$`
        */ "VoiceCode": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 通话过程中是否录音。
        * @example `true`
        */ "RecordFlag"?: boolean;
        /**
        * 播放音频的音量，取值范围为-4~4，建议设置为1。
        * @example `1`
        */ "Volume"?: number;
        /**
        * > 该参数为废弃参数，暂不支持使用。
        * @example `1`
        */ "Speed"?: number;
        /**
        * ASR模型ID。请在[ASR模型管理页面](https://dyvms.console.aliyun.com/dyvms.htm#/smart-call/asr/1)查看ASR模型ID。
        * @example `155780923770`
        */ "AsrModelId"?: string;
        /**
        * 停顿时长，单位为毫秒。取值范围为300~1200，如果指定值不在参数范围中，则默认**PauseTime**为800。
        * @example `800`
        */ "PauseTime"?: number;
        /**
        * 静音时长，单位为ms，取值范围为1000~20000，如果指定值不在参数范围中，则默认**MuteTime**为10000。
        * @example `10000`
        */ "MuteTime"?: number;
        /**
        * 开场放音文件是否可打断。默认为true，即开场放音文件可打断。
        * @example `true`
        */ "ActionCodeBreak"?: boolean;
        /**
        * 预留给调用方使用的ID, 最终会通过在回执消息中将此ID带回给调用方。
        * 字符串类型，长度为1~15个字节。
        * @example `abcdefgh`
        */ "OutId"?: string;
        /**
        * 预留给调用方使用的动态扩展ID，在回调地址中带回，用于客户的开发标识。
        * @example `abcdefgh`
        */ "DynamicId"?: string;
        /**
        * 早媒体语音识别标识。默认为fasle，即关闭状态，如果需要启用早媒体语音识别标识，请手动设为true。
        * @example `true`
        */ "EarlyMediaAsr"?: boolean;
        /**
        * TTS参数传递字符串，格式为JSON。
        * > 必须与**VoiceCode**的TTS参数对应。
        * @example `“{\”name\”:\”喂，你好\”}”`
        */ "VoiceCodeParam"?: string;
        /**
        * 最大通话时长，单位为秒，超时后自动挂断。
        * @example `120`
        */ "SessionTimeout"?: number;
        /**
        * 基于用户持续说话时长打断，在AtionCodeBreak为true时生效。单位为毫秒。
        * > **ActionCodeTimeBreak**取值必须大于0。
        * @example `120`
        */ "ActionCodeTimeBreak"?: number;
        /**
        * TTS变量播放时的声音风格，默认为**xiaoyan**，具体风格见声音风格列表。
        * @example `xiaoyun`
        */ "TtsStyle"?: string;
        /**
        * TTS变量播放的音量，取值范围为0~100，默认为0。
        * @example `10`
        */ "TtsVolume"?: number;
        /**
        * TTS变量播放时的声音速度，取值范围为-200~200，默认为0。
        * @example `100`
        */ "TtsSpeed"?: number;
        /**
        * 是否设置TTS声音参数。
        * - 指定为**true**：需要通过**TtsStyle**、**TtsColume**、**TtsSpeed**三个参数来设置声音风格。
        * - 指定为**false**：不需要设置相关参数，即便设置了也不生效。
        * @example `true`
        */ "TtsConf"?: boolean;
        /**
        * ASR基础模型。可设置为：
        * - **customer_service_8k**：普通话。
        * - **dialect_customer_service_8k**：重口音。
        * **注意**：
        * 调用接口**SmartCall**时，需要指定使用的ASR模型，建议参数**asrModelId**和**AsrBaseId**二者选填一个。
        * - 如果仅设置**asrModelId**，表示使用指定的ASR模型。
        * - 如果仅设置**AsrBaseId**，表示使用指定的ASR基础模型。
        * - 如果二者均未设置，则使用默认的ASR基础模型，即参数**AsrBaseId**默认为**customer_service_8k**，表示使用ASR普通话基础模型。
        * - 如果二者同时设置，请确认二者是正确对应的。
        * @example `customer_service_8k`
        */ "AsrBaseId"?: string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "CallId": string;
    }>;
    /**
    * 调用QueryRobotTaskCallDetail查询智能语音任务通话详情。
    */ QueryRobotTaskCallDetail(query: {
        "RegionId"?: string;
        /**
        * 主账号的ID，即UID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 机器人呼叫任务的唯一任务ID。
        * @example `1045001`
        */ "TaskId"?: number;
        /**
        * 被叫号码
        * @example `13000000000`
        */ "Callee"?: string;
        /**
        * 需要查询时间的时间戳。
        * @example `1562297550000`
        */ "QueryDate"?: number;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "Data": {
            "taskId": number;
            "caller": string;
            "called": string;
            "duration": string;
            "label": string;
            "dialogCount": string;
            "callResult": string;
            "hangupDirection": string;
            "transferResult": string;
            "transferNumber": string;
            "transferFailReason": string;
            "callId": string;
            "recallCurTimes": number;
            "callStartTime": string;
            "callEndTime": string;
            "sureCount": number;
            "denyCount": number;
            "rejectCount": number;
            "customCount": number;
            "konwledgeCount": number;
            "defaultCount": number;
            "knowledgeBusinessCount": number;
            "knowledgeCommonCount": number;
        };
    }>;
    /**
    * 调用QueryRobotv2AllList获取机器人全量列表。
    */ QueryRobotv2AllList(query: {
        "RegionId"?: string;
        /**
        * 主账号的ID，即UID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "Data": {
            "id": number;
            "robotName": string;
            "robotType": string;
        };
    }>;
    /**
    * 调用UploadRobotTaskCalledFile上传智能语音任务的被叫号码。
    */ UploadRobotTaskCalledFile(query: {
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
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "Data": string;
    }>;
    AddRtcAccount(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "DeviceId"?: string;
    }): Promise<{}>;
    GetRtcToken(query: {
        "RegionId"?: string;
        "UserId": string;
        "DeviceId": string;
        "OwnerId"?: number;
        "IsCustomAccount"?: boolean;
    }): Promise<{}>;
    VoipAddAccount(query: {
        "RegionId"?: string;
        "DeviceId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    VoipGetToken(query: {
        "RegionId"?: string;
        "VoipId": string;
        "DeviceId": string;
        "OwnerId"?: number;
        "IsCustomAccount"?: boolean;
    }): Promise<{}>;
    BindNumberAndVoipId(query: {
        "RegionId"?: string;
        "PhoneNumber": string;
        "VoipId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    UnbindNumberAndVoipId(query: {
        "RegionId"?: string;
        "PhoneNumber": string;
        "VoipId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
}
export default DYVMSAPI;
