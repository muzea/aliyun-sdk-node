export interface ListGatewaysGisInfoResponse {
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID，阿里云为该请求生成的唯一标识符。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
     */
    RequestId: string;
    /**
     * 网关位置信息列表。
     */
    Data: {
        /**
         * 网关欠费状态。
         * - **NORMAL**：网关未欠费，正常工作。
         * - **ARREARAGE**：网关欠费。
         * @example `NORMAL`
         */
        ChargeStatus: string;
        /**
         * 网关GIS来源，可取值：
         * - **USER_INPUT**：用户输入。
         * - **HARDWARE**：网关上报。
         * @example `HARDWARE`
         */
        GisSourceType: string;
        /**
         * 网关采用的频段ID。
         * @example `102`
         */
        FreqBandPlanGroupId: number;
        /**
         * 网关是否可用。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * 网关经纬度所采用的坐标系统，可取值为：**WGS_84**，**GCJ_02**。
         * @example `GCJ_02`
         */
        GisCoordinateSystem: string;
        /**
         * 网关经度。
         * @example `123.45678`
         */
        Longitude: number;
        /**
         * 网关纬度。
         * @example `23.45678`
         */
        Latitude: number;
        /**
         * 网关的在线、离线状态。可取值：
         * - **ONLINE**：在线。
         * - **OFFLINE**：离线。
         * @example `OFFLINE`
         */
        OnlineState: string;
        /**
         * 自定义网关名称。
         * @example `网关名称`
         */
        Name: string;
        /**
         * 网关唯一标识。
         * @example `0000000000000000`
         */
        GwEui: string;
        /**
         * 网关合约类型。
         * - **HYBRID**：Hybrid网关。
         * - **SINGLE_CHANNEL**：单通道网关。
         * - **STANDARD**：标准合约网关。
         * @example `STANDARD`
         */
        AuthTypes: string;
    }[];
}
