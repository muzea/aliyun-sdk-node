export interface ReplyMessageApiResponse {
    /**
     * 返回描述
     * @example `请求成功`
     */
    Message: string;
    /**
     * 接口交互id
     * @example `43135C31-E47A-5AD7-A693-6DC635201CE4`
     */
    RequestId: string;
    /**
     * 无
     * @example `null`
     */
    Data: string;
    /**
     * 状态值
     * @example `200`
     */
    Code: string;
    /**
     * 接口请求成功与否
     * @example `true`
     */
    Success: boolean;
}
