export interface QueryPictureSearchAiboxesResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~288314~~)。
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
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 返回结果中每页显示的记录数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录条数。
         * @example `1`
         */
        Total: number;
        /**
         * 总页数。
         * @example `1`
         */
        PageCount: number;
        /**
         * V系列边缘一体机列表。
         */
        PageData: {
            /**
             * V系列边缘一体机对应的设备别名。
             * @example `box015`
             */
            NickName: string;
            /**
             * V系列边缘一体机对应的设备ID。
             * @example `VrJwPGjC1sJlqPjZA3cxg4****`
             */
            IotId: string;
        }[];
    };
}
