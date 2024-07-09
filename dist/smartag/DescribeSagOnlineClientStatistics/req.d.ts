export interface DescribeSagOnlineClientStatisticsRequest {
    /**
     * 智能接入网关App实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关App实例ID列表，N的最大值为50。
     * @example `sag-va03wf4l4idaj*****`
     */
    "SmartAGIds"?: string[];
}
