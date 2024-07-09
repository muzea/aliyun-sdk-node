export interface TransferDeviceInstanceResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `27AF2E38-12ED-4F67-BD20-36E812CD7A42`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `来源实例和目标实例不能相同`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 迁移成功的设备列表。
         */
        SuccessList: {
            /**
             * 设备名称。
             * @example `e598798j****`
             */
            DeviceName: string;
            /**
             * 迁移成功的描述信息。
             * @example `success`
             */
            Message: string;
        }[];
        /**
         * 迁移失败的设备列表。
         */
        FailedList: {
            /**
             * 设备名称。
             * @example `e5jdfalekj****`
             */
            DeviceName: string;
            /**
             * 迁移失败的描述信息。
             * @example `设备已经转移或不属于来源实例`
             */
            Message: string;
        }[];
    };
}
