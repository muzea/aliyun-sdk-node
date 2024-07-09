export interface ListLiveRoomsByIdResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 批量查询直播信息返回的结果。
     */
    Result: {
        /**
         * 直播列表信息。
         */
        LiveList: {
            /**
             * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
             * @example `7m***q`
             */
            AppId: string;
            /**
             * 直播ID。
             * @example `b7f2****ebb3`
             */
            LiveId: string;
            /**
             * 直播状态。取值：
             * * **0**：已创建，未开始直播。
             * * **1**：直播中。
             * * **2**：直播结束。
             * @example `1`
             */
            Status: number;
            /**
             * 房间ID。
             * @example `AE35-****-T95F`
             */
            RoomId: string;
            /**
             * 弹幕ID。
             * @example `09***f8`
             */
            ChatId: string;
            /**
             * 直播标题。
             * @example `Title001`
             */
            Title: string;
            /**
             * 直播公告。
             * @example `Notice001`
             */
            Notice: string;
            /**
             * 直播封面。
             * @example `http://***.png`
             */
            CoverUrl: string;
            /**
             * 主播ID。
             * @example `as****hs`
             */
            AnchorId: string;
            /**
             * 访问用户数，同个访客多次访问直播间仅计算一个UV。
             * @example `100`
             */
            Uv: number;
            /**
             * 直播拓展字段。
             */
            Extension: any;
            /**
             * 主播昵称。
             * @example `User001`
             */
            AnchorNick: string;
            /**
             * 访问用户人次，访客对同一直播间的多次访问，PV累加。
             * @example `200`
             */
            Pv: number;
            /**
             * 在线用户数。
             * @example `50`
             */
            OnlineCount: number;
            /**
             * 直播的创建时间。单位为ms。
             * @example `1624259500000`
             */
            CreateTime: number;
            /**
             * 直播的开始时间。单位为ms。
             * @example `1624259500000`
             */
            StartTime: number;
            /**
             * 直播的结束时间。单位为ms。
             * @example `1624259500000`
             */
            EndTime: number;
        }[];
    };
}
