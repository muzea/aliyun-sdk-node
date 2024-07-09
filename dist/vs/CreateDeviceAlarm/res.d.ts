export interface CreateDeviceAlarmResponse {
    /**
     * 媒体上传的URL，可使用PUT上传。
     * @example `rtmp://demo.aliyundoc.com/live/310101*****7542007?auth_key=1639130258-0-0-b2b04fe85ece6*****a6b1a42bc7e`
     */
    Url: string;
    /**
     * 告警ID。
     * @example `0hyNgTdgv2D000195842`
     */
    AlarmId: string;
    /**
     * 请求ID。
     * @example `76E11E6A-4441-51C9-AF60-D354362257A7`
     */
    RequestId: string;
    /**
     * URL的过期时长。（单位：秒）
     * @example `3600`
     */
    Expire: number;
    /**
     * 下次相同告警的最小间隔。（单位：秒）
     * @example `60`
     */
    AlarmDelay: number;
}
