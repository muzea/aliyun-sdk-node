export interface DescribeTTSDemoRequest {
    /**
     * 实例ID
     * @example `a8eccb3c-2b26-4b6d-a54f-696b953e33a6`
     */
    "InstanceId": string;
    /**
     * 话术ID
     * @example `5ab2d935-306c-478a-88bf-d08e4e25c1b7`
     */
    "ScriptId"?: string;
    /**
     * 发音人信息，如：aixia / siyue / xiaoyun，完整发音人信息参考
     * https://ai.aliyun.com/nls/tts
     * @example `aixia`
     */
    "Voice": string;
    /**
     * 文本内容
     * @example `测试`
     */
    "Text": string;
    /**
     * 语速
     * [-500,500]之间整数。默认值为0。
     * 大于0表示加快语速。
     * 小于0表示减慢语速。
     * @example `0`
     */
    "SpeechRate": number;
    /**
     * 音量
     * [0,100]之间整数。默认值为50。
     * 大于50表示增大音量。
     * 小于50表示减小音量。
     * @example `50`
     */
    "Volume": number;
    /**
     * 语调
     * [-500,500]之间整数。默认值为0。
     * 大于0表示升高音高。
     * 小于0表示降低音高。
     * @example `0`
     */
    "PitchRate"?: number;
    "AppKey"?: string;
    "SecretKey"?: string;
    "AccessKey"?: string;
    "Engine"?: string;
}
