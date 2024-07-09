export interface DescribeLiveStreamAuthCheckingResponse {
    /**
     * 鉴权不通过的错误信息。
     * @example `INVALID AUTH_KEY`
     */
    Description: string;
    /**
     * 请求ID。
     * @example `16F08B4E-14FD-5D72-AB2F-BAFA4C4D57F1`
     */
    RequestId: string;
    /**
     * 鉴权是否有效。
     * -  pass：有效。
     * - false：无效。
     * @example `pass`
     */
    Status: string;
}
