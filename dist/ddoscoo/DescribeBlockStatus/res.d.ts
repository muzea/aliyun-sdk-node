export interface DescribeBlockStatusResponse {
    /**
     * 本次请求的ID。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * DDoS高防实例的近源流量压制配置。
     */
    StatusList: {
        /**
         * DDoS高防实例的IP。
         * @example `203.XX.XX.88`
         */
        Ip: string;
        /**
         * 近源流量压制配置。
         */
        BlockStatusList: {
            /**
             * 封禁结束时间。使用时间戳表示，单位：秒。
             * @example `1540196323`
             */
            EndTime: number;
            /**
             * 封禁开始时间。使用时间戳表示，单位：秒。
             * @example `1540195323`
             */
            StartTime: number;
            /**
             * 封禁线路类型。取值：
             * - **ct**：表示电信海外线路。
             * - **cut**：表示联通海外线路。
             * @example `cut`
             */
            Line: string;
            /**
             * 流量封禁状态。取值：
             * - **areablock**：表示封禁中。
             * - **normal**：表示正常（未封禁）。
             * @example `areablock`
             */
            BlockStatus: string;
        }[];
    }[];
}
