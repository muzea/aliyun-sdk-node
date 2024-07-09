export interface SegmentFoodResponse {
    /**
     * 请求ID。
     * @example `38265D08-AD0F-4752-8E96-D1D9FB96C3D9`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 返回抠图结果图像URL地址。
         * 抠图之后返回四通道PNG图，无压缩，图像尺寸保持不变，图像体积会变大。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://viapi-cn-shanghai-dha-segmenter.oss-cn-shanghai.aliyuncs.com/upload/foodsegmenter-2020-06-17-15-24-00-8658fc85b8-8ds8k/2020-6-18/invi__015924442076191000002_WqJ99N.png?Expires=1592446007&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=5ITSd6ndSuP7pUfoDFpgLPUOGg****`
         */
        ImageURL: string;
    };
}
