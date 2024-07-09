export interface SegmentHeadResponse {
    /**
     * 请求ID。
     * @example `89BBDA42-E1CA-426E-9A46-C703D8DBB1E2`
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
             * 抠图之后返回四通道PNG图，无压缩，图像体积会变大。
             * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
             * @example `http://viapi-cn-shanghai-dha-segmenter.oss-cn-shanghai.aliyuncs.com/upload/result_headsegmenter/2020-6-2/invi_headsegmenter_015910809094981099086_TAamhR.png?Expires=1591082709&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=xuUE%2FbYeB9LpR18VXawOVeutQU****`
             */
            ImageURL: string;
            /**
             * 结果图的宽度。
             * @example `116`
             */
            Width: number;
            /**
             * 结果图的高度。
             * @example `180`
             */
            Height: number;
            /**
             * 左上角y坐标。
             * @example `102`
             */
            Y: number;
            /**
             * 左上角x坐标。
             * @example `445`
             */
            X: number;
        }[];
    };
}
