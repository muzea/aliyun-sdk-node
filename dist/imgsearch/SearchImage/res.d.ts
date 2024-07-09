export interface SearchImageResponse {
    /**
     * 请求ID。
     * @example `A98DBCEB-45E2-5F5F-B5ED-F2340182FD87`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 相似的图片列表。
         */
        MatchList: {
            /**
             * 查找结果，相似图像的URL地址。
             * > - 建议您使用**EntryId**来做结果判断，这里返回的**ImageURL**仅是您在建图片库输入的字符串，平台服务端不保留用户图片库的原始图片。如果上传图片库时使用的是有时效性的访问链接，需要您本地保留图片，并保存**EntryID**和图片的映射关系。
             * - 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。
             * @example `http://vision-console.oss-cn-shanghai.aliyuncs.com/1902352443710590/kv6dvd1ie0c6-ipvnszc8584116.jpg?Expires=1635150265&OSSAccessKeyId=LTAI4Fp1Gt5RzwdEXL3o****&Signature=8rj0%2Bxg%2Bni5NxQAcEQqISX5j1w****`
             */
            ImageUrl: string;
            /**
             * 实体ID。
             * @example `123456`
             */
            EntityId: string;
            /**
             * 相似得分，取值0~10，分数越大，相似度越高。
             * @example `10`
             */
            Score: number;
            /**
             * 数据ID。
             * @example `001`
             */
            DataId: string;
            /**
             * 自定义数据。
             * @example `tangyan`
             */
            ExtraData: string;
        }[];
    };
}
