export interface GetMqConsumerTagResponse {
    /**
     * 接口请求结果返回码
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息, 当success=false的时候, 可以取到message
     * @example `success`
     */
    Message: string;
    /**
     * 返回值,即你的唯一的mq消费的tag
     * @example `46434030`
     */
    Data: string;
    /**
     * 请求唯一识别码
     * @example `CA6204AC-6AA9-4CFA-9310-7DFD20C19EBC`
     */
    RequestId: string;
    /**
     * 调用是否成功。true：表示成功；false：表示失败。
     * @example `true`
     */
    Success: boolean;
}
