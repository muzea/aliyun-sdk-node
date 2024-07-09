export interface SegmentCommonImageResponse {
    /**
     * 请求ID。
     * @example `1B8BEF02-0672-44CA-A974-4D6FAC392497`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 结果图像URL地址。
         * 请求参数指定返回的图像形式。
         * - 如果不设置，则返回四通道PNG图，无压缩，图像尺寸保持不变，图像体积会变大。
         * - 如果设置为`mask`，则返回单通道mask。
         * - 如果设置为`whiteBK`，则返回白底图。
         * - 如果设置为`crop`，则返回裁剪之后的四通道PNG图（裁掉边缘空白区域）。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://luban-vgd-invi.oss-cn-hangzhou.aliyuncs.com/upload/result_segmenter/2019-12-20/invi_segmenter_015768355410261076021_Z3t0fc.png?Expires=1577094741&OSSAccessKeyId=LTAI4Fc5SVvzUQ19K1Cz****&Signature=pkaKK3VlfsTR2r%2BYycJzTVEEos****`
         */
        ImageURL: string;
    };
}
