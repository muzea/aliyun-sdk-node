export interface CreateSharePromotionSpeechModelRequest {
    /**
     * 语料播报声音，由系统预设，例如标准女声、标准男声等。可以选择的声音类型通过[GetSpeechVoice](~~217887~~)进行查询，填入返回参数中**VoiceList**中**Value**的值。
     * @example `Xiaoyun`
     */
    "Voice": string;
    /**
     * 促销活动ID。
     * 调用接口**CreateSharePromotionActivity**返回的**Data**值。
     * @example `61******_****_4901_****_47***********`
     */
    "SharePromotionActivityId": string;
    /**
     * 语料类型，仅支持取值目前只支持固定值**custom**，表示自定义语料。
     * @example `custom`
     */
    "SpeechModelType": string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页签，查看当前实例的ID。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cv3********`
     */
    "IotInstanceId"?: string;
    /**
     * 语料标识，由用户自定义，支持英文字母和数字，长度为1~32个字符，项目下保证唯一。
     * 建议将语料语义的拼音首字母设置为语料标识，例如：`支付到账`设置为`ZFDZ`。
     * @example `ZFDZ`
     */
    "BizCode": string;
    /**
     * 播报速度，取值范围：-500~500。
     * @example `0`
     */
    "SpeechRate"?: number;
    /**
     * 音频格式，仅支持**wav**、**mp3**格式。
     * @example `wav`
     */
    "AudioFormat": string;
    /**
     * 音量大小，取值范围：0~100。
     * @example `50`
     */
    "Volume"?: number;
    /**
     * 分享任务的分享码。
     * 分享任务的分享码信息，请参见[使用共享设备播报分享语料](~~607661~~)。
     * @example `52******_7**e_4**3_9**e_61**********`
     */
    "ShareTaskCode": string;
    /**
     * 语料文本，支持英文字母、汉字和空格，长度为1~100个字符，一个汉字占两个字符。
     * @example `test`
     */
    "Text": string;
}
