export interface CreateErRouteMapResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID。
     * @example `039C3C3A-3C37-5672-80D5-D8CD48C676D1`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 路由策略ID
         * @example `er-rmap-uwglhzom`
         */
        ErRouteMapId: string;
    };
}
