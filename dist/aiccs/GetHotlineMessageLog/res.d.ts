export interface GetHotlineMessageLogResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。返回Success表示请求成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `xxxx`
     */
    Message: string;
    /**
     * 语音信息。
     */
    Data: {
        /**
         * 会话ID。
         * @example `100****2077`
         */
        Acid: string;
        /**
         * 发送方类型。取值：
         * - **1**：会员
         * - **2**：坐席
         * @example `1`
         */
        SenderType: number;
        /**
         * 开始时间。
         * @example `1623738026460`
         */
        StartTime: number;
        /**
         * 结束时间。
         * @example `1623738027480`
         */
        EndTime: number;
        /**
         * 记录ID。
         * @example `11deca999****`
         */
        Mid: string;
        /**
         * 会话内容。
         * @example `您好。`
         */
        Content: string;
    }[];
}
