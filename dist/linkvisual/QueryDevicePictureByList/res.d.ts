export interface QueryDevicePictureByListResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request forbidden`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `06DC77A0-4622-42DB-9EE0-25FIOHS82JK1`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 响应结果。
         */
        picData: {
            /**
             * 图片ID。
             * @example `RW****HFRO****jUyMjIy`
             */
            PicId: string;
            /**
             * 图片URL。
             * @example `https://link-vision-picture-sh.oss-cn-shanghai.aliyuncs.com/EbOEp****%3D`
             */
            PicUrl: string;
            /**
             * 图片创建时间，格式为13位时间戳，单位为毫秒。
             * @example `1632453652222`
             */
            PicCreateTime: number;
            /**
             * 缩略图URL。
             * @example `https://link-vision-picture-sh.oss-cn-shanghai.aliyuncs.com/EbOEpDE****%2Cq_90`
             */
            ThumbUrl: string;
            /**
             * IPC设备的设备ID。
             * @example `1CJ0****e7qiq8VkQi1000000`
             */
            IotId: string;
        }[];
    };
}
