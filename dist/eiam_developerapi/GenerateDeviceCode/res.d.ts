export interface GenerateDeviceCodeResponse {
    /**
     * 设备码。
     * @example `xxxxx`
     */
    device_code: string;
    /**
     * 用户授权码。
     * @example `xxxxx`
     */
    user_code: string;
    /**
     * 检验uri。
     * @example `https://example.com/authorize/device`
     */
    verification_uri: string;
    /**
     * 完整的检验uri。
     * @example `https://example.com/authorize/device?user_code=
    xxxx`
     */
    verification_uri_complete: string;
    /**
     * 有效时长，单位秒
     * @example `1200`
     */
    expires_in: number;
    /**
     * 失效时间，格式为Unix时间戳，单位为秒。
     * @example `1653288641`
     */
    expires_at: number;
    /**
     * 请求token节点的超时时间，单位秒
     * @example `5`
     */
    interval: number;
}
