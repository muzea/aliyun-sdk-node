export interface CreateOTAVerifyJobResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
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
     * @example `29EC7245-0FA4-4BB6-B4F5-5F04818FDFB1`
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
     * 调用成功时，返回的验证批次信息。详情见以下参数。
     */
    Data: {
        /**
         * OTA升级包验证任务ID，即用于验证OTA升级包的设备升级批次ID。
         * @example `wahVIzGkCMuAUE2gDERM02****`
         */
        JobId: string;
        /**
         * OTA升级包验证任务的创建时间，UTC格式。
         * @example `2019-11-04T06:22:19.566Z`
         */
        UtcCreate: string;
    };
}
