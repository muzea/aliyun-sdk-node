export interface DeleteCaCertificateResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `020F6A43-19E6-4B6E-B846-44EB31DF****`
     */
    RequestId: string;
    /**
     * 已删除CA证书的SN序列号，用于唯一标识一个CA证书。
     * @example `007269004887******`
     */
    Sn: string;
}
