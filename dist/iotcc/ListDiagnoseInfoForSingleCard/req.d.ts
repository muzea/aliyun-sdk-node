export interface ListDiagnoseInfoForSingleCardRequest {
    /**
     * 网络诊断的云连接器实例所在的地域ID。
     * 您可以通过调用[ListRegions](~~313836~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 网络诊断的云连接器实例ID。
     * @example `iotcc-smy9a5ockzp08n****`
     */
    "IoTCloudConnectorId": string;
    /**
     * 网络诊断的源类型。取值：
     * - **卡IP**：表示通过物联网卡的卡IP进行网络诊断。
     * - **卡ID**：表示通过物联网卡的卡ID进行网络诊断。
     * @example `卡IP`
     */
    "SourceType"?: string;
    /**
     * 网络诊断的源端卡IP或者卡ID。
     * @example `169.254.XX.XX`
     */
    "Source"?: string;
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
}
