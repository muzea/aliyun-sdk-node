export interface SegmentSceneResponse {
    /**
     * 请求ID。
     * @example `78EC13BB-74C5-4FBE-916E-C98BD721ED61`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 结果图像URL地址。
         * 抠图之后返回四通道PNG图，无压缩，图像尺寸保持不变，图像体积会变大。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://viapi-cn-shanghai-dha-segmenter.oss-cn-shanghai.aliyuncs.com/upload/result_skySegmentator/2020-7-24/invi_skySegmentator_015955807385661000002_WqJ99N.jpg?Expires=1595582538&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=sBP5bQCErDolM4QQG5%2B0HozNoO****`
         */
        ImageURL: string;
    };
}
