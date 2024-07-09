export interface UnbindSlbResponse {
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `Unbind slb success`
     */
    Message: string;
    /**
     * 空值，无实际含义。
     * @example `{}`
     */
    Data: string;
    /**
     * 请求唯一ID。
     * @example `D16979DC-4D42-************`
     */
    RequestId: string;
}
