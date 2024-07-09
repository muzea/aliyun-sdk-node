export interface ListRoomsResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 查询房间列表的返回结果。
     */
    Result: {
        /**
         * 房间总数。
         * @example `1000`
         */
        TotalCount: number;
        /**
         * 房间列表总页数。
         * @example `100`
         */
        PageTotal: number;
        /**
         * 是否还有下一页。
         * @example `true`
         */
        HasMore: boolean;
        /**
         * 房间列表。
         */
        RoomInfoList: {
            /**
             * 房间ID，由字母、数字、小数点（.）和短横线（-）组成，最大长度36个字符。
             * @example `AE35-****-T95F`
             */
            RoomId: string;
            /**
             * 房间标题。
             * @example `RoomTitle001`
             */
            Title: string;
            /**
             * 房主ID。
             * @example `as****hs`
             */
            RoomOwnerId: string;
            /**
             * 房间公告。
             * @example `RoomNotice001`
             */
            Notice: string;
            /**
             * 用户访问数。
             * @example `100`
             */
            Uv: number;
            /**
             * 用户在线数。
             * @example `50`
             */
            OnlineCount: number;
            /**
             * 活跃插件列表。
             */
            PluginInstanceInfoList: {
                /**
                 * 插件类型。取值：
                 * - **live**：直播。
                 * - **chat**：聊天。
                 * - **rtc**：实时音视频通讯。
                 * - **wb**：白板。
                 * @example `live`
                 */
                PluginType: string;
                /**
                 * 插件实例ID。
                 * @example `H63U-****-AS7D`
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
             * 房间创建时间戳。
             * @example `1624589848000`
             */
            CreateTime: string;
            /**
             * 应用唯一标识，可以包含小写字母、数字，长度为6个字符。
             * @example `7m***q`
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
        }[];
    };
}
