export interface DescribeInstancePasswordsSettingResponse {
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4****`
     */
    RequestId: string;
    /**
     * 是否设置过vnc密码。
     * @example `true`
     */
    VncPasswordSetting: boolean;
    /**
     * 是否设置过轻量应用服务器密码。
     * @example `true`
     */
    InstancePasswordSetting: boolean;
}
