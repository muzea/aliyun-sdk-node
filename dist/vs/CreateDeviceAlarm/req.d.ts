export interface CreateDeviceAlarmRequest {
    /**
     * 设备ID。
     * @example `348*****380-cn-qingdao`
     */
    "Id": string;
    /**
     * 通道ID。
     * @example `12`
     */
    "ChannelId": number;
    /**
     * 媒体对象类型。取值：
     * - 0（无）
     * - 1（JPEG图片）
     * - 2（视频）
     * - 3（GIF图片）
     * @example `0`
     */
    "ObjectType": number;
    /**
     * 告警类型。取值：
     * - 0（其他）
     * - 1（运动检测告警）
     * - 2（智能告警）
     * - 3（开关量告警）
     * - 4（视频丢失告警）
     * @example `1`
     */
    "Alarm": number;
    /**
     * 告警子类型。
     */
    "SubAlarm": number;
    /**
     * 起始时间点。（单位：毫秒）
     * @example `1632121707000`
     */
    "StartTime": number;
    /**
     * 结束时间点。（单位：毫秒）
     * @example `1632314789000`
     */
    "EndTime": number;
    /**
     * 媒体上传URL的过期时间。（单位：秒，默认60秒）
     * @example `3600`
     */
    "Expire"?: number;
}
