export interface DescribeCustomEventCountResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。当请求成功时，返回成功信息；当请求失败时，返回失败原因。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `60912C8D-B340-4253-ADE7-61ACDFD25CFC`
     */
    RequestId: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: boolean;
    CustomEventCounts: {
        /**
         * 自定义事件详情。
         */
        CustomEventCount: {
            /**
             * 事件发生的时间。
             * 格式为Unix时间戳，即从1970年1月1日开始所经过的毫秒数。
             * @example `1552267615000`
             */
            Time: number;
            /**
             * 事件数量。
             * @example `20`
             */
            Num: number;
            /**
             * 事件名称。
             * @example `BABEL_BUY`
             */
            Name: string;
        }[];
    };
}
