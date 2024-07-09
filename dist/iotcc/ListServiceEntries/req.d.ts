export interface ListServiceEntriesRequest {
    /**
     * 系统为分应用统计服务生成的ID，全网唯一。
     * @example `c910061f-****-44e6-b659-***c`
     */
    "ServiceId": string;
    /**
     * 云连接器实例ID。
     * @example `iotcc-bp1odcab8tmno0hdq****`
     */
    "IoTCloudConnectorId": string;
    /**
     * 应用条目的目的地址。
     */
    "Target"?: string[];
    /**
     * 应用条目的目的地址类型。
     */
    "TargetType"?: string[];
    /**
     * 应用条目的状态。
     */
    "ServiceEntryStatus"?: string[];
    /**
     * 应用条目的名称。
     */
    "ServiceEntryName"?: string[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1~100**。默认值：**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 应用条目所在的地域ID。
     * 您可以通过调用[ListRegions](~~313836~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 应用条目的ID。
     */
    "ServiceEntryIds"?: string[];
}
