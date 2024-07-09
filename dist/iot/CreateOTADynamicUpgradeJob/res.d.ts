export interface CreateOTADynamicUpgradeJobResponse {
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
     * @example `9F41D14E-CB5F-4CCE-939C-057F39E688F5`
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
     * 调用成功时，返回的升级批次信息。详情见以下Data包含的参数。
     */
    Data: {
        /**
         * 升级批次ID，升级批次的唯一标识符。
         * @example `XUbmsMHmkqv0PiAG****010001`
         */
        JobId: string;
        /**
         * 升级批次的创建时间，UTC格式。
         * @example `2019-05-10T02:18:53.000Z`
         */
        UtcCreate: string;
    };
}
