export interface SpeechBySynthesisRequest {
    /**
     * 语料播报声音，由系统预设，例如标准女声、标准男声等。可以选择的声音类型通过[GetSpeechVoice](~~217887~~)进行查询，填入返回参数中`VoiceList`中`Value`的值。
     * @example `Siyue`
     */
    "Voice": string;
    /**
     * 设备ID，该参数可以通过调用[QuerySpeechDevice](~~280408~~)获取。
     * >如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
    /**
     * 播报速度，取值范围：-500~500。
     * @example `0`
     */
    "SpeechRate"?: number;
    /**
     * 语料文本，当语料类型选择为自定义语料时，该参数必选。语料文本支持英文字母、汉字和空格，长度为1~100个字符，一个汉字占两个字符。
     * @example `test`
     */
    "Text": string;
    /**
     * 设备所属的产品**ProductKey**。如果传入该参数，需同时传入**DeviceName**。
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 设备的**DeviceName**。
     * 如果传入该参数，需同时传入**ProductKey**。
     * @example `test`
     */
    "DeviceName"?: string;
    /**
     * 下发给设备的唯一播报ID。
     * ><notice>
     * 若不传入则由系统生成，若业务上进行重试播报，需传入重试的播报ID，避免出现重复业务播报。
     * ></notice>
     * @example `42000011392021112380********`
     */
    "SpeechId"?: string;
    /**
     * 音频格式，仅支持**wav**、**mp3**、**amr**格式。
     * @example `wav`
     */
    "AudioFormat": string;
    /**
     * 音量大小，取值范围：0~100。
     * @example `50`
     */
    "Volume"?: number;
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
}
