export interface BindBatchAxgResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[错误码列表](~~109196~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `5DCCA8CD-6C0A-50B4-A496-B1D2AB48A1C3`
     */
    RequestId: string;
    SecretBindList: {
        /**
         * AXG绑定结果列表。
         */
        SecretBind: {
            /**
             * 隐私号码，即X号码。
             * @example `139****1111`
             */
            SecretNo: string;
            /**
             * 绑定关系ID。
             * @example `1000012345******`
             */
            SubsId: string;
            /**
             * 分机号。
             * > 接口BindBatchAxg不涉及分机号码，请忽略。
             * @example `257`
             */
            Extension: string;
            /**
             * AXG中的G组ID，即GID。
             * @example `200001234****`
             */
            GroupId: string;
            /**
             * AXG中的A号码。
             * @example `139****0000`
             */
            PhoneNoA: string;
            /**
             * 单条AXG创建绑定的请求状态码。
             * - 返回OK代表请求成功。
             * - 其他错误码，请参见[错误码列表](https://help.aliyun.com/document_detail/109196.html)。
             * @example `isv.INVALID_PARAMETERS`
             */
            Code: string;
            /**
             * 单条AXG创建绑定的请求状态码描述。
             * @example `ringConfig invalid`
             */
            Message: string;
        }[];
    };
}
