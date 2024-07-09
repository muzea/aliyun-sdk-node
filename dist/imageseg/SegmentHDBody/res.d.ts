export interface SegmentHDBodyResponse {
    /**
     * 请求ID。
     * @example `A8D3F5C3-E414-4981-8D84-E2CADF0B7CBC`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 结果图像URL地址。
         * 输出图像在原始图像的3通道基础上增加alpha通道生成四通道PNG图像作为输出，无压缩，图像尺寸保持不变，图像体积会变大。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://viapi-cn-shanghai-dha-segmenter.oss-cn-shanghai.aliyuncs.com/upload/segmenthdbody-2020-05-18-16-27-45-675d9884d7-kd9dz/2020-5-18/invi_humansegmenter_015897914589851000001_wQbLq9.png?Expires=1589793259&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=Lx6xSS0t7lqEvy5Qd1keccIAjL****`
         */
        ImageURL: string;
    };
}
