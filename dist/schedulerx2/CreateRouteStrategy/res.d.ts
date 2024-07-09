export interface CreateRouteStrategyResponse {
    /**
     * 请求ID
     * @example `4F68ABED-AC31-4412-9297-D9A8F0401108`
     */
    RequestId: string;
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息，包含报错与提示
     * @example `strategy name is null or empty.`
     */
    Message: string;
    /**
     * 接口调用是否成功。取值如下：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据
     */
    Data: {};
}
