export interface BackendCallGroupRequest {
    /**
     * 被叫号码。上限为5万个。
     */
    "CalledNumber"?: string[];
    /**
     * 主叫号码。
     * 若您不填该参数，系统将会使用当地随机号码作为外显号码。
     * 若您专属号码外呼，则必须传入已购买的号码，仅支持一个号码。您可以登录国际语音服务控制台，选择"号码管理"查看已购买的号码。
     * @example `852****1111`
     */
    "CallerIdNumber"?: string;
    /**
     * 国家码。ISO2。
     * @example `HK`
     */
    "CountryId"?: string;
    /**
     * 语音文件的播放次数。取值范围：1~3。
     * @example `1`
     */
    "PlayTimes"?: number;
    /**
     * 发送类型：取值[1,2]。
     * 1： 立即开始发送任务，不等待。
     * 2： 定时开始发送任务。如果传该类型，TimingStart为必选字段。
     * @example `2`
     */
    "SendType"?: number;
    /**
     * 语速控制，取值范围：-500~500。
     * 音频类型为TTS时必传。录音文件可不传。
     * @example `0`
     */
    "Speed"?: number;
    /**
     * 任务名称。
     * @example `测试群呼`
     */
    "TaskName"?: string;
    /**
     * 定时发送的时间。
     * @example `2022-05-01T08:00:00+08:00`
     */
    "TimingStart"?: string;
    /**
     * 语音文件的语音ID。
     * 您可以登录国际语音服务控制台，选择"语音模板管理"-"文本转语音模板"，查看模板ID。
     * 此参数与VoiceCode二选一必填。分别代表使用语音文件作为呼叫内容呼叫或者使用固定模板文字作为呼叫内容。
     * @example `100001`
     */
    "TtsCode"?: string;
    /**
     * 文本转语音的模板ID。
     * 您可以登录国际语音服务控制台，选择"语音模板管理"-"语音文件"，查看模板ID。
     * 此参数与TtsCode二选一必填。分别代表使用语音文件作为呼叫内容呼叫或者使用固定模板文字作为呼叫内容。
     * @example `200001`
     */
    "VoiceCode"?: string;
    /**
     * 语音文件播放的音量。取值范围：0~100，默认取值100。
     * @example `100`
     */
    "Volume"?: number;
    /**
     * 预留给调用方使用的ID，最终会通过在回执消息中将此ID带回给调用方。
     * 字符串类型，长度为1~15个字节。
     * @example `22596****`
     */
    "OutId"?: string;
}
