export interface UpdateEventSubRequest {
    /**
     * 订阅的应用ID。
     * @example `9qb1****`
     */
    "AppId": string;
    /**
     * 订阅事件ID。
     * @example `ad53276431c****`
     */
    "SubscribeId": string;
    /**
     * 订阅的频道ID。
     * >- 如果Users.N参数不为空，则此参数必填。- ChannelId为*或者不填，表示为全频道订阅，每个AppId只允许1个全频道订阅。- 每个AppId最多同时允许创建20个订阅事件。
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
     * 回调地址。回调内容请参见[CallBack](~~610983~~)。
     * @example `http://****.com/callback`
     */
    "CallbackUrl": string;
}
