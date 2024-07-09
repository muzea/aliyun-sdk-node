export interface QueryDeviceOriginalPropertyStatusResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.common.InvalidPageParams`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据，更多信息，请参见List包含的参数。
     */
    Data: {
        /**
         * 下一页标识。
         * @example `Bo***x44Qx`
         */
        NextPageToken: string;
        /**
         * 是否有下一页属性记录。
         * - **true**：有。
         * - **false**：没有。
         * 返回**NextValid**为**true**时，可以将**NextPageToken**的值作为下次查询的**NextPageToken**，继续查询本次查询不显示的数据。
         * @example `true`
         */
        NextValid: boolean;
        List: {
            /**
             * 返回的属性集合信息（**PropertyStatusInfo**）。
             */
            PropertyStatusDataInfo: {
                /**
                 * 属性标识符。
                 * @example `Temperture`
                 */
                Identifier: string;
                /**
                 * 属性值。
                 * @example `26`
                 */
                Value: string;
                /**
                 * 属性修改的时间，单位是毫秒。
                 * @example `1517553572362`
                 */
                Time: number;
            }[];
        };
    };
}
