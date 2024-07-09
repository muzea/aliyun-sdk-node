export interface QueryDeviceGroupListResponse {
    /**
     * 当前页号。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `BEFCA316-D6C7-470C-81ED-1FF4FFD4AA0D`
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
     * 每页记录数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `24`
     */
    Total: number;
    /**
     * 总页数。
     * @example `3`
     */
    PageCount: number;
    Data: {
        /**
         * 调用成功时，返回的分组信息。请参见GroupInfo。
         * > 返回的分组信息按照分组创建时间倒序排列。
         */
        GroupInfo: {
            /**
             * 分组名称。
             * @example `test1`
             */
            GroupName: string;
            /**
             * 分组ID。
             * @example `Kzt9FD8wje8o****`
             */
            GroupId: string;
            /**
             * 分组类型。
             * @example `LINK_PLATFORM_DYNAMIC`
             */
            GroupType: string;
            /**
             * 分组描述。
             * @example `usefulGroup`
             */
            GroupDesc: string;
            /**
             * 分组创建时间。
             * @example `2018-10-09T02:58:34.000Z`
             */
            UtcCreate: string;
        }[];
    };
}
