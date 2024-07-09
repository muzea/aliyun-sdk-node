export interface AddTrancodeSEIRequest {
    /**
     * 播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属应用名称。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 播流名称。
     * > 必须为源流名称，所有的转码流都会添加上SEI信息。
     * @example `liveStream****`
     */
    "StreamName": string;
    /**
     * SEI文本。长度限制：4000字节。
     * @example `liveSei****`
     */
    "Text": string;
    /**
     * 追加到每一个关键帧或每一帧。取值：
     * - **keyframe**：关键帧。
     * - **frame**：每一帧。
     * @example `keyframe`
     */
    "Pattern": string;
    /**
     * 重复次数。-1代表无限。
     * @example `-1`
     */
    "Repeat": number;
    /**
     * 接收到命令后的延迟时间。单位： 毫秒。
     * @example `100`
     */
    "Delay": number;
}
