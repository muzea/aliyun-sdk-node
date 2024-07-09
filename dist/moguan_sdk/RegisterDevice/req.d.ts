export interface RegisterDeviceRequest {
    /**
     * 端侧SDK授权时必填的appKey信息：用户使用阿里云账号登陆SDK授权中心客户平台后，对已发放授权进行分配和新建批次后，会得到此appKey。
     * @example `NWTtS623eqo6s070`
     */
    "AppKey": string;
    /**
     * 端侧SDK授权时必填的SDKCode信息：每个发放的SDK授权都会有唯一的SDKCode信息，登录SDK授权中心客户平台后，可在授权列表获得此信息。
     * @example `SDKCodeTest01`
     */
    "SdkCode": string;
    /**
     * 端侧SDK授权时必填的DeviceId信息：设备的唯一标识，设备端开发接入时生成，需保证唯一且不变。
     * @example `99daf4a623f2b623ae08e79d6d4bf686`
     */
    "DeviceId": string;
    /**
     * 用户填写的id信息，方便用户管理和记录的授权设备唯一标识，后续可用于排查用户侧授权出现的问题。
     * @example `D001`
     */
    "UserDeviceId": string;
    /**
     * 其他扩展信息，JSON结构，方便后续扩展参数。
     * @example `{}`
     */
    "Extend": any;
}
