export interface GetGatewayResponse {
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
     * 网关信息。
     */
    Data: {
        /**
         * 网关欠费状态。
         * - NORMAL：网关未欠费，正常工作。
         * - ARREARAGE：网关欠费。
         * @example `NORMAL`
         */
        ChargeStatus: string;
        /**
         * 该网关是否支持Class B模式。
         * @example `true`
         */
        ClassBSupported: boolean;
        /**
         * 网关频段ID。
         * @example `123`
         */
        FreqBandPlanGroupId: number;
        /**
         * 网关所在城区名称。
         * @example `某某区`
         */
        District: string;
        /**
         * 网关经纬度所采用的坐标系统，可取值：**WGS_84**, **GCJ_02**。
         * @example `GCJ_02`
         */
        GisCoordinateSystem: string;
        /**
         * 网关所在城市名称。
         * @example `某某市`
         */
        City: string;
        /**
         * 该网关是否可以作为时间校准网关。
         * @example `true`
         */
        TimeCorrectable: boolean;
        /**
         * 网关的在线、离线状态。
         * - **ONLINE**：在线。
         * - **OFFLINE**：离线。
         * @example `ONLINE`
         */
        OnlineState: string;
        /**
         * 网关合约类型。
         * - **HYBRID**：hybrid网关。
         * - **SINGLE_CHANNEL**：单通道网关。
         * - **STANDARD**：标准合约网关。
         * @example `STANDARD`
         */
        AuthTypes: string;
        /**
         * 最近一次在线、离线状态的变更时间。
         * 格式为UNIX时间戳，以毫秒为单位。
         * @example `1514736000000`
         */
        OnlineStateChangedMillis: number;
        /**
         * 网关通信模式。可取值为：
         * - FULL_DUPLEX：全双工。
         * - HALF_DUPLEX：半双工。
         * @example `HALF_DUPLEX`
         */
        CommunicationMode: string;
        /**
         * 自定义网关描述。
         * @example `网关描述`
         */
        Description: string;
        /**
         * 该网关是否处于启用状态。
         * - true：启用状态。
         * - false：停用状态。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * 该网关是否正工作在Class B模式下。
         * @example `true`
         */
        ClassBWorking: boolean;
        /**
         * 网关所在详细地址。
         * @example `详细地址`
         */
        Address: string;
        /**
         * 网关经度。
         * @example `123.45678`
         */
        Longitude: number;
        /**
         * Hybrid网关id。
         * @example `123`
         */
        EmbeddedNsId: string;
        /**
         * 网关纬度。
         * @example `23.45678`
         */
        Latitude: number;
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
         * 网关所在地区ID，由`http://lbs.amap.com/api/javascript-api/download`定义。
         * @example `123`
         */
        AddressCode: number;
    };
}
