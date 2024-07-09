export interface CreateEventSubRequest {
    /**
     * 订阅的应用ID。
     * @example `9qb1****`
     */
    "AppId": string;
    /**
     * 订阅的频道ID。您可通过调用[ListEventSub](~~2628135~~)接口查询订阅的频道ID。
     * >- 如果Users.N参数不为空，则此参数必填。- ChannelId为*或者不填，表示为全频道订阅，每个AppId只允许1个全频道订阅。- 每个AppId最多同时允许创建20个订阅。
     * @example `123333`
     */
    "ChannelId"?: string;
    /**
     * 订阅哪些用户的消息。
     */
    "Users"?: string[];
    /**
     * 订阅事件。
     */
    "Events": string[];
    /**
     * 回调地址。回调内容请参见以下回调内容示例。
     * @example `http://****.com/callback`
     */
    "CallbackUrl": string;
}
