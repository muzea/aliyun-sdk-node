export interface SegmentSkyResponse {
    /**
     * 请求ID。
     * @example `80E9D0A0-0330-4210-9986-CAC50C922FF0`
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
         * @example `http://viapi-cn-shanghai-dha-segmenter.oss-cn-shanghai.aliyuncs.com/upload/skysegmentation-2020-05-18-10-44-16-5bc8dc79f9-92b7z/2020-5-18/invi_skySegmentator_015897703560961000003_SqZLDv.png?Expires=1589772156&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=gXrzAUl%2BvIdYbQ9XKdho54MlkX****`
         */
        ImageURL: string;
    };
}
