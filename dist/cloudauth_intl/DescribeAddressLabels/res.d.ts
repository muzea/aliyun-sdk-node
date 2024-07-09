export interface DescribeAddressLabelsResponse {
    /**
     * Id of the request
     * @example `4EB35****87EBA1`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回码
     * @example `Success`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果
     */
    Data: {
        /**
         * 结果
         */
        LabelList: string[];
    };
}
