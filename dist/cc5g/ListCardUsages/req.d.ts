export interface ListCardUsagesRequest {
    /**
     * 5G高速上云实例ID 。
     * @example `cc5g-xxxx`
     */
    "WirelessCloudConnectorId": string;
    /**
     * 物联网SIM卡卡号，每次最大50条
     */
    "Iccids"?: string[];
}
