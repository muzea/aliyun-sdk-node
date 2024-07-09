export interface RegisterDevicesRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     *  座席ID列表，格式为JSON数组的字符串，数组元素是坐席ID。
     * @example `["user-test@ccc-test"]`
     */
    "UserIdListJson"?: string;
    /**
     * 设备ID，用户可自行设置，无特殊要求，字符串形式即可。
     * @example `test-device`
     */
    "DeviceId": string;
    /**
     * 设备密码，该密码用于在SIP设备发起注册信令时做鉴权校验，请妥善保管。
     * @example `password`
     */
    "Password": string;
}
