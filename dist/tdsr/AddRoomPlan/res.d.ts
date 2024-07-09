export interface AddRoomPlanResponse {
    /**
     * 请求ID，与入参requestId对应
     * @example `4F882EA7-3A1D-0113-94E4-70162C4****`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * 是否请求成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误消息
     * @example `success`
     */
    Message: string;
    /**
     * 文件上传凭据
     */
    Data: {
        /**
         * accessId，OSS SDK上传时参数，对应OSSAccessKeyId
         * @example `LTAI5t9kjkiudsnsu****`
         */
        AccessId: string;
        /**
         * 授权，OSS SDK上传时参数，对应policy
         * @example `eyJleHBpcmF0aW9uIjoiMjAy****`
         */
        Policy: string;
        /**
         * 签名，OSS SDK上传时参数，对应signature
         * @example `ngEWGzttc3v2gJWCxEEt****`
         */
        Signature: string;
        /**
         * 授权路径，OSS SDK上传时参数，需要拼接文件名后使用， ${DIR}/xxx.jpg对应key
         * @example `123/`
         */
        Dir: string;
        /**
         * 上传地址, OSS SDK上传时的请求地址
         * @example `oss.aliyun.com`
         */
        Host: string;
        /**
         * 授权失效时间(s)，可以判断授权是否在有效期内，失效后授权不可用
         * @example `1640315897`
         */
        Expire: string;
        /**
         * 上传回调，保留字段，目前未使用
         * @example `""`
         */
        Callback: string;
    };
}
