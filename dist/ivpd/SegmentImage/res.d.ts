export interface SegmentImageResponse {
    /**
     *
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID，阿里云系统生成
     * @example `7308917D-9E1B-4F11-8A79-0F140270E672`
     */
    RequestId: string;
    /**
     * 结果数据，请展开查看
     */
    Data: {
        /**
         * 抠图结果URL
         * @example `http://a.b.c/2.png`
         */
        Url: string;
    };
    /**
     * 状态码
     * @example `0`
     */
    Code: string;
}
