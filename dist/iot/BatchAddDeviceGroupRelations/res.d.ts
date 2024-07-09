export interface BatchAddDeviceGroupRelationsResponse {
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `671D0F8F-FDC7-4B12-93FA-336C079C965A`
     */
    RequestId: string;
    /**
     * 请求参数中，已经添加到10个或者10个以上分组的设备数量（一个设备最多添加到10个分组）。
     * @example `0`
     */
    ExceedTenGroupDeviceCount: number;
    /**
     * 原已经添加到此分组的设备数量。
     * @example `0`
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
     * 请求参数中合法的设备数量。
     * @example `2`
     */
    ValidDeviceCount: number;
    /**
     * 成功添加到分组的设备数量。
     * @example `2`
     */
    SuccessAddedDeviceCount: number;
}
