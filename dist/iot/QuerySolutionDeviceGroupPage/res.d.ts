export interface QuerySolutionDeviceGroupPageResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.tcloud.ProjectNotFound`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `project not found`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `66FF51D3-***-49F1-B1A2-***`
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
     * 返回的分组列表。
     */
    Data: {
        /**
         * 每页返回的分组个数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 当前页，从1开始。
         * @example `1`
         */
        PageId: number;
        /**
         * 查询返回的数据总条数。
         * @example `100`
         */
        Total: number;
        List: {
            /**
             * 分组列表数据。
             */
            itemName: {
                /**
                 * 分组的ID。
                 * @example `4de2c367****8c585e5992**  `
                 */
                GroupId: string;
                /**
                 * 分组名称。
                 * @example `test***`
                 */
                GroupName: string;
                /**
                 * 分组的创建时间。
                 * @example `1356565656`
                 */
                GmtCreate: number;
                /**
                 * 分组最近一次修改的时间。
                 * @example `1357865658`
                 */
                GmtModified: number;
                /**
                 * 分组描述。
                 * @example `description`
                 */
                GroupDesc: string;
                /**
                 * 分组下设备的数量。
                 * @example `100`
                 */
                DeviceCount: number;
            }[];
        };
    };
}
