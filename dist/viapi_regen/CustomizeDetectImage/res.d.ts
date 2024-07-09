export interface CustomizeDetectImageResponse {
    /**
     * 请求ID。
     * @example `7445026B-243E-1F9D-9EEB-A6C7032B50E8`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 检测结果列表。
         */
        Elements: any[];
    };
}
