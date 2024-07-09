export interface UpdateSpeechRequest {
    /**
     * 更新创建语料时设置的语料播报声音，可以选择的声音类型通过[GetSpeechVoice](~~217887~~)进行查询，填入返回参数中**VoiceList**中**Value**的值。
     * @example `Siyue`
     */
    "Voice": string;
    /**
     * 语料ID，该参数可通过调用[QuerySpeechList](~~217576~~)查询。
     * @example ` VlKzbj3XIZ****CeIHH6vR82JNCSzk**`
     */
    "SpeechCode": string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 播报速度，默认值为0，取值范围：-500~500。
     * @example `0`
     */
    "SpeechRate"?: number;
    /**
     * 音量大小，默认值为50，取值范围：0~100。
     * @example `50`
     */
    "Volume"?: number;
    /**
     * 项目ID，是项目的唯一标识，您可以通过[项目管理控制台](https://iot.console.aliyun.com/things-service/projects)获取项目ID。
     * @example ` 4de2c367****8c585e5992**`
     */
    "ProjectCode": string;
    /**
     * 声码配置，包含字段如下：
     * - **SoundCodeContent**：声码营销内容，例如商品的详情地址等。
     * - **AdditionalDuration**：语料播放结束后的声码播放时长，单位为秒，取值范围为1～15。
     * @example `{"SoundCodeContent": "www.taobao.com", "AdditionalDuration": 3}`
     */
    "SoundCodeConfig"?: any;
    /**
     * 是否启用声码。
     * ><notice> 如果传入了**true**，必须传入参数**SoundCodeConfig**，否则调用会失败。
     * ></notice>
     * @example `true`
     */
    "EnableSoundCode"?: boolean;
}
