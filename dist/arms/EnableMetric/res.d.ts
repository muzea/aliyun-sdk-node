export interface EnableMetricResponse {
    /**
     * Id of the request
     * @example `0231DA4B-3D11-5433-9376-3B5B46C7228D`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结构体。
     * @example `success`
     */
    Data: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 附加消息
     * @example `success`
     */
    Message: string;
}
