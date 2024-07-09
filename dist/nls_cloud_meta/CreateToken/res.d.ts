export interface CreateTokenResponse {
    /**
     * 请求ID。
     * @example `A51587CB-5193-4DB8-9AED-CD4365C2****`
     */
    RequestId: string;
    /**
     * 失败响应的错误信息。
     * @example `Specified access key is not found.`
     */
    ErrMsg: string;
    /**
     * Token对象。
     */
    Token: {
        /**
         * Token的有效期时间戳。单位：秒。例如1553825814换算为北京时间为：2019/3/29 10:16:54，即Token在该时间之前有效。
         * @example `1553825814`
         */
        ExpireTime: number;
        /**
         * 阿里云账号ID。
         * @example `107992689699****`
         */
        UserId: string;
        /**
         * 请求分配的Token值。
         * @example `fb1c4648a61b426589dab0fe90d1****`
         */
        Id: string;
    };
    /**
     * 语音内部请求ID。
     * @example `dd05a301b40441c99a2671905325****`
     */
    NlsRequestId: string;
    /**
     * 失败响应的错误码。
     * @example `50000000`
     */
    ErrCode: number;
}
