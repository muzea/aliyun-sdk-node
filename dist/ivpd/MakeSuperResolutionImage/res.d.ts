export interface MakeSuperResolutionImageResponse {
    /**
     *
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID，阿里云系统自动生成
     * @example `7308917D-9E1B-4F11-8A79-0F140270E672`
     */
    RequestId: string;
    /**
     * 响应的数据，具体字段请查看结构定义。
     */
    Data: {
        /**
         * 清晰化后图片URL地址
         * @example `http://vigen-invi-cdn.alibaba.com/aliyun-doc/pop/images/super-resolution-result.png`
         */
        Url: string;
    };
    /**
     * 状态码
     * @example `0`
     */
    Code: string;
}
