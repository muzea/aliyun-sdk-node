export interface ListAppBySwimmingLaneGroupTagResponse {
    /**
     * 请求ID。
     * @example `7466566F-F30F-4A29-965D-3E0AF21D****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 数据概览。
     * @example `[{appName:"test",appId:"hkhon1po62@958bba95910341f
    "}]`
     */
    Data: any;
}
