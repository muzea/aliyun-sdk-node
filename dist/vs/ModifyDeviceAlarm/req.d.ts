export interface ModifyDeviceAlarmRequest {
    /**
     * 设备ID。
     * @example `348*****380-cn-qingdao`
     */
    "Id": string;
    /**
     * 通道ID。
     * @example `10`
     */
    "ChannelId": number;
    /**
     * 告警ID。
     * @example `0dGo7jLwwf1000296232`
     */
    "AlarmId": string;
    /**
     * 告警状态。取值：
     * - 1（上传完成）
     * - 2（上传失败）
     * - 3（一般错误）
     * @example `1`
     */
    "Status": number;
}
