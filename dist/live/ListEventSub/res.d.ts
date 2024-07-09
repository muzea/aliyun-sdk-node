export interface ListEventSubResponse {
    /**
     * 请求ID。
     * @example `AE050E24-BE9B-1E79-BB30-7EA0BBAE7F08`
     */
    RequestId: string;
    /**
     * 订阅事件列表。
     */
    Subscribers: {
        /**
         * 订阅事件ID。
         * @example `09be0d2254cb5a89f4cbd86403ec****`
         */
        SubId: string;
        /**
         * 订阅的频道ID。
         * @example `testmodify`
         */
        ChannelId: string;
        /**
         * 订阅的事件，取值：
         * - ChannelEvent：频道事件，包括频道开启与关闭。
         * - UserEvent：用户事件，包括用户入离会等。
         */
        Events: string[];
        /**
         * 回调地址。
         * @example `http://****.com/callback`
         */
        CallbackUrl: string;
        /**
         * 创建订阅时间。东八区时间，是UTC+8时区的时间。格式：yyyy-MM-dd hh:mm:ss。
         * @example `2023-08-18 10:14:49`
         */
        CreateTime: string;
        /**
         * 修改订阅时间。东八区时间，是UTC+8时区的时间。格式：yyyy-MM-dd hh:mm:ss。
         * @example `2023-08-18 10:14:49`
         */
        ModifyTime: string;
        /**
         * 只回调此用户的事件，不建议与Roles同用。
         */
        Users: string[];
        /**
         * 回调哪个角色的事件，取值：
         * - 1：只回调主播事件。
         * - 2：只回调观众事件。
         * 无值或其他值表示回调所有用户事件。
         * @example `1`
         */
        Roles: number;
    }[];
}
