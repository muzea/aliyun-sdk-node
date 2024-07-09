export interface AddShareTaskDeviceResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `An internal error occurred. Try again later.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `671D0F8F-FDC7-4B12-93FA-336C079C965A`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的添加结果。
     */
    Data: {
        /**
         * 进度ID。
         * @example `Md3ZiTL888K9llXDy7890***********`
         */
        ProgressId: string;
        /**
         * 添加成功的设备数量。
         * @example `10`
         */
        SuccessSum: number;
        /**
         * 添加进度，可取值0～100。
         * @example `100`
         */
        Progress: number;
        /**
         * 添加失败的设备列表文件。
         * @example `https://****.csv`
         */
        FailedResultCsvFile: string;
        /**
         * 添加失败的设备数量。
         * @example `2`
         */
        FailSum: number;
    };
}
