export interface RefreshDeviceCredentialResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的。
     * @example `E4581CCF-62AF-44D9-B5B4-D1DBDC0F****`
     */
    RequestId: string;
    /**
     * 设备的访问凭证信息。
     */
    DeviceCredential: {
        /**
         * 设备访问凭证上一次更新的毫秒时间戳。
         * @example `1605541382000`
         */
        UpdateTime: number;
        /**
         * 设备的AccessKey ID。
         * @example `DC.Z5fXh9sRRVufyLi6wo****`
         */
        DeviceAccessKeyId: string;
        /**
         * 设备访问凭证创建的毫秒时间戳。
         * @example `1605541382000`
         */
        CreateTime: number;
        /**
         * 云消息队列 MQTT 版实例的ID。
         * @example `post-cn-0pp12gl****`
         */
        InstanceId: string;
        /**
         * 设备的AccessKey Secret。
         * @example `DC.BJMkn4eMQJK2vaApTS****`
         */
        DeviceAccessKeySecret: string;
        /**
         * 设备的Client ID。
         * @example `GID_test@@@test`
         */
        ClientId: string;
    };
}
