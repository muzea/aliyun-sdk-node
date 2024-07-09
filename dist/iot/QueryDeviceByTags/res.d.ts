export interface QueryDeviceByTagsResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 调用失败时返回的出错信息。
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
     * 每页显示的记录数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `1`
     */
    Total: number;
    /**
     * 总页数。
     * @example `1`
     */
    PageCount: number;
    /**
     * 当前页面号。
     * @example `1`
     */
    Page: number;
    Data: {
        /**
         * 调用成功时，返回的设备信息列表（**SimpleDeviceInfo**）。
         */
        SimpleDeviceInfo: {
            /**
             * 设备所属产品的ProductKey。
             * @example `a1BwAGV****`
             */
            ProductKey: string;
            /**
             * 产品名称。
             * @example `lamp`
             */
            ProductName: string;
            /**
             * 设备名称。
             * @example `light1`
             */
            DeviceName: string;
            /**
             * 物联网平台为该设备颁发的ID，作为该设备的唯一标识符。
             * @example `Q7uOhVRdZRRlDnTLv****00100`
             */
            IotId: string;
        }[];
    };
}
