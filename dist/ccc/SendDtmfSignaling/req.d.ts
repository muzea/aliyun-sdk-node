export interface SendDtmfSignalingRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 发送DTMF的坐席ID。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * 设备ID，无意义，可以随便填写。
     * @example `device`
     */
    "DeviceId"?: string;
    /**
     * 通话ID。
     * @example `job-6573574060089****`
     */
    "JobId": string;
    /**
     * 待发送DTMF的话务通道ID。
     * @example `ch:customer:0108989****->1318888****:1609234221870:job-6573574060089****`
     */
    "ChannelId": string;
    /**
     * DTMF按键信息，即拨号盘上的按键，包括0-9、*、#。
     * @example `5`
     */
    "Dtmf": string;
}
