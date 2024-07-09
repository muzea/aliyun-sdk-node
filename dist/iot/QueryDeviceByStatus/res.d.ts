export interface QueryDeviceByStatusResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 表示是否调用成功。
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
     * 每页显示的设备数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询到的设备总数。
     * @example `2`
     */
    Total: number;
    /**
     * 总页数。
     * @example `1`
     */
    PageCount: number;
    /**
     * 当前页码。
     * @example `1`
     */
    Page: number;
    Data: {
        /**
         * 调用成功时，返回的设备信息列表（**SimpleDeviceInfo**）。
         */
        SimpleDeviceInfo: {
            /**
             * 设备状态。 取值：
             * - **UNACTIVE**：未激活。
             * - **ONLINE**：在线。
             * - **OFFLINE**：离线。
             * - **DISABLE**：已禁用。
             * @example `ONLINE`
             */
            Status: string;
            /**
             * 设备所属产品的ProductKey。
             * @example `a1BwAGV****`
             */
            ProductKey: string;
            /**
             * 设备名称。
             * @example `light`
             */
            DeviceName: string;
            /**
             * 设备信息最后一次修改时的时间，UTC格式。
             * @example `2021-02-18T02:46:32.000Z`
             */
            UtcModified: string;
            /**
             * 设备密钥。
             * @example `sLefbFmN9SYfnWLJTePG893XNuRV****`
             */
            DeviceSecret: string;
            /**
             * 设备创建时的时间，UTC格式。
             * @example `2021-02-18T02:46:32.000Z`
             */
            UtcCreate: string;
            /**
             * 设备创建时的时间，GMT格式。
             * @example `2021-02-18 10:46:32`
             */
            GmtCreate: string;
            /**
             * 设备的备注名称。
             * @example `SensorInShanghai`
             */
            Nickname: string;
            /**
             * 设备信息最后一次修改时的时间，GMT格式。
             * @example `2021-02-18 10:46:32`
             */
            GmtModified: string;
            /**
             * 设备ID。
             * @example `Av8NGHGtwPrH9BYGLMBi00****`
             */
            IotId: string;
        }[];
    };
}
