export interface SendCcoSmartCallRequest {
    /**
     * 产品名称。默认取值：**aiccs**。
     * @example `aiccs`
     */
    "ProdCode"?: string;
    /**
     * 被叫显号，必须是已购买的号码。
     * 您可以登录[联络中心控制台](https://aiccs.console.aliyun.com/overview?spm=a2c4g.11186623.0.0.7f9bf9658X6jte)，查看已购买的号码。
     * @example `0571****0000`
     */
    "CalledShowNumber": string;
    /**
     * 被叫号码。仅支持中国内地号码。
     * @example `137****0000`
     */
    "CalledNumber": string;
    /**
     * 智能外呼放音文件，支持网络文件和TTS方式。其中，支持使用多个文件和TTS参数混播，之间用英文逗号（,）分隔。TTS参数的替换值在**VoiceCodeParam**中指定。
     * - 放音文件为网络文件时：参数VoiceCode指定为可被公网访问的语音文件URL，建议您使用采样频率为8000Hz或16000Hz且为wav格式的语音文件。
     * - 放音文件为TTS时：参数VoiceCode指定为变量名称如$name$，需要在VoiceCodeParam中设置变量对应的内容。
     * @example `2d4c-4e78-8d2a-afbb06cf****.wav,$name$`
     */
    "VoiceCode": string;
    /**
     * 预留给调用方使用的ID，最终会通过在回执消息中将此ID带回给调用方。
     * 字符串类型，长度为1~15个字节。
     * @example `222356****`
     */
    "OutId"?: string;
    /**
     * 参数暂不支持使用。
     * @example `1`
     */
    "PlayTimes"?: number;
    /**
     * 播放用户音频的音量，取值范围为：-4~4，建议设置为1。
     * @example `1`
     */
    "Volume"?: number;
    /**
     * 参数暂不支持使用。
     * @example `1`
     */
    "Speed"?: number;
    /**
     * ASR模型ID。请在[ASR模型管理页面](https://aiccs.console.aliyun.com/sentence/model/private?spm=a2c4g.11186623.0.0.7f9b2964fYSGv4)查看ASR模型ID。
     * @example `bf71664d30d2478fb8cb8c39c6b6****`
     */
    "AsrModelId"?: string;
    /**
     * SR基础模型。
     * - **customer_service_8k**：普通话。
     * - **dialect_customer_service_8k**：重口音。
     * - 如果仅设置**asrModelId**，表示使用指定的ASR模型。
     * - 如果仅设置**AsrBaseId**，表示使用指定的ASR基础模型。
     * - 如果二者均未设置，则使用默认的ASR基础模型，即参数**AsrBaseId**默认为**customer_service_8k**，表示使用ASR普通话基础模型。
     * - 如果二者同时设置，请确认二者是正确对应的。
     * > 调用接口**SendCcoSmartCall**时，需要指定使用的ASR模型，建议参数**asrModelId**和**AsrBaseId**二者选填一个。
     * @example `customer_service_8k`
     */
    "AsrBaseId"?: string;
    /**
     * 声学模型ID。
     * @example `123456`
     */
    "AsrAlsAmId"?: string;
    /**
     * 热词ID。请在[ASR热词管理页面](https://aiccs.console.aliyun.com/sentence/vocab?spm=a2c4g.11186623.0.0.7f9bf965IKBpsi)查看ASR热词ID。
     * @example `123456`
     */
    "AsrVocabularyId"?: string;
    /**
     * 通话过程中是否录音。
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "RecordFlag"?: boolean;
    /**
     * 停顿时长。用于设置用户停顿多久表示一句话结束。单位为毫秒。取值范围为**300~1200**，如果指定值不在参数范围中，则默认PauseTime为**800**。
     * > 首次设置有效，后续设置无效。
     * @example `800`
     */
    "PauseTime"?: number;
    /**
     * 静音时长，用于设置用户多久不说话通话结束。单位为：毫秒，取值范围为**1000~20000**。
     * - 如果指定值不在参数范围中，则默认MuteTime为**10000**。
     * - 通话过程中可动态设置，以最后一次设置为准。
     * @example `10000`
     */
    "MuteTime"?: number;
    /**
     * 开场放音文件是否可打断。默认为**true**，即开场放音文件可打断。
     * @example `true`
     */
    "ActionCodeBreak"?: boolean;
    /**
     * 预留给调用方使用的动态扩展ID，在回调地址中带回，用于客户的开发标识。
     * @example `123456`
     */
    "DynamicId"?: string;
    /**
     * 早媒体语音识别标识。设为true会记录通话未接听的原因。默认为**false**，即关闭状态。
     * > 如果需要启用早媒体语音识别标识，请手动设为**true**。
     * @example `false`
     */
    "EarlyMediaAsr"?: boolean;
    /**
     * TTS参数传递字符串，格式为JSON。必须与VoiceCode的TTS参数对应。
     * @example `{"name":"喂，你好"}`
     */
    "VoiceCodeParam"?: string;
    /**
     * 最大通话时长，单位为秒，超时后自动挂断。
     * @example `120`
     */
    "SessionTimeout"?: number;
    /**
     * 基于用户持续说话时长打断，在ActionCodeBreak为**true**时生效。单位为毫秒。
     * @example `120`
     */
    "ActionCodeTimeBreak"?: number;
    /**
     * 是否设置TTS声音参数。
     * - 指定为**true**：需要通过TtsStyle、TtsVolume、TtsSpeed三个参数来设置声音风格。
     * - 定为**false**：不需要设置相关参数，即便设置了也不生效。
     * @example `true`
     */
    "TtsConf"?: boolean;
    /**
     * TTS变量播放时的声音风格，默认为**xiaoyun**，具体风格请参见声音风格列表。
     * @example `xiaoyun`
     */
    "TtsStyle"?: string;
    /**
     * TTS变量播放的音量，取值范围为**0~100**，默认为**0**。
     * @example `10`
     */
    "TtsVolume"?: number;
    /**
     * TTS变量播放时的声音速度，取值范围为：-200~200，默认为0。
     * @example `100`
     */
    "TtsSpeed"?: number;
    /**
     * 用户和机器人对话时播放的背景语音文件ID。您可以登录[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)，选择**智能交互 > 语音文件管理**，单击**详情**，查看对应的语音ID。
     * @example `2d4c-4e78-8d2a-afbb06cf****.wav`
     */
    "BackgroundFileCode"?: string;
    /**
     * 参数暂不支持使用。
     * @example `1`
     */
    "BackgroundVolume"?: number;
    /**
     * 参数暂不支持使用。
     * @example `1`
     */
    "BackgroundSpeed"?: number;
    /**
     * 是否在后处理中执行ITN。
     * > 设置为**true**时，中文数字将转为阿拉伯数字输出，默认为**false**。
     * @example `true`
     */
    "EnableITN"?: boolean;
}
