export interface FaceBeautyResponse {
    /**
     * 请求ID。
     * @example `35C284E1-C5F5-4E5E-B7AD-97BBF485CDC8`
     */
    RequestId: string;
    /**
     * 返回的数据内容。
     */
    Data: {
        /**
         * 美颜后图像的URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://algo-app-taobao-mm-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/pixelai-portrait-beauty/2020_03_24/2bbbdb7907901412_facebeauty.jpg?Expires=1585277923&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=myOPfNQcRyijgrWBU%2BZ4dPuV5Q****`
         */
        ImageURL: string;
    };
}
