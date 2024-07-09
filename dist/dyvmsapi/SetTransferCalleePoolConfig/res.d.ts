export interface SetTransferCalleePoolConfigResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 转呼号码配置详情。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `E7518CE1-B0FF-4C6F-9252-BF80271B2F99`
     */
    RequestId: string;
}
