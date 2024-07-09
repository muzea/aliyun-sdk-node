export interface UpdateVccResponse {
    /**
     * Code码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 请求ID
     * @example `F906C4D3-7444-58E2-9819-E3D8563571A3`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 灵骏连接实例ID
         * @example `vcc-cn-2r42v22cn03`
         */
        VccId: string;
    };
}
