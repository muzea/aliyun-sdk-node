export interface QueryConsumerGroupListResponse {
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPage: number;
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
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 每页显示的消费组数。
     * @example `2`
     */
    PageSize: number;
    /**
     * 返回结果总页数。
     * @example `4`
     */
    PageCount: number;
    /**
     * 查询到的消费组总数。
     * @example `8`
     */
    Total: number;
    Data: {
        /**
         * 调用成功时，返回的消费组详情，请参见ConsumerGroupDTO。
         */
        ConsumerGroupDTO: {
            /**
             * 消费组ID。
             * @example `nJRaJPn5U1JITGf******	`
             */
            GroupId: string;
            /**
             * 消费组名称。
             * @example `XX消费组1`
             */
            GroupName: string;
            /**
             * 消费组创建时间。为UTC时间，以毫秒计，格式为“yyyy-MM-dd'T'HH:mm:ss.SSSZ”。
             * @example `2020-05-20T00:05:20.000Z`
             */
            CreateTime: string;
        }[];
    };
}
