export interface FaceMakeupResponse {
    /**
     * 请求ID。
     * @example `AAECB606-E752-4CEA-8EA5-6EBE942A7663`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 人脸美妆结果图像的URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://algo-app-taobao-mm-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/pixelai-portrait-makeup/2020_03_24/c0f815f46b3df61e_facebeauty.jpg?Expires=1585279130&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=1QkDpev9B7ybzup1MN%2F72kzrKL****`
         */
        ImageURL: string;
    };
}
