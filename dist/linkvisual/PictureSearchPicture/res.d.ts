export interface PictureSearchPictureResponse {
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
     * @example `3ddd5f30-7ccd-11eb-b164-bfd389491534`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应信息。
     */
    Data: {
        /**
         * 当前页面号。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 每页显示的条数。
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
             * 图片地址。
             * @example `https://XXX.XXX/XXX`
             */
            PicUrl: string;
            /**
             * 创建事件的时间，格式为毫秒级的13位时间戳。
             * @example `1614500317482`
             */
            EventTime: number;
            /**
             * V系列边缘一体机的IotId。
             * @example `pZJUqijOyfpFOOGNPF7S00****`
             */
            GatewayIotId: string;
            /**
             * 图片特征ID。
             * @example `vectorId86d9a5c32b9947278e526c2eef8a****`
             */
            VectorId: string;
            /**
             * 人脸相似度。
             * @example `0.5`
             */
            Threshold: number;
            /**
             * 图片特征类型：
             * - 0：人体。
             * - 1：人脸。
             * @example `1`
             */
            VectorType: number;
            /**
             * 查询的设备的IotId。
             * @example `5RUngwC1RknD4lPiHgH300****`
             */
            IotId: string;
        }[];
    };
}
