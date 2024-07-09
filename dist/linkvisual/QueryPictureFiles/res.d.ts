export interface QueryPictureFilesResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `06DC77A0-4622-42DB-9EE0-25FIOHS82JK1`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `product is not active.`
     */
    ErrorMessage: string;
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
         * 当前页面号。
         * @example `1`
         */
        Page: number;
        /**
         * 每页显示的条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 返回的图片列表。
         */
        List: {
            /**
             * 图片ID。
             * @example `pZJUqijOyfpFOOGNP******`
             */
            PicId: string;
            /**
             * 图片URL。
             * > URL有效期为1小时。
             * @example `http://***_normal.jpg`
             */
            PicUrl: string;
            /**
             * 图片创建的时间，格式为13位时间戳，单位为毫秒。
             * @example `1543458157522`
             */
            PicCreateTime: number;
            /**
             * 缩略图URL。
             * > URL有效期为1小时。
             * @example `http://***.jpg`
             */
            ThumbUrl: string;
            /**
             * IPC设备的设备ID。
             * @example `zLZyi6aOLyOSHa9hsPyD00****`
             */
            IotId: string;
        }[];
    };
}
