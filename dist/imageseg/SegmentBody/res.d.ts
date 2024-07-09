export interface SegmentBodyResponse {
    /**
     * 请求ID。
     * @example `30EDCEEA-2806-44C6-AF0B-0988849106FE`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 结果图像URL地址。
         * 请求参数指定返回的图像形式。
         * - 如果设置为`mask`，则返回单通道黑白图。
         * - 如果设置为`crop`，则返回裁剪之后的四通道PNG图（裁掉边缘空白区域）。
         * - 如果设置为`whiteBK`，则返回白底图。
         * - 如果不设置或者设置为其他值，则返回四通道PNG图，无压缩，图像尺寸保持不变，图像体积会变大。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://viapi-cn-shanghai-dha-segmenter.oss-cn-shanghai.aliyuncs.com/upload/result_humansegmenter/2021-3-31/invi_humansegmenter_016171823500001081370_Ej0WwO.jpg?Expires=1617184150&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=ZwaWXpAOMzHar%2B1wVO7zeSD83r****`
         */
        ImageURL: string;
    };
}
