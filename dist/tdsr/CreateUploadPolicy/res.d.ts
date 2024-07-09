export interface CreateUploadPolicyResponse {
    /**
     * 请求ID，与入参requestId对应
     * @example `B28A2ECB-AB29-1E01****`
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
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * accessId
         * @example `LTAI5t9k9****`
         */
        AccessId: string;
        /**
         * 授权
         * @example `eyJleHBpcmF0aW9uIjoiMj****`
         */
        Policy: string;
        /**
         * 签名
         * @example `KdnPJFIG25SM****`
         */
        Signature: string;
        /**
         * 授权路径
         * @example `dir/`
         */
        Dir: string;
        /**
         * 上传地址
         * @example `oss.aliyun.com`
         */
        Host: string;
        /**
         * 授权失效时间(s)
         * @example `1658812297`
         */
        Expire: string;
        /**
         * 上传回调
         * @example `""`
         */
        Callback: string;
    };
}
