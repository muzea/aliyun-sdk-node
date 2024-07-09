export interface AddGatewayRouteResponse {
    /**
     * 请求ID。
     * @example `03A3E2F4-6804-5663-9D5D-2EC47A1*****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 返回代码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 创建的路由ID。
     * @example `555`
     */
    Data: number;
    /**
     * 错误码。
     * - InvalidParameter：参数错误：缺失、格式不对
     * - IllegalRequest：请求非法：参数越权
     * - NoPermission：权限专用
     * - NotFound：资源404
     * - InternalError：内部错误
     * @example `InvalidParameter`
     */
    ErrorCode: string;
}
