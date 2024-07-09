export interface InteractiveScribbleSegmentationResponse {
    /**
     * 请求ID。
     * @example `7574ee8f-38a3-4b1e-9280-11c33ab46e51`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 输出图片的URL，格式由请求参数确定。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `https://dashscope-result-sh.oss-cn-shanghai.aliyuncs.com/viapi-video/person_image_cartoonizer/2023-10-25/55798d04-0957-4ab1-accc-0e4d2d01a039/20231025092636774205_styleanime_n2vedxruht.jpg?Expires=1698283596&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=ut2kn46Lz%2FRwqJ9jWJ0RBDut12****`
         */
        ResultUrl: string;
    };
}
