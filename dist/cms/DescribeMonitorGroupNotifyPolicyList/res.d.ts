export interface DescribeMonitorGroupNotifyPolicyListResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `6072F026-C441-41A6-B114-35A1E8F8FDD3`
     */
    RequestId: string;
    /**
     * 总记录条数。
     * @example `11`
     */
    Total: number;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
    NotifyPolicyList: {
        /**
         * 暂停通知列表。
         */
        NotifyPolicy: {
            /**
             * 结束时间戳。
             * 单位：毫秒。
             * @example `1551761781273`
             */
            EndTime: number;
            /**
             * 禁用类型。
             * @example `PauseNotify`
             */
            Type: string;
            /**
             * 开始时间戳。
             * 单位：毫秒。
             * @example `1551761781273`
             */
            StartTime: number;
            /**
             * 应用分组ID。
             * @example `6780****`
             */
            GroupId: string;
            /**
             * 暂停通知ID。
             * @example `123****`
             */
            Id: string;
        }[];
    };
}
