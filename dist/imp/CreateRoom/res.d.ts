export interface CreateRoomResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 创建房间的返回结果。
     */
    Result: {
        /**
         * 房间ID。
         * @example `AE35-****-T95F`
         */
        RoomId: string;
    };
}
