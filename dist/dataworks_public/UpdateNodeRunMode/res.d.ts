export interface UpdateNodeRunModeResponse {
    /**
     * 返回值。取值如下：
     * - true：表示调用成功。
     * - false：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `E6F0DBDD-5AD****`
     */
    RequestId: string;
}
