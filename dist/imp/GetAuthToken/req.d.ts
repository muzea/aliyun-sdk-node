export interface GetAuthTokenRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 通过控制台创建和查询。小写英文和数字，长度32个字符。
     * @example `06***9c`
     */
    "AppKey": string;
    /**
     * 用户UserId，用户自定义，在AppId下单独唯一。小写英文、数字、下划线（_）和小数点（.）组成，最大长度32个字符。不同的用户需要使用不同的UserId。
     * @example `as****hs`
     */
    "UserId": string;
    /**
     * 终端设备ID，唯一代表一个用户终端设备，用户自定义。小写英文、数字、下划线（_）和短横线（-）组成，最大长度64个字符。不同终端设备需要使用不同的DeviceId，建议从终端设备获取并传入给服务端。
     * @example `a494caec-***-695ef345db77`
     */
    "DeviceId": string;
}
