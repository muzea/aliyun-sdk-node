export interface DescribeImageModerationResultResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `2881AD4F-638B-52A3-BA20-F74C5B1CEAE3`
     */
    RequestId: string;
    /**
     * 错误码，和HTTP状态码一致。
     * @example `200`
     */
    Code: number;
    /**
     * 本次请求的响应消息。
     * @example `success`
     */
    Msg: string;
    /**
     * 图片内容检测后的结果。
     */
    Data: {
        /**
         * API请求时传入的dataId 的值，如请求时未传入，则没有该字段。
         * @example `2a5389eb-4ff8-4584-ac99-644e2a539aa1`
         */
        DataId: string;
        /**
         * 图片检测的风险标签、置信分等参数结果。
         */
        Result: {
            /**
             * 图片内容检测运算后返回的标签。
             * @example `violent_explosion`
             */
            Label: string;
            /**
             * 置信分值，0到100分，保留到小数点后2位。
             * @example `81.22`
             */
            Confidence: number;
        }[];
        /**
         * 结果帧数量
         * @example `1`
         */
        FrameNum: number;
        /**
         * 图片截帧信息。
         * @example `[{"result":[{"confidence":81.22,"label":"violent_explosion"}]}]`
         */
        Frame: string;
        ReqId: string;
        RiskLevel: string;
    };
}
