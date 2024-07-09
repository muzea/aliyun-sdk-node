export interface SegmentHairResponse {
    /**
     * 请求ID。
     * @example `D6C24839-91A7-41DA-B31F-98F08EF80CC0`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 各个子元素的抠图结果。
         */
        Elements: {
            /**
             * 结果图像URL地址。
             * 抠图之后返回四通道PNG图，无压缩，图像尺寸保持不变，图像体积会变大。
             * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
             * @example `http://viapi-cn-shanghai-dha-segmenter.oss-cn-shanghai.aliyuncs.com/upload/result_HeadSegmenter/2021-12-31/invi_HeadSegmenter_016409228383064285967296_iPLUXA.png?Expires=1640924638&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=wpKOqSar1bYvGmlTMryfEH2Q9I****`
             */
            ImageURL: string;
            /**
             * 结果图的宽度。
             * @example `113`
             */
            Width: number;
            /**
             * 结果图的高度。
             * @example `180`
             */
            Height: number;
            /**
             * 结果图左上角在原图中的y轴坐标。
             * @example `102`
             */
            Y: number;
            /**
             * 结果图左上角在原图中的x轴坐标。
             * @example `446`
             */
            X: number;
        }[];
    };
}
