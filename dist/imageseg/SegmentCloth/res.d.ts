export interface SegmentClothResponse {
    /**
     * 请求ID。
     * @example `BCE049A3-FE69-41CF-A870-5970156388A7`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 返回元素的数组。
         */
        Elements: {
            /**
             * 返回抠图结果图像URL地址。
             * 抠图之后返回四通道PNG图，无压缩，图像尺寸保持不变，图像体积会变大。
             * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
             * @example `http://viapi-cn-shanghai-dha-segmenter.oss-cn-shanghai.aliyuncs.com/upload/clothingsegmentation-2020-06-17-16-54-40-688c84cbbd-hnqfq/2020-6-18/invi__015924459307821000041_IIVHoM.png?Expires=1592447730&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=Hy8pn3IQj8nuKN0LEaC57cee9L****`
             */
            ImageURL: string;
            /**
             * 根据用户输入的`clothClass`返回一个服饰类别对应的URL。
             * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
             */
            ClassUrl: any;
        }[];
    };
}
