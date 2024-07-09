export interface BackendCallSignalRequest {
    /**
     * 接收语音通知的手机号码。
     * 号码格式：国际码+号码：
     * 示例：85200****00。
     * @example `852****0000`
     */
    "CalledNumber"?: string;
    /**
     * 主叫号码。
     * 若您不填该参数，系统将会使用当地随机号码作为外显号码。
     * 若您专属号码外呼，则必须传入已购买的号码，仅支持一个号码。您可以登录国际语音服务控制台，选择"号码管理"查看已购买的号码。
     * @example `852****0000`
     */
    "CallerIdNumber"?: string;
    /**
     * 国家二字码，ISO2
     * @example `HK`
     */
    "CountryId"?: string;
    /**
     * 一通电话内语音通知内容的播放次数。取值范围：1~3，默认取值3。
     * @example `2`
     */
    "PlayTimes"?: number;
    /**
     * 语速控制。取值范围为：-500~500。
     * @example `0`
     */
    "Speed"?: number;
    /**
     * 已通过审核的语音验证码模板ID。
     * 您可以登录国际语音服务控制台，选择"国际语音-语音模板管理-文本转语音模板"查看模板ID。
     * @example `1001`
     */
    "TtsCode"?: string;
    /**
     * 模板中的变量参数，JSON格式。
     * @example `{"code":"1234"}`
     */
    "TtsParam"?: string;
    /**
     * 语音通知的播放音量。取值范围：0~100，默认取值100。
     * @example `100`
     */
    "Volume"?: number;
    /**
     * 预留给调用方使用的ID，最终会通过在回执消息中将此ID带回给调用方。
     * 字符串类型，长度为1~15个字节。
     * @example `22522****`
     */
    "OutId"?: string;
}
