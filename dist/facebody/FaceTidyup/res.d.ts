export interface FaceTidyupResponse {
    /**
     * 请求ID。
     * @example `8F3BF64D-4FDF-4AAF-9B34-11B4EF4CE815`
     */
    RequestId: string;
    /**
     * 返回的数据内容。
     */
    Data: {
        /**
         * 人脸美型结果图片URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://algo-app-taobao-mm-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/pixelai-portrait-shape/2020_03_24/7cb93b25ac5cbbb4_facetidy.jpg?Expires=1585280344&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=RIPIlTZ2GNmdLyACGWz6wUzJxN****`
         */
        ImageURL: string;
    };
}
