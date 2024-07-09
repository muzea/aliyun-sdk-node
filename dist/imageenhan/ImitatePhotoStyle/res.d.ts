export interface ImitatePhotoStyleResponse {
    /**
     * 请求ID。
     * @example `A880432B-6D9A-4EF4-B7B7-863F38A930D9`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 进行风格变换后的结果图像URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。
         * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/photo-style-imitation/7c4c0809-5e15-4ca7-84b3-ba16711e3255__5cb220200622-075203.jpg?Expires=1592814125&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=DNhhRFPbMBwpHCEhrLdL%2BBF%2BXs****`
         */
        ImageURL: string;
    };
}
