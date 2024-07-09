export interface QueryPictureSearchDevicesResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `Specified parameter CurrentPage is not valid.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `DF7DC571-FE48-4C25-8BE0-B13C3038C85B`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应结果。
     */
    Data: {
        /**
         *  当前页面号。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 返回结果中每页显示的记录数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `1`
         */
        Total: number;
        /**
         * 总页数。
         * @example `1`
         */
        PageCount: number;
        /**
         * 应用列表。
         */
        PageData: {
            /**
             * 设备别名。
             * > 仅IPC设备会返回此参数。
             * @example `camera1`
             */
            NickName: string;
            /**
             * 设备ID。
             * @example `VrJwPGjC1sJlqPjZA3cxg4****`
             */
            IotId: string;
        }[];
    };
}
