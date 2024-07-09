export interface IvrCallRequest {
    /**
     * 主叫号码。
     * 必须是已购买的号码，单次请求仅支持一个主叫号码。一般号码都有并发数，超过并发数会请求失败。您可以登录[语音服务控制台](https://dyvms.console.aliyun.com/overview/home)，在**语音号码>真实号管理**页面查看已购买的号码。
     * @example `0571****5678`
     */
    "CalledShowNumber": string;
    /**
     * 被叫号码。
     * 仅支持中国内地号码，单次请求仅支持一个号码。
     * @example `1590****000`
     */
    "CalledNumber": string;
    /**
     * 呼叫开始时播放的提示音。
     * - 语音文件：语音ID。您可以登录[语音服务控制台](https://dyvms.console.aliyun.com/overview/home)，在**语音文件管理**页面查看**语音ID**。
     * - 文本转语音模板：模板ID。您可以登录[语音服务控制台](https://dyvms.console.aliyun.com/overview/home)，在**语音消息**>**语音通知**>**文本转语音模板**页面查看**模板ID**。
     * @example `TTS_1234****`
     */
    "StartCode": string;
    /**
     * 文本转语音模板内的变量参数，格式为JSON。
     * > 当StartCode为文本转语音模板（TTS）且模板中带变量的情况下，此参数必填。
     * @example `{"name":"xxx","code":"123"}`
     */
    "StartTtsParams"?: string;
    /**
     * 重复播放次数。取值范围为**1~3**。
     * @example `3`
     */
    "PlayTimes"?: number;
    /**
     * 播放结束时播放的结束提示音。支持以下两种方式：
     * - 语音文件：语音ID。您可以登录[语音服务控制台](https://dyvms.console.aliyun.com/overview/home)，在**语音文件管理**页面查看**语音ID**。
     * - 文本转语音模板：模板ID。您可以登录[语音服务控制台](https://dyvms.console.aliyun.com/overview/home)，在**国内语音单呼**>**语音通知**>**文本转语音模板**页面查看**模板ID**。
     * > 参数ByeCode的类型需要与参数StartCode一致，即必须同时为语音文件或同时为文本转语音（TTS）模板。
     * @example `TTS_1234****`
     */
    "ByeCode"?: string;
    /**
     * 文本转语音模板中的变量参数。格式为JSON。
     * > 当ByeCode为文本转语音（TTS）模板且模板中带变量的情况下，此参数必填。
     * @example `{"name":"xxx","code":"123"}	`
     */
    "ByeTtsParams"?: string;
    /**
     * 等待用户按键超时时间。单位：毫秒。
     * @example `3000`
     */
    "Timeout"?: number;
    /**
     * 预留给调用方使用的ID。最终会通过在回执消息中将此ID带回给调用方。
     * 字符串类型，长度为1~15个字节。
     * @example `PR0210428****`
     */
    "OutId"?: string;
    /**
     * 按键信息。
     */
    "MenuKeyMap"?: {
        /**
         * 被叫方可按的电话按键。
         * @example `1`
         */
        Key: string;
        /**
         * 文本转语音模板内的变量参数，格式为JSON。
         * > - 当**MenuKeyMap.N.Code**是文本转语音模板（TTS）时，对应的模板变量替换关系。
         * > - 当**MenuKeyMap.N.Code**为文本转语音模板（TTS）且模板中带变量的情况下，此参数为必填。
         * @example `{"name":"xxx","code":"123"}`
         */
        TtsParams: string;
        /**
         * **MenuKeyMap.N.Key**中指定按键对应的提示音。支持以下两种方式：
         * - 语音文件：语音ID。您可以登录[语音服务控制台](https://dyvms.console.aliyun.com/overview/home)，在**语音文件管理**页面查看**语音ID**。
         * - 文本转语音模板：模板ID。您可以登录[语音服务控制台](https://dyvms.console.aliyun.com/overview/home)，在**语音消息**>**语音通知**>**文本转语音模板**页面查看**模板ID**。
         * @example `TTS_1235****`
         */
        Code: string;
    }[];
}
