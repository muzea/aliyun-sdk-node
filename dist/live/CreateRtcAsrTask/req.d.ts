export interface CreateRtcAsrTaskRequest {
    /**
     * 流模式，live或者rtc。live为正常直播流如rtmp。
     * @example `live`
     */
    "Mode": string;
    /**
     * 推流应用ID。
     * @example `appId`
     */
    "SDKAppID"?: string;
    /**
     * 房间号。
     * @example `channelId`
     */
    "ChannelID"?: string;
    /**
     * 推流用户ID。
     * @example `user1`
     */
    "RtcUserId"?: string;
    /**
     * 原音频语言。
     * @example `cn`
     */
    "Language": string;
    /**
     * 回调地址。
     * @example `http://xxx.com`
     */
    "CallbackURL": string;
    /**
     * 校验AuthKey，用于生成回调信息的MD5签名。
     * @example `abcd`
     */
    "AuthKey"?: string;
    /**
     * 开启翻译。
     * @example `true`
     */
    "TranslateEnabled"?: boolean;
    /**
     * 目标语种。
     * @example `en`
     */
    "TargetLanguages"?: string;
    /**
     * 断流最大延迟，超过则自动关闭任务。
     * @example `true`
     */
    "AutoTerminateEnabled"?: boolean;
    /**
     * 自动断流延时，单位s，建议不超过10s。
     * @example `5`
     */
    "AutoTerminateDelay"?: number;
    /**
     * 直播流地址，Mode=rtc时不填写。
     * @example `rtmp://xxx`
     */
    "StreamURL"?: string;
    /**
     * 上报间隔，单位s。
     * @example `5`
     */
    "ReportInterval"?: number;
    /**
     * 任务环境tag，默认不填写
     * @example `default`
     */
    "Tag"?: string;
}
