export interface BlurFaceResponse {
    /**
     * 请求ID。
     * @example `4C6080B0-64C4-488E-BBA6-245749CA11AD`
     */
    RequestId: string;
    /**
     * 结果数据内容。
     */
    Data: {
        /**
         * 脱敏后的图片URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://viapi-cn-shanghai-dha-segmenter.oss-cn-shanghai.aliyuncs.com/upload/result_FaceBlur/2020-8-5/invi_FaceBlur_015966077063461060948_IBdDsq.jpg?Expires=1596609506&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=x8n3jq1X91Sq7BKWE4vRHSu6g9****`
         */
        ImageURL: string;
        /**
         * 脱敏后的图片Mask地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/person-image-cartoonizer/59697D68-2A6E-4553-89BD-0FADD07881E8_7ee5_20201027-070958.jpg?Expires=1603784400&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSR****&Signature=ut2kn46Lz%2FRwqJ9jWJ0RBDut12****`
         */
        MaskURL: string;
    };
}
