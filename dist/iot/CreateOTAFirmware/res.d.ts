export interface CreateOTAFirmwareResponse {
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
     * @example `291438BA-6E10-4C4C-B761-243B9A0D324F`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功，表示OTA升级包创建成功。
     * - **false**：调用失败，表示OTA升级包创建失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的升级包信息。更多信息，请参见**Data**下参数描述。
     */
    Data: {
        /**
         * OTA升级包ID，物联网平台为升级包颁发的唯一标识符。
         * @example `s8SSHiKjpBfrM3BSN0z803****`
         */
        FirmwareId: string;
        /**
         * OTA升级包的创建时间，UTC格式。
         * @example `2019-11-04T06:21:54.607Z`
         */
        UtcCreate: string;
    };
}
