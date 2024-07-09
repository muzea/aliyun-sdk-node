export interface GetDeviceCertificateResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `020F6A43-19E6-4B6E-B846-44EB31DF****`
     */
    RequestId: string;
    /**
     * 证书详细信息。
     */
    Data: {
        /**
         * 设备证书生效的起始时间。格式为毫秒级别的Unix时间戳。
         * @example `1654137303000`
         */
        ValidBegin: string;
        /**
         * 设备证书生效的终止时间。格式为毫秒级别的Unix时间戳。
         * @example `1969497303000`
         */
        ValidEnd: string;
        /**
         * 设备证书的SN序列号，用于唯一标识一个设备证书。
         * @example `356217374433******`
         */
        DeviceSn: string;
        /**
         * 设备证书的名称。
         * @example `mqtt_device`
         */
        DeviceName: string;
        /**
         * 设备证书的内容。
         * \n表示换行。
         * @example `-----BEGIN DEVICECERTIFICATE-----\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\n-----END DEVICECERTIFICATE-----`
         */
        DeviceContent: string;
        /**
         * 设备证书所属的CA证书的SN序列号，用于唯一标识一个CA证书。
         * @example `00f26900ba87******`
         */
        CaSn: string;
        /**
         * 设备证书的状态。取值如下：
         * - **0**：表示证书为未激活状态。
         * - **1**：表示证书为激活状态。
         * > 设备证书注册后，默认为激活状态。
         * @example `1`
         */
        Status: string;
    };
}
