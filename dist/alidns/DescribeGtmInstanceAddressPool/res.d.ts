export interface DescribeGtmInstanceAddressPoolResponse {
    /**
     * 地址池可用状态。其中：
     * - **AVAILABLE**：可用
     * - **NOT_AVAILABLE**：不可用
     * @example `AVAILABLE`
     */
    Status: string;
    Addrs: {
        /**
         * 地址池列表。
         */
        Addr: {
            /**
             * IP地址。
             * @example `1.1.XX.XX`
             */
            Value: string;
            /**
             * 更新时间（时间戳）。
             * @example `1527690629357`
             */
            UpdateTimestamp: number;
            /**
             * 更新时间。
             * @example `2017-12-28T13:08Z`
             */
            UpdateTime: string;
            /**
             * 健康检查状态。其中：
             * - **OK**：正常
             * - **ALERT**：报警
             * @example `OK`
             */
            AlertStatus: string;
            /**
             * 权重。
             * @example `1`
             */
            LbaWeight: number;
            /**
             * 创建时间。
             * @example `2017-12-28T13:08Z`
             */
            CreateTime: string;
            /**
             * 地址ID。
             * @example `123`
             */
            AddrId: number;
            /**
             * 返回模式。其中：
             * - **SMART**：智能返回
             * - **ONLINE**：永远在线
             * - **OFFLINE**：永远离线
             * @example `SMART`
             */
            Mode: string;
            /**
             * 创建时间（时间戳）。
             * @example `1527690629357`
             */
            CreateTimestamp: number;
        }[];
    };
    /**
     * 唯一请求识别码。
     * @example `6856BCF6-11D6-4D7E-AC53-FD579933522B`
     */
    RequestId: string;
    /**
     * 创建时间。
     * @example `2017-12-28T13:08Z`
     */
    CreateTime: string;
    /**
     * 地址数量。
     * @example `2`
     */
    AddrCount: number;
    /**
     * 地址池名称。
     * @example `名称`
     */
    Name: string;
    /**
     * 地址池类型。其中：
     * - **IP**：IP地址
     * - **DOMAIN**：域名
     * @example `IP`
     */
    Type: string;
    /**
     * 更新时间。
     * @example `2017-12-28T13:08Z`
     */
    UpdateTime: string;
    /**
     * 地址池ID。
     * @example `1234abc`
     */
    AddrPoolId: string;
    /**
     * 更新时间（时间戳）。
     * @example `1527690629357`
     */
    UpdateTimestamp: number;
    /**
     * 监控配置ID。
     * @example `100abc`
     */
    MonitorConfigId: string;
    /**
     * 最小可用地址数量。
     * @example `1`
     */
    MinAvailableAddrNum: number;
    /**
     * 监控状态。其中：
     * - **OPEN**：开启
     * - **CLOSE**：关闭
     * - **UNCONFIGURED**：未配置
     * @example `OPEN`
     */
    MonitorStatus: string;
    /**
     * 创建时间（时间戳）。
     * @example `1527690629357`
     */
    CreateTimestamp: number;
}
