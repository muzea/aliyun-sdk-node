export interface DescribeUrlModerationResultResponse {
    /**
     * 本次请求的ID。
     * @example `01F9144A-2088-5D87-935B-2DB865284B1A`
     */
    RequestId: string;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 本次请求的响应消息。
     * @example `success`
     */
    Msg: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * API请求时传入的dataId 的值，如请求时未传入，则没有该字段。
         * @example `26769ada6e264e7ba9aa048241e12be9`
         */
        DataId: string;
        /**
         * URL异步检测接口返回的ReqId字段
         * @example `B0963D30-BAB4-562F-9ED0-7A23AEC51C7C
        `
         */
        ReqId: string;
        /**
         * 返回集合。
         */
        Result: {
            /**
             * URL检测运算后返回的标签。
             * @example `sexual_url`
             */
            Label: string;
            /**
             * 置信分值，0到100分，保留到小数点后2位。
             * @example `81.22`
             */
            Confidence: number;
        }[];
        /**
         * 补充信息。
         */
        ExtraInfo: {
            /**
             * ICP备案类型。
             * @example `企业`
             */
            IcpType: string;
            /**
             * ICP备案号。
             * @example `ICP备123456789`
             */
            IcpNo: string;
        };
    };
}
