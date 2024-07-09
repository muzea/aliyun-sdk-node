export interface OnsDLQMessageResendByIdResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `D94CC769-4DC3-4690-A868-9D0631B1****`
     */
    RequestId: string;
    Data: {
        /**
         * 返回的消息列表。
         */
        MsgId: string[];
    };
}
