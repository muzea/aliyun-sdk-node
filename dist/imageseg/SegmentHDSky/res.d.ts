export interface SegmentHDSkyResponse {
    /**
     * 请求ID。
     * @example `1173F38F-B4F4-4A07-AB2E-D490C01347E5`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 分割后的图像URL地址。
         * 抠图之后返回四通道PNG图，无压缩，图像尺寸保持不变，图像体积会变大。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/sky-segmentation-hd/res/1173F38F-B4F4-4A07-AB2E-D490C01347E5_0d56_20201027-061858.jpg?Expires=1603781339&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=2F8%2Bj%2FWruWOMqDezwpnJOkcNJD****`
         */
        ImageURL: string;
    };
}
