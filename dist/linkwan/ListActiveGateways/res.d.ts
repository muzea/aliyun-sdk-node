export interface ListActiveGatewaysResponse {
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
     * 活跃网关列表。
     */
    Data: {
        /**
         * 网关欠费状态。
         * - NORMAL：网关未欠费，正常工作
         * - ARREARAGE：网关欠费状态
         * @example `NORMAL`
         */
        ChargeStatus: string;
        /**
         * 网关所在城区。
         * @example `城区名`
         */
        District: string;
        /**
         * 频段ID。
         * @example `123`
         */
        FreqBandPlanGroupId: number;
        /**
         * 网关经纬度所采用的坐标系。
         * @example `GCJ-02`
         */
        GisCoordinateSystem: string;
        /**
         * 网关所在城市。
         * @example `城市名`
         */
        City: string;
        /**
         * 在线状态。
         * @example `ONLINE`
         */
        OnlineState: string;
        /**
         * 通信模式。
         * @example `HALF_DUPLEX`
         */
        CommunicationMode: string;
        /**
         * 网关描述。
         * @example `网关描述`
         */
        Description: string;
        /**
         * 网关详细地址。
         * @example `详细地址`
         */
        Address: string;
        /**
         * 经度。
         * @example `123.45678`
         */
        Longitude: number;
        /**
         * 纬度。
         * @example `23.45678`
         */
        Latitude: number;
        /**
         * 网关的GwEUI。
         * @example `0000000000123456`
         */
        GwEui: string;
        /**
         * 网关名称。
         * @example `vmeixme`
         */
        Name: string;
        /**
         * 网关地址码。
         * @example `123`
         */
        AddressCode: number;
    }[];
}
