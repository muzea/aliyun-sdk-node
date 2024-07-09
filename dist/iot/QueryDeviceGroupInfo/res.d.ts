export interface QueryDeviceGroupInfoResponse {
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
     * @example `7411716B-A488-4EEB-9AA0-6DB05AD2491F`
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
     * 调用成功时，返回的分组详细信息数据，包含以下参数。
     */
    Data: {
        /**
         * 分组ID。
         * @example `tDQvBJqbUyHs****`
         */
        GroupId: string;
        /**
         * 分组名称。
         * @example `aliyun`
         */
        GroupName: string;
        /**
         * 激活设备数量。
         * @example `1`
         */
        DeviceActive: number;
        /**
         * 创建时间。
         * @example `2018-09-14T14:35:51.000Z`
         */
        UtcCreate: string;
        /**
         * 动态分组规则，仅动态分组返回该参数信息。
         * @example `product_key = "a1***" and name LIKE "test%"`
         */
        DynamicGroupExpression: string;
        /**
         * 在线设备数量。
         * @example `0`
         */
        DeviceOnline: number;
        /**
         * 分组描述。
         * @example `usefulGroup`
         */
        GroupDesc: string;
        /**
         * 设备总数。
         * @example `10`
         */
        DeviceCount: number;
    };
}
