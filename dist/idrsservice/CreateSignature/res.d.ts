export interface CreateSignatureResponse {
    /**
     * requestId
     * @example `A1899517-BB99-5D3E-A71B-97524DCB0942`
     */
    RequestId: string;
    /**
     * code
     * @example `OK`
     */
    Code: string;
    /**
     * 提示
     * @example `无`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * mrtc 应用 ID
         * @example `124325213125435`
         */
        RtcAppId: string;
        /**
         * mrtc 工作空间
         * @example `my_workspace`
         */
        RtcWorkspaceId: string;
        /**
         * mrtc 业务名
         * @example `音视频biz`
         */
        RtcBizName: string;
        /**
         * mrtc 签名
         * @example `字符串签名token`
         */
        RtcSign: string;
        /**
         * 过期时间（单位：毫秒）
         * @example `300`
         */
        ExpireTime: string;
    };
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * HTTP 状态码
     * @example `200`
     */
    HttpCode: number;
    /**
     * 错误列表
     */
    Errors: {
        /**
         * 错误 ID
         * @example `A1899517-BB99-5D3E-A71B-97524DCB0942`
         */
        Field: string;
        /**
         * 错误消息
         * @example `无`
         */
        Message: string;
    }[];
}
