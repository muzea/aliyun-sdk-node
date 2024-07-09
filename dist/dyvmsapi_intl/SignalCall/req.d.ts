export interface SignalCallRequest {
    /**
     * 认证签名。自动补全，无需写入。
     * @example `9****************D`
     */
    "Signature"?: string;
    /**
     * 写入记录的时间。自动补全，无需写入。
     * @example `20**-**-**T**%3A25%3A10Z`
     */
    "Timestamp"?: string;
    /**
     * 签名唯一的随机数。自动补全，无需写入。
     * @example `l*********y`
     */
    "SignatureNonce"?: string;
    /**
     * 主叫号码。  若您不填该参数，系统将会使用当地随机号码作为外显号码。 若您专属号码外呼，则必须传入已购买的号码，仅支持一个号码。您可以登录国际语音服务控制台，选择"号码管理"查看已购买的号码。
     * @example `852****0001`
     */
    "CallerIdNumber"?: string;
    /**
     * 接收语音通知的手机号码。  号码格式：国际码+号码： 示例：85200****00。
     * @example `852****0000`
     */
    "CalledNumber"?: string;
    /**
     * 文本转语音模板的语音ID。  您可以登录国际语音服务控制台，选择"语音模板管理"-"文本转语音模板"，查看模板ID。  此参数与VoiceCode二选一必填。分别代表使用语音文件作为呼叫内容呼叫或者使用固定模板文字作为呼叫内容。
     * @example `1001`
     */
    "TtsCode"?: string;
    /**
     * 模板中的变量参数，JSON格式。
     * @example `{"code":"1234"}`
     */
    "TtsParam"?: string;
    /**
     * 语音文件的模板ID。  您可以登录国际语音服务控制台，选择"语音模板管理"-"语音文件"，查看模板ID。  此参数与TtsCode二选一必填。分别代表使用语音文件作为呼叫内容呼叫或者使用固定模板文字作为呼叫内容。
     * @example `1002`
     */
    "VoiceCode"?: string;
    /**
     * 一通电话内语音通知内容的播放次数。取值范围：1~3，默认取值3。
     * @example `2`
     */
    "PlayTimes"?: number;
    /**
     * 语音通知的播放音量。取值范围：0~100，默认取值100。
     * @example `100`
     */
    "Volume"?: number;
    /**
     * 语速控制。取值范围为：-500~500。
     * @example `0`
     */
    "Speed"?: number;
    /**
     * 国家/地区二字码，ISO2。
     * @example `HK`
     */
    "CountryId"?: string;
    /**
     * 任务名称。
     * @example `单呼任务名`
     */
    "TaskName"?: string;
    /**
     * 发送类型：取值[1,2]。  1： 立即开始发送任务，不等待。  2： 定时开始发送任务。如果传该类型，TimingStart为必选字段。
     * @example `1`
     */
    "SendType"?: number;
    /**
     * 定时发送的时间。
     * @example `2022-05-01T08:00:00+08:00`
     */
    "TimingStart"?: string;
    /**
     * 预留给调用方使用的ID，最终会通过在回执消息中将此ID带回给调用方。  字符串类型，长度为1~15个字节。
     * @example `22522****`
     */
    "OutId"?: string;
}
