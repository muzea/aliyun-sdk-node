export interface GetQuotaScheduleResponse {
    /**
     * 请求id。
     * @example `0bc059b716696296266308790e0d3e`
     */
    requestId: string;
    /**
     * 业务成功与否。如果非空且不是200，那么表示业务处理失败。
     * @example `200`
     */
    httpCode: number;
    /**
     * - 当success为false，返回业务错误码；
     *
     * - 当success为true，返回空值。
     * @example `success`
     */
    errorCode: string;
    /**
     * 错误描述信息。
     * @example `异常信息`
     */
    errorMsg: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * quota计划id
         * @example `63`
         */
        id: string;
        /**
         * 类型
         * @example `once`
         */
        type: string;
        /**
         * 计划名称
         * @example `planA`
         */
        plan: string;
        /**
         * 条件值
         */
        condition: {
            /**
             * 生效时间
             * @example `0900`
             */
            at: string;
            /**
             * 生效开始时间
             * @example `2022-04-25T04:23:04Z
            `
             */
            after: string;
        };
        /**
         * 操作者名称
         * @example `userA`
         */
        operator: string;
        /**
         * 时区
         * @example `UTC+8`
         */
        timezone: string;
    }[];
}
