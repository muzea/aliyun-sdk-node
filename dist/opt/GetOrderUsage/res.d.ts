export interface GetOrderUsageResponse {
    /**
     * 返回结果信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回使用量数据
     */
    Data: any[];
    /**
     * 请求唯一标识
     * @example `5D6653C5-CA2B-14EC-9CF0-50AA0FF49C31`
     */
    RequestId: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    Success: boolean;
}
