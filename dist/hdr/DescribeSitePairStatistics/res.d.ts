export interface DescribeSitePairStatisticsResponse {
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求id。
     * @example `C0D9AAEE-8A21-5693-BCBD-8548914E4F3B`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 主站站点信息
     */
    PrimarySiteGatewayInfo: {
        /**
         * 网关状态
         * @example `connected`
         */
        Status: string;
        /**
         * 网关ID
         * @example `gw-000bzkmmlwgzptnzsdnh`
         */
        GatewayId: string;
        /**
         * 网关版本
         * @example `3.7.3`
         */
        Version: string;
        /**
         * 网关心跳时间
         * @example `1642562996`
         */
        HeartbeatedTime: number;
    };
    /**
     * 从站站点信息
     */
    SecondarySiteGatewayInfo: {
        /**
         * 网关状态
         * @example `connected`
         */
        Status: string;
        /**
         * 网关ID
         * @example `gw-0005qxusucbigzug9wpe`
         */
        GatewayId: string;
        /**
         * 网关版本
         * @example `3.7.3`
         */
        Version: string;
        /**
         * 网关心跳时间
         * @example `1642562996`
         */
        HeartbeatedTime: number;
    };
    PrimarySiteServers: {
        /**
         * 主站说保护服务器信息列表
         */
        server: {
            /**
             * 客户端版本号
             * @example `3.7.3`
             */
            AgentVersion: string;
            /**
             * 受保护服务器连接状态
             * @example `connected`
             */
            ConnectionStatus: string;
            /**
             * 受保护服务器IP地址
             * @example `30.42.105.6`
             */
            IpAddress: string;
            /**
             * 受保护服务器ID
             * @example `sr-000c2rz7q8tkc0g4xgao`
             */
            ServerId: string;
        }[];
    };
    SecondarySiteServers: {
        /**
         * 从站受保护服务器信息列表
         */
        server: {
            /**
             * 客户端版本号
             * @example `3.7.3`
             */
            AgentVersion: string;
            /**
             * 受保护服务器连接状态
             * @example `connected`
             */
            ConnectionStatus: string;
            /**
             * 受保护服务器IP地址
             * @example `192.168.1.4`
             */
            IpAddress: string;
            /**
             * 受保护服务器ID
             * @example `sr-000ikcyl8ucxtxl5f7pi`
             */
            ServerId: string;
        }[];
    };
}
