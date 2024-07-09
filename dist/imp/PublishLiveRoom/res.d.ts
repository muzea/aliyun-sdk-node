export interface PublishLiveRoomResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 创建场景化直播返回的结果。
     */
    Result: {
        /**
         * 直播ID。
         * @example `b7f2****ebb3`
         */
        LiveId: string;
        /**
         * 直播播流地址。
         * @example `http://demo-app-live.com/live/b7f29c02-****-40fd-****-e8d06a8aebb3.flv?auth_key=1627522726-0-0-******e620b363d4cf8a8e3`
         */
        LiveUrl: string;
        /**
         * 直播推流地址。
         * @example `rtmp://demo-app-push.com/live/b7f29c02-****-40fd-****-e8d06a8aebb3?auth_key=1627522726-0-0-******e620b363d4cf8a8e3`
         */
        PushUrl: string;
    };
}
