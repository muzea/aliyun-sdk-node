export interface ListIoTCloudConnectorBackhaulRouteRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 5G高速上云实例id。
     * @example `cc5g-xxxx`
     */
    "WirelessCloudConnectorId": string;
    /**
     * 网络连接id。
     * @example `cciot-xxxx`
     */
    "NetLinkId": string;
}
