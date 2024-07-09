export interface QueryDeviceGroupByTagsResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `9599EE98-1642-4FCD-BFC4-039E458A4693`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
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
     * 当前页码。
     * @example `1`
     */
    Page: number;
    Data: {
        /**
         * 调用成功时，返回分组信息。
         */
        DeviceGroup: {
            /**
             * 分组名称。
             * @example `test11`
             */
            GroupName: string;
            /**
             * 分组ID。
             * @example `Z0ElGF5aqc0t****`
             */
            GroupId: string;
        }[];
    };
}
