export interface UninstallPromClusterResponse {
    /**
     * 操作是否成功。
     * @example `success`
     */
    Data: string;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `53980F48-DE82-53A1-9ADE-D2629226DD9A`
     */
    RequestId: string;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
}
