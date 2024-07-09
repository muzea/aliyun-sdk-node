export interface EncryptPhoneNumResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `xxxx`
     */
    Message: string;
    /**
     * 加密后密文。
     * @example `20nJ****​/9Fl/kxx/***7`
     */
    Data: string;
}
