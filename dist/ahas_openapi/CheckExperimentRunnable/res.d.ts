export interface CheckExperimentRunnableResponse {
    /**
     * 异常提示信息，若成功则不返回任何数据。
     * @example `null`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `FAC4CE70-9ADF-5F8B-832F-XXXXXXXXX`
     */
    RequestId: string;
    /**
     * 系统状态码，成功则不返回任何数据。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
