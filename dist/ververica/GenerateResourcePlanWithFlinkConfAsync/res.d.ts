export interface GenerateResourcePlanWithFlinkConfAsyncResponse {
    /**
     * 请求ID。
     * @example `CBC799F0-AS7S-1D30-8A4F-882ED4DD****`
     */
    requestId: string;
    /**
     * 表示业务请求是否成功。
     * @example `true`
     */
    success: boolean;
    /**
     * 固定值200。
     * @example `200`
     */
    httpCode: number;
    /**
     * - 当success为false，返回业务错误码；
     *
     * - 当success为true，返回空值。
     * @example `""`
     */
    errorCode: string;
    /**
     * - 当success为false，返回业务错误信息；
     * - 当success为true，返回空值。
     * @example `""`
     */
    errorMessage: string;
    /**
     * - 当success为true，返回异步操作结果信息；
     * - 当success为false，返回空值。
     */
    data: {
        /**
         * 异步工单ID，用于查询异步操作结果。
         * @example `b3dcdb25-bf36-457d-92ba-a36077e8****`
         */
        ticketId: string;
    };
}
