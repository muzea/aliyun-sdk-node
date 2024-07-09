export interface UpdateRtcMPUEventSubRequest {
    /**
     * 订阅的应用ID。
     * > 应用ID由大小写字母、数字、下划线、短划线（-）组成，最大64字符。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 指定接收回调的混流任务的频道ID，可以同时填多个频道ID，多个频道ID之间采用英文逗号“,”隔开。
     * > - 如果不填，则默认接收该AppId下的所有混流转推的回调事件。
     * - 同时填多个频道ID时，不能填写重复的频道ID，最多同时填20个频道ID。
     * - 每个频道ID由大小写字母、数字、下划线、短划线（-）组成，最大64字符。
     * @example `yourChannelIds`
     */
    "ChannelIds"?: string;
    /**
     * 回调地址。
     * > 回调地址协议头为HTTP、HTTPS等，仅可包含以下字符：a-z 、A-Z、0-9、-、_、?、%、=、#、.、/ 和 +，不超过2083个字符。
     * @example `http://****.com/callback`
     */
    "CallbackUrl"?: string;
}
