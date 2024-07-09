export interface ListMessageGroupResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-****-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 消息组列表。
         */
        GroupList: {
            /**
             * 互动消息应用ID。
             * @example `VKL3***`
             */
            AppId: string;
            /**
             * 消息组创建UTC时间戳。
             * @example `1502280113`
             */
            CreateTime: number;
            /**
             * 创建人ID。
             * @example `as****hs`
             */
            CreatorId: string;
            /**
             * 拓展字段。
             */
            Extension: any;
            /**
             * 消息组ID。
             * @example `AE35-****-T95F`
             */
            GroupId: string;
            /**
             * 消息组状态。默认值为**1**，表示消息组状态正常。
             * @example `1`
             */
            Status: number;
        }[];
        /**
         * 是否还有下一页，取值：
         * - true：有下一页。
         * - false：没有下一页。
         * @example `false`
         */
        HasMore: boolean;
        /**
         * 消息组总数。
         * @example `5`
         */
        Total: number;
    };
}
