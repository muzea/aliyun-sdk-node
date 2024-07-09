export interface AddDeviceToSharePromotionResponse {
    /**
     * 调用结果状态码：
     * - 调用成功，返回空值。
     * - 调用失败，返回错误码。详细信息，请参见下文**错误码**。
     * @example `iot.speech.InvalidIotInstanceId`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `Invalid instance ID.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
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
        FailDeviceSimpleInfoList: {
            /**
             * 添加失败的共享设备列表文件。
             */
            item: {
                /**
                 * 添加失败的共享设备所属产品的**ProductKey**。
                 * @example `a2YwD2****`
                 */
                ProductKey: string;
                /**
                 * 添加失败的共享设备名称。
                 * @example `device02`
                 */
                DeviceName: string;
                /**
                 * 添加失败的描述。
                 * @example `设备在共享中不存在`
                 */
                FailReason: string;
                /**
                 * 添加失败的错误码。
                 * - **1**：设备在共享中不存在。
                 * - **2**：设备已经在大促中存在。
                 * - **3**：批量操作异常，请稍后重试。
                 * @example `1`
                 */
                FailCode: number;
            }[];
        };
    };
}
