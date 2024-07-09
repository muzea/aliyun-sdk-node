export interface CreateEventSubscribeRequest {
    /**
     * 订阅的用户。
     * @example `user1`
     */
    "Users"?: string[];
    /**
     * 订阅的事件。
     * @example `ChannelEvent`
     */
    "Events": string[];
    /**
     * 订阅的应用ID。
     * @example `9qb1****`
     */
    "AppId": string;
    /**
     * 订阅的频道ID。
     * > 如果Users.N参数不为空，则此参数必填。
     * @example `123333`
     */
    "ChannelId"?: string;
    /**
     * 回调地址。回调内容请参见以下回调内容示例。
     * @example `http://****.com/callback`
     */
    "CallbackUrl": string;
    /**
     * 客户端创建订阅的幂等标识。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken": string;
    /**
     * 是否开启回调鉴权，取值：
     * - **true**：开启。
     * - **fasle**（默认值）：关闭。
     * 详细信息请参见以下回调鉴权说明。
     * @example `false`
     */
    "NeedCallbackAuth"?: boolean;
    /**
     * 用户角色，取值：
     * - **1**：订阅频道中的主播消息。
     * - **2**：订阅频道中的观众消息。
     * - **空或其他值**：不进行角色过滤，订阅频道中的所有角色的消息。
     * @example `1`
     */
    "Role"?: number;
}
