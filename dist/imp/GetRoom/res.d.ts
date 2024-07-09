export interface GetRoomResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 查询房间的返回结果。
     */
    Result: {
        /**
         * 房间信息。
         */
        RoomInfo: {
            /**
             * 房间唯一标识。
             * @example `AE35-****-T95F`
             */
            RoomId: string;
            /**
             * 房间标题。
             * @example `RoomTitle001`
             */
            Title: string;
            /**
             * 房间创建时间戳，单位：毫秒。
             * @example `1624589848000`
             */
            CreateTime: number;
            /**
             * 房间公告。
             * @example `RoomNotice001`
             */
            Notice: string;
            /**
             * 房主用户ID。
             * @example `as****hs`
             */
            RoomOwnerId: string;
            /**
             * 访问用户数。
             * @example `100`
             */
            Uv: number;
            /**
             * 在线用户数。
             * @example `50`
             */
            OnlineCount: number;
            /**
             * 活跃插件列表。
             */
            PluginInstanceInfoList: {
                /**
                 * 插件唯一标识，取值：
                 * - **live**：直播。
                 * - **wb**：白板。
                 * - **chat**：聊天。
                 * - **RTC**：音视频通信。
                 * @example `live`
                 */
                PluginType: string;
                /**
                 * 插件实例唯一标识。
                 * @example `HASU-****-ASHD`
                 */
                PluginId: string;
                /**
                 * 插件实例创建时间戳，单位：毫秒。
                 * @example `1624589848000`
                 */
                CreateTime: number;
                /**
                 * 插件拓展字段。
                 */
                Extension: any;
            }[];
            /**
             * 应用唯一标识，可以包含小写字母、数字，长度为6个字符。
             * @example `lq****cu`
             */
            AppId: string;
            /**
             * 创建房间使用的模板ID。
             * @example `default`
             */
            TemplateId: string;
            /**
             * 房间拓展字段。
             */
            Extension: any;
            /**
             * 访问用户人次。
             * @example `200`
             */
            Pv: number;
            /**
             * 管理员ID列表。
             */
            AdminIdList: string[];
        };
    };
}
