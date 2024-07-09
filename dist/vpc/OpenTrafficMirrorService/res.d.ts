export interface OpenTrafficMirrorServiceResponse {
    /**
     * 请求ID。
     * @example `4FCCF008-4C13-4231-BE77-D5203801A9E2`
     */
    RequestId: string;
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 流量镜像开通成功返回的信息。
     * @example `successful`
     */
    Message: string;
}
