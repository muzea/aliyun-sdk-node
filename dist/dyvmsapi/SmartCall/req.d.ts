interface SmartCallRequest {
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
}
export { SmartCallRequest };