export interface QueryDeviceFileListResponse {
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPage: number;
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
     * 每页显示的文件个数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 文件总数。
     * @example `2`
     */
    Total: number;
    /**
     * 总页数。
     * @example `1`
     */
    PageCount: number;
    Data: {
        /**
         * 调用成功时，返回的文件信息列表。
         */
        FileSummary: {
            /**
             * 文件创建时间。
             * @example `2019-03-21T08:45:42.000Z`
             */
            UtcCreatedOn: string;
            /**
             * 文件名称。
             * @example `testFile2.txt`
             */
            Name: string;
            /**
             * 文件大小，单位：KB。
             * @example `1024000`
             */
            Size: string;
            /**
             * 文件ID，文件的唯一标识符。
             * @example `xL0G67MBLBDtkR7GCfT******`
             */
            FileId: string;
        }[];
    };
}
