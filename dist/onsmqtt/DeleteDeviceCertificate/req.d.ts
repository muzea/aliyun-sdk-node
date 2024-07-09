export interface DeleteDeviceCertificateRequest {
    /**
     * 设备证书所绑定的实例ID，即云消息队列 MQTT 版的实例ID。
     * @example `post-cn-7mz2d******`
     */
    "MqttInstanceId": string;
    /**
     * 待删除设备证书的SN序列号，用于唯一标识一个设备证书。
     * 取值范围：不超过128 Byte。
     * @example `356217374433****`
     */
    "DeviceSn": string;
    /**
     * 设备证书所属的CA证书的序列号，用于唯一标识一个CA证书。CA证书用于验证设备证书的正确性。
     * 取值范围：不超过128 Byte。
     * @example `007269004887******`
     */
    "CaSn": string;
}
