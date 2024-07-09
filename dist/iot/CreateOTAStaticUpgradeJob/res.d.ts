export interface CreateOTAStaticUpgradeJobResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `MissingFirmwareId`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `FirmwareId is mandatory for this action.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `29EC7245-0FA4-4BB6-B4F5-5F04818FDFB1`
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
     * 调用成功时，返回的升级批次信息。更多信息，请参见Data下参数说明。
     */
    Data: {
        /**
         * 升级批次ID，升级批次的唯一标识符。
         * @example `wahVIzGkCMuAUE2gDERM02****`
         */
        JobId: string;
        /**
         * 升级批次的创建时间，UTC格式。
         * @example `2019-11-04T06:22:19.566Z`
         */
        UtcCreate: string;
    };
}
