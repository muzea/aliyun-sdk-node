export interface ListCardDayUsagesRequest {
    /**
     * 5G高速上云实例ID。
     * @example `cc5g-xxxx`
     */
    "WirelessCloudConnectorId": string;
    /**
     * 物联网SIM卡卡号，每次最大50条
     */
    "Iccids": string[];
    /**
     * 查询最近几个月卡流量数据，默认两个月，包含当月。参数范围[1,6]
     * @example `1`
     */
    "LatestMonthNum"?: number;
}
