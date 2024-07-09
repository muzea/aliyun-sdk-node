export interface GetNodeResponse {
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
     */
    RequestId: string;
    /**
     * 节点信息列表。
     */
    Data: {
        /**
         * 节点的网络地址。
         * @example `12345678`
         */
        DevAddr: string;
        /**
         * 最近一次入网的时间，UNIX时间戳，以毫秒为单位。
         * @example `1514736000000`
         */
        LastJoinMillis: number;
        /**
         * 节点的DevEUI。
         * @example `0000000000000000`
         */
        DevEui: string;
        /**
         * 节点加入当前节点分组的时间，UNIX时间戳，以毫秒为单位。
         * @example `1514736000000`
         */
        BoundMillis: number;
        /**
         * 节点所采用的LoRaWAN Class模式，可取值：A、B、C。
         * @example `A`
         */
        ClassMode: string;
        AuthTypes: string;
    };
}
