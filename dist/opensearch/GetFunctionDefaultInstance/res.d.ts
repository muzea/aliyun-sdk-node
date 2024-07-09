export interface GetFunctionDefaultInstanceResponse {
    /**
     * 请求状态
     * @example `OK`
     */
    Status: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpCode: number;
    /**
     * 请求id
     * @example `062BA91F-A568-5779-8A5B-9E62C9BB3DC1`
     */
    RequestId: string;
    /**
     * 返回的错误信息
     * @example `default instance not set.`
     */
    Message: string;
    /**
     * 返回的状态码
     * @example `DefaultInstance.NotExist`
     */
    Code: string;
    /**
     * 结果
     * @example `{'Pagination': {'TotalCount': 0, 'PageNumber': 1, 'PageSize': 10}, 'AntConsortiums': []}`
     */
    Result: {
        /**
         * 默认实例名称
         * @example `model1`
         */
        InstanceName: string;
    };
    /**
     * 默认运行时间
     * @example `123`
     */
    Latency: number;
    /**
     * 实例名称
     * @example `sh-bp1oi31w1jn4ctdyv`
     */
    InstanceName: string;
    /**
     * 功能名称
     * @example `cdn_waf`
     */
    FunctionName: string;
}
