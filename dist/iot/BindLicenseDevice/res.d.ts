export interface BindLicenseDeviceResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见本文下方_错误码_。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E4F94B97-1D64-4080-BFD2-67461667AA43`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的授权结果。
     */
    Data: {
        /**
         * 授权License成功的设备个数。
         * @example `10`
         */
        SuccessSum: number;
        /**
         * 为批量设备授权License的进度百分比，即取值范围为1~100。
         * @example `100`
         */
        Progress: number;
        /**
         * 授权License完成后，授权失败设备文件的URL。
         * @example `http://***`
         */
        ResultCsvFile: string;
        /**
         * 查询批量授权设备进度的唯一ID。
         * @example `123***`
         */
        CheckProgressId: string;
        /**
         * 授权License失败的设备个数。
         * @example `2`
         */
        FailSum: number;
    };
}
