export interface DescribeAcceleratorServiceStatusResponse {
    /**
     * Id of the request
     * @example `6FEA0CF3-D3B9-43E5-A304-D217037876A8`
     */
    RequestId: string;
    /**
     * 服务开通状态
     * @example `Normal`
     */
    Status: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 是否调用成功。true：调用成功。false：调用失败。
     * @example `True`
     */
    Success: string;
    /**
     * 错误信息。
     * @example `success`
     */
    Message: string;
}
