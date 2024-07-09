export interface QueryConsumerGroupByGroupIdResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `73B9DF43-7780-47DE-8BED-077729D28BD2`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的消费组详情。
     */
    Data: {
        /**
         * 消费组ID。
         * @example `nJRaJPn5U1JITGf******	`
         */
        GroupId: string;
        /**
         * 消费组名称。
         * @example `消费组1`
         */
        GroupName: string;
        /**
         * 消费组创建时间。为UTC时间，以毫秒计，格式为“yyyy-MM-dd'T'HH:mm:ss.SSSZ”。
         * @example `2020-05-20T00:05:20.000Z`
         */
        CreateTime: string;
    };
}
