export interface ParseFaceResponse {
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
         * 各个子元素的分割结果。
         */
        Elements: {
            /**
             * 抠图结果。
             * 抠图之后返回四通道PNG图，无压缩，图像尺寸保持不变，图像体积会变大。
             * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
             * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/fivesensesegmenter/prod/560FA2E7-FDC6-59A5-ABDD-D62A05146734/skin/_18dd_20211231-040658.png?Expires=1640925418&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=2g0M88wZl%2Bn4t4gzQX%2BTIskpWB****`
             */
            ImageURL: string;
            /**
             * 抠图结果key值。具体请参见下方表格说明。
             * @example `skin`
             */
            Name: string;
        }[];
        /**
         * 原始图像URL地址。
         * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageseg/ParseFace/ParseFace1.jpg`
         */
        OriginImageURL: string;
    };
}
