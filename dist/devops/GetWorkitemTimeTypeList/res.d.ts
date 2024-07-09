export interface GetWorkitemTimeTypeListResponse {
    /**
     * Id of the request
     * @example `HC93CE1A-8D7A-13A9-8306-7465DE2E5C0F`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMsg: string;
    /**
     * - 当success为false，返回业务错误码；
     *
     * - 当success为true，返回空值。
     * @example `Invalid.IdNotFound`
     */
    errorCode: string;
    /**
     * true 成功 false 失败
     * @example `true`
     */
    success: string;
    /**
     * 时间类型
     */
    timeType: {
        /**
         * 工时类型标识符
         * @example `67fb001005aac8d3d2a3372416`
         */
        identifier: string;
        /**
         * 状态名
         */
        name: string;
        /**
         * 展示名称
         * @example `deploy`
         */
        displayName: string;
        /**
         * 描述
         * @example `描述文案`
         */
        description: string;
        /**
         * 展示位置
         * @example `1`
         */
        position: number;
    }[];
}
