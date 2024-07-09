export interface ExtendImageStyleResponse {
    /**
     * 请求ID。
     * @example `F1ABC965-2612-4680-9DE3-B5C77434B9B7`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 进行风格化的结果图片URL地址，图片格式：PNG。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://luban-vgd-invi.oss-cn-hangzhou.aliyuncs.com/upload/result_/2019-9-26/invi__015694889247201016812_spCq4n.jpg?Expires=1569492524&OSSAccessKeyId=LTAI4Fc5SVvzUQ19K1Cz****&Signature=uOEP8gKvdgPtDcrXxRz1v37dsT****`
         */
        Url: string;
        /**
         * 由于版本升级，该字段废弃，不返回结果。
         * @example `-`
         */
        MajorUrl: string;
    };
}
