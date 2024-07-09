export interface FaceFilterResponse {
    /**
     * 请求ID。
     * @example `EA20A53F-9523-4FE6-92D4-69F9E0A066AF`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 输出转换风格后的图片URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。
         * @example `http://algo-app-taobao-mm-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/pixelai-portrait-filter/2020_03_24/bd6bb112b4ef3c8c_facebeauty.jpg?Expires=1585278860&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=UB3gBjSyTm0EZC0K881P883JpX****`
         */
        ImageURL: string;
    };
}
