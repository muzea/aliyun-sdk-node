export interface SmartCallRequest {
    /**
     * 被叫显号。必须是已购买的号码。
     * 您可以登录[语音服务控制台](https://dyvms.console.aliyun.com/overview/home)，在**语音号码**>**真实号管理**页面查看已购买的号码。
     * @example `0571****5678`
     */
    "CalledShowNumber": string;
    /**
     * 被叫号码。仅支持中国内地号码。
     * @example `1590****0000`
     */
    "CalledNumber": string;
    /**
     * 智能外呼放音文件。
     * 支持网络文件、控制台上传的语音文件和TTS三种方式。其中，支持使用多个文件和TTS参数混播，之间用英文逗号（,）分隔。TTS参数的替换值在**VoiceCodeParam**中指定。
     * - 当放音文件为网络文件时：参数**VoiceCode**指定为可被公网访问的语音文件URL。
     * - 当放音文件为控制台上传的语音文件时：参数**VoiceCode**指定为文件的语音ID。您可以登录[语音服务控制台](https://dyvms.console.aliyun.com/overview/home)，选择**语音文件管理**>**智能语音交互放音文件**，单击**详情**查看对应的**语音ID**。
     * - 当放音文件为TTS时：参数**VoiceCode**指定为变量名称如$name$，需要在**VoiceCodeParam**中设置变量对应的内容。
     * @example `2d4c-4e78-8d2a-afbb06cf****.wav,$name$`
     */
    "VoiceCode": string;
    /**
     * 通话过程中是否录音。取值：
     * - **true**：录音。
     * - **false**：不录音。
     * @example `true`
     */
    "RecordFlag"?: boolean;
    /**
     * 播放用户音频的音量。取值范围：**-4~4**，建议设置为**1**。
     * @example `1`
     */
    "Volume"?: number;
    /**
     * 参数暂不支持使用。
     * @example `1`
     */
    "Speed"?: number;
    /**
     * ASR模型ID。
     * 您可以登录[语音服务控制台](https://dyvms.console.aliyun.com/overview/home)，在**ASR语言模型管理**中查看ASR模型ID。
     * > 调用SmartCall接口时需要指定使用的ASR模型，建议参数AsrModelId和AsrBaseId二者选填其一。
     * > - 如果仅设置AsrModelId，表示使用指定的ASR模型。
     * > - 如果仅设置AsrBaseId，表示使用指定的ASR基础模型。
     * > - 如果二者均未设置，则使用默认的ASR基础模型，即参数AsrBaseId默认为customer_service_8k，表示使用ASR普通话基础模型。
     * > - 如果二者同时设置，请确认二者是正确对应的。
     * @example `2070aca1eff146f9a7bc826f1c3d****`
     */
    "AsrModelId"?: string;
    /**
     * 停顿时长。用于设置用户停顿多久表示一句话结束。单位：毫秒，取值范围：**300~1200**。
     * > - 如果指定值不在参数范围中，则该参数默认取值为**800**。
     * > - 该参数首次设置有效，后续设置无效。
     * @example `800`
     */
    "PauseTime"?: number;
    /**
     * 静音时长。用于设置用户多久不说话通话结束。单位：毫秒，取值范围：**1000~20000**。
     * > - 如果指定值不在参数范围中，则该参数默认取值为**10000**。
     * > - 通话过程中可动态设置，以最后一次设置为准。
     * @example `10000`
     */
    "MuteTime"?: number;
    /**
     * 当前返回的媒体文件是否可以被打断。默认取值为**true**，即可被打断。
     * 如果为false，即使下一个动作action_break为true，也无法打断当前放音。
     * > action_code_break优先级高于action_break。
     * @example `true`
     */
    "ActionCodeBreak"?: boolean;
    /**
     * 预留给调用方使用的ID。 最终会通过在回执消息中将此ID带回给调用方。
     * 字符串类型，长度为1~15个字节。
     * @example `342268*****`
     */
    "OutId"?: string;
    /**
     * 预留给调用方使用的动态扩展ID。在回调地址中带回，用于客户的开发标识。
     * @example `abcdefgh`
     */
    "DynamicId"?: string;
    /**
     * 早媒体语音识别标识。取值：
     * - **false**（默认）：关闭。
     * - **true**：开启。
     * > 设为**true**会记录通话未接听的原因。
     * @example `true`
     */
    "EarlyMediaAsr"?: boolean;
    /**
     * TTS参数传递字符串，格式为JSON。必须与**VoiceCode**的TTS参数对应。
     * @example `{"name":"喂,你好"}`
     */
    "VoiceCodeParam"?: string;
    /**
     * 最大通话时长，超时后自动挂断。单位：秒。
     * > 通话时长最长3600秒。
     * @example `120`
     */
    "SessionTimeout"?: number;
    /**
     * 基于用户持续说话时长打断。单位：毫秒。
     * 如果当前媒体文件ActionCodeBreak为**true**，用户持续说话可以打断当前播放。不设置或者为0，不生效。
     * @example `120`
     */
    "ActionCodeTimeBreak"?: number;
    /**
     * TTS变量播放时的声音风格。默认为**xiaoyun**。具体风格，请参见下表**声音风格列表**。
     * @example `xiaoyun`
     */
    "TtsStyle"?: string;
    /**
     * TTS变量播放的音量。取值范围：**0~100**，默认值为**0**。
     * @example `10`
     */
    "TtsVolume"?: number;
    /**
     * TTS变量播放时的声音速度。取值范围：**-200~200**，默认值为**0**。
     * @example `100`
     */
    "TtsSpeed"?: number;
    /**
     * 是否设置TTS声音参数。取值：
     * - **true**：设置。需要通过**TtsStyle**、**TtsVolume**、**TtsSpeed**三个参数来设置声音风格。
     * - **false**：不设置。不需要设置相关参数，即便设置了也不生效。
     * @example `true`
     */
    "TtsConf"?: boolean;
    /**
     * ASR基础模型。取值：
     * - **customer_service_8k**（默认）：普通话。
     * - **dialect_customer_service_8k**：重口音。
     * > 调用SmartCall接口时需要指定使用的ASR模型，建议参数AsrModelId和AsrBaseId二者选填其一。
     * > - 如果仅设置AsrModelId，表示使用指定的ASR模型。
     * > - 如果仅设置AsrBaseId，表示使用指定的ASR基础模型。
     * > - 如果二者均未设置，则使用默认的ASR基础模型，即参数AsrBaseId默认为customer_service_8k，表示使用ASR普通话基础模型。
     * > - 如果二者同时设置，请确认二者是正确对应的。
     * @example `customer_service_8k`
     */
    "AsrBaseId"?: string;
    /**
     * 流式ASR，根据用户说的前几个字智能判断语义。取值：
     * - **0**：关闭。
     * - **1**：开启。
     * @example `1`
     */
    "StreamAsr"?: number;
    /**
     * 用户和机器人对话时播放的背景语音文件ID。
     * 您可以登录[语音服务控制台](https://dyvms.console.aliyun.com/overview/home)，选择**语音文件管理**>**智能语音交互放音文件**，单击**详情**按钮，查看对应的语音ID。
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
     * 是否在后处理中执行ITN。默认为**false**，即不执行。
     * 设置为**true**时，中文数字将转为阿拉伯数字输出。
     * @example `false`
     */
    "EnableITN"?: boolean;
    "NoiseThreshold"?: number;
}
