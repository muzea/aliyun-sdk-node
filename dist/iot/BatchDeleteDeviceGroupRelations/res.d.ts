export interface BatchDeleteDeviceGroupRelationsResponse {
    /**
     * 成功从分组中删除的设备数量。
     * @example `2`
     */
    SuccessDeviceCount: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `8739385E-143F-4389-B900-B7DF9174CE0D`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 删除前，已添加到此分组的设备数量。
     * @example `2`
     */
    AlreadyRelatedGroupDeviceCount: number;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 请求参数中要删除的设备中，有效的设备数量（即可删除的设备数量）。
     * @example `2`
     */
    ValidDeviceCount: number;
}
