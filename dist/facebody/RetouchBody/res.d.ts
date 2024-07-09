export interface RetouchBodyResponse {
    /**
     * 返回的数据内容。
     */
    Data: {
        /**
         * 美型后图像的URL地址。
         * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/body-beautifier/C0AFBD40-C705-52EB-90F5-37FA2FA62880_468d_20210926-075355.jpg?Expires=1632644635&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=O7M9ITFAExDmwnZ86BFDVGeE%2BZ****`
         */
        ImageURL: string;
    };
    /**
     * 请求ID。
     * @example `C0AFBD40-C705-52EB-90F5-37FA2FA62880`
     */
    RequestId: string;
}
