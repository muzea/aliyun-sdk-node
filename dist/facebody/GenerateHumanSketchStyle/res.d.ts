export interface GenerateHumanSketchStyleResponse {
    /**
     * 请求ID。
     * @example `E499788C-22DA-4F0E-B9C0-0E9D30A25716`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 返回图片URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。
         * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/person-image-pencil/fd49dd0a-9e24-4bb5-b303-0745cdb453e0_7aa6_20210128-073045.jpg?Expires=1611820849&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=1oLYG%2FPe%2BNRIK7XcsUQYaKF%2B1C****`
         */
        ImageURL: string;
    };
}
