export interface AddAxnTrackNoResponse {
    /**
     * 状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~109196~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `请求成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `1A4CADEF-8516-5890-9177-A1A4D97F****`
     */
    RequestId: string;
}
