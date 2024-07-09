export interface SetWaitingRoomConfigRequest {
    /**
     * 您的加速域名，仅支持单个设置。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 开启waiting_room功能的URI正则字符串。
     * @example `.*​/aaa/bbb$`
     */
    "WaitUri": string;
    /**
     * 允许回源比例，取值范围：**0**~**100**。
     * @example `30`
     */
    "AllowPct": number;
    /**
     * 进入排队后，排队时长，单位：秒。
     * @example `30`
     */
    "MaxTimeWait": number;
    /**
     * 离开排队后，跳过排队时长，单位：秒。
     * @example `20`
     */
    "GapTime": number;
    /**
     * 排队等待页面URL。
     * @example `https://example.com/waitingroom.html
    `
     */
    "WaitUrl": string;
}
