export interface ModifyInstanceAutoRenewAttributeResponse {
    /**
     * 返回的业务码，正常成功为0。
     * @example `0`
     */
    Code: number;
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `EA3758E0-8899-17D3-9526-5F62CF33A586`
     */
    RequestId: string;
}
