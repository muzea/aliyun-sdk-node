export interface ListRoomUsersResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 分页查询房间用户列表返回的结果。
     */
    Result: {
        /**
         * 房间内的用户总数。
         * @example `1000`
         */
        TotalCount: number;
        /**
         * 房间内的用户总页数。
         * @example `100`
         */
        PageTotal: number;
        /**
         * 是否还有下一页用户列表。
         * @example `true`
         */
        HasMore: boolean;
        /**
         * 房间用户列表信息。
         */
        RoomUserList: {
            /**
             * 用户唯一标识。
             * @example `as****hs`
             */
            UserId: string;
            /**
             * 用户昵称。
             * @example `User001`
             */
            Nick: string;
            /**
             * 用户扩展字段。
             */
            Extension: any;
        }[];
    };
}
