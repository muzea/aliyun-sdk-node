export interface GetHotlineAgentStatusResponse {
    /**
     * 错误描述
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 坐席状态（离线、空闲、话后处理、通话中、小休-休息、小休-就餐、小休-会议、小休-培训、小休-辅导）
     * @example `通话中`
     */
    Data: string;
    /**
     * 错误编码
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    HttpStatusCode: number;
}
