export interface GetMessageTokenRequest {
    /**
     * 互动消息应用ID。
     * @example `a494caec-***-695ef345db77`
     */
    "AppId": string;
    /**
     * 终端设备ID，唯一代表一个用户终端设备，用户自定义。小写英文、数字、下划线（_）和短横线（-）组成，最大长度64个字符。不同终端设备需要使用不同的DeviceId，建议从终端设备获取并传入给服务端。
     * @example `a494caec-***-695ef345db77`
     */
    "DeviceId": string;
    /**
     * 终端设备类型，取值：
     * - ios
     * - android
     * - web
     * - pc
     * @example `android`
     */
    "DeviceType": string;
    /**
     * 用户UserId，用户自定义，在AppId下单独唯一。小写英文、数字、下划线（_）和小数点（.）组成，最大长度32个字符。不同的用户需要使用不同的UserId。
     * @example `de1**a0`
     */
    "UserId": string;
}
