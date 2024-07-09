export interface EnhanceImageColorResponse {
    /**
     * 请求ID。
     * @example `2F306ABD-5BC3-4FA0-89CF-0DED5B3654EB`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 返回处理后的图像URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://algo-app-aic-vd-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/image-recolor/2020-06-23-10/24%3A14-3cf26e84-a5d2-49b0-8332-0e139e20c49e.png?Expires=1592909654&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=fHrYvitvm0qZJ9nrWYa%2Fjd4pQS****`
         */
        ImageURL: string;
    };
}
