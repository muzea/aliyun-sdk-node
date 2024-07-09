export interface QueryPictureSearchJobResultResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `AppInstanceId is mandatory for this action.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `a06c4750-7cce-11eb-8010-557d50136505`
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
         * 查询结果。
         */
        PageData: {
            /**
             * 待检索图片的地址。
             * @example `https://xxx.xxx.xxx.com/xxx`
             */
            PicUrl: string;
            /**
             * 创建事件的时间，格式为毫秒级的13位时间戳，单位为毫秒。
             * @example `1614333155075`
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
             * 设备别名。
             * > 若设备未设置设备别名，则不返回此参数。
             * @example `camera1`
             */
            DeviceNickName: string;
            /**
             * 人脸相似度。
             * @example `0.5`
             */
            Threshold: number;
            /**
             * 查询的设备的IotId。
             * @example `5RUngwC1RknD4lPiHgH300****`
             */
            IotId: string;
        }[];
    };
}
