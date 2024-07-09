export interface GetMessageGroupResponse {
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
         * 扩展字段。
         * @example `1`
         */
        Extension: any;
        /**
         * 消息组ID。
         * @example `AE35-****-T95F`
         */
        GroupId: string;
        /**
         * 该消息组是否启用了全员禁言。
         * - true：启动全员禁言。
         * - false：未启动全员禁言。
         * @example `true`
         */
        IsMuteAll: boolean;
        /**
         * 消息组状态。默认为**1**，表示消息组状态正常。
         * @example `1`
         */
        Status: number;
    };
}
