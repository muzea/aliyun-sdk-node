export interface SetCdnFullDomainsBlockIPResponse {
    /**
     * 状态码。0为成功，其他状态码为异常。
     * @example `0`
     */
    Code: number;
    /**
     * 附加信息。取值说明如下：请求正常，返回OK。请求异常，返回具体异常错误码。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `23ACE7E2-2302-42E3-98F8-E5E697FD86C3`
     */
    RequestId: string;
}
