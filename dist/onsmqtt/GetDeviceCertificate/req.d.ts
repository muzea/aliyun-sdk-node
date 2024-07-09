export interface GetDeviceCertificateRequest {
    /**
     * 设备证书所绑定的实例ID，即云消息队列 MQTT 版的实例ID。
     * @example `post-cn-7mz2d******`
     */
    "MqttInstanceId": string;
    /**
     * 待查询设备证书的SN序列号，用于唯一标识一个设备证书。
     * 取值范围：不超过128 Byte。
     * @example `356217374433******`
     */
    "DeviceSn": string;
    /**
     * 待查询设备证书所属的CA证书的SN序列号，用于唯一标识一个CA证书。
     * 取值范围：不超过128 Byte。
     * @example `007269004887******`
     */
    "CaSn": string;
}
