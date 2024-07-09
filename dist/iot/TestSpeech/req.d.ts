export interface TestSpeechRequest {
    /**
     * 语料播报声音，由系统预设，例如标准女声、标准男声等。可以选择的声音类型通过[GetSpeechVoice](~~217887~~)进行查询，填入返回参数中`VoiceList`中`Value`的值。
     * @example `Siyue`
     */
    "Voice": string;
    /**
     * 音量大小，取值范围：0~100。
     * @example `50`
     */
    "Volume"?: number;
    /**
     * 项目ID，是项目的唯一标识，您可以通过[项目管理控制台](https://iot.console.aliyun.com/things-service/projects)获取项目ID。如果没有项目，可以创建项目后获取项目ID。
     * @example `4de2c367****8c585e5992**`
     */
    "ProjectCode": string;
    /**
     * 播报速度，取值范围：-500~500。
     * @example `0`
     */
    "SpeechRate"?: number;
    /**
     * 语料文本，当语料类型选择为自定义语料时，该参数必选。语料文本支持英文字母、汉字和空格，长度为1~100个字符，一个汉字占两个字符。
     * @example `test`
     */
    "Text"?: string;
    /**
     * 实例ID。<props="china"><ph>您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。</ph></props>
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * <props="china">实例的更多信息，请参见[如何获取实例ID](~~267533~~)。</props>
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 语料类型，分为自定义语料和常用语料。
     * > 不传入此参数时或传入**custom**，必须传入参数Text，否则调用会失败。
     * - 自定义语料（默认）：取值为**custom**，是自定义语料时，必须填写语料标识和语料文本。
     * - 常用语料：由系统预置的常用语料文本，包括以下类型：
     *     - 数字：取值为**number**，包含：数字0~9，点，幺。
     *     - 量词：取值为**measure_word**，包含：个，十，百，千，万，十万，百万，亿等。
     *     - 货币单位：取值为**monetary_unit**，包含：分，角，元等。
     *     - 时间单位：取值为**time_unit**，包含：时，分，秒，月，日，年等。
     *     - 单位时间：取值为**unit_time**，包含：每秒，每分，每小时，每天，每周，每月，每年等。
     *     - 长度单位：取值为**length_unit**，包含：毫米，厘米，分米，米，千米，公里，英寸，英尺，英里等。
     * @example `custom`
     */
    "SpeechType"?: string;
    /**
     * 音频格式，仅支持**wav**、**mp3**、**amr**格式。
     * @example `wav`
     */
    "AudioFormat"?: string;
    /**
     * 声码配置，包含字段如下：
     * - **SoundCodeContent**：声码营销内容，例如商品的详情地址等。
     * - **AdditionalDuration**：语料播放结束后的声码播放时长，单位为秒，取值范围为1～15。
     * @example `{"SoundCodeContent": "www.taobao.com", "AdditionalDuration": 3}`
     */
    "SoundCodeConfig"?: any;
    /**
     * 是否启用声码，若传入了true，必须传入参数SoundCodeConfig，否则调用会失败。
     * @example `true`
     */
    "EnableSoundCode"?: boolean;
}
