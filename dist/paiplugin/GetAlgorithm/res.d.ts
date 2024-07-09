export interface GetAlgorithmResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 算法说明。
         * @example `算法说明`
         */
        Description: string;
        /**
         * 算法ID。
         * @example `sms_recall`
         */
        Id: string;
        /**
         * 预测所需参数名与对应的参数说明。
         * @example `{}`
         */
        InferUserConfigMap: string;
        /**
         * 算法名称。
         * @example `短信召回`
         */
        Name: string;
        /**
         * 训练所需参数名与对应的参数说明。
         * @example `{}`
         */
        TrainUserConfigMap: string;
    };
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: number;
    /**
     * 错误信息。
     * @example `OK`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `f8651828-609d-4de8-ab49-ab781d7fd85a`
     */
    RequestId: string;
}
