export interface DescribeFabricExplorerResponse {
    /**
     * 请求ID
     * @example `19E91C1D-9BD0-468F-A7DA-915263C6689F`
     */
    RequestId: string;
    /**
     * 返回可转换成JSON的字符串
     * @example `{}`
     */
    Result: string;
    /**
     * 返回状态
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回代码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 错误消息
     * @example `An error in the monitoring service has occurred.`
     */
    DynamicMessage: string;
    /**
     * 错误代码
     * @example `ExplorerException`
     */
    DynamicCode: string;
}
