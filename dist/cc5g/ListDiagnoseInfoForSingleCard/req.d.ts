export interface ListDiagnoseInfoForSingleCardRequest {
    /**
     * 5G高速上云实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionNo"?: string;
    /**
     * 5G高速上云实例ID 。
     * @example `cc5g-xxxx`
     */
    "WirelessCloudConnectorId": string;
    /**
     * 网络诊断的源类型。取值：
     * - **Ip**：表示通过物联网卡的卡IP进行网络诊断。
     * - **Iccid**：表示通过物联网卡的卡ID进行网络诊断。
     * @example `Iccid`
     */
    "SourceType"?: string;
    /**
     * 网络诊断的源端卡的ID
     * @example `89860477102170127555`
     */
    "Source"?: string;
    /**
     * 网络诊断任务的状态。取值：
     * - **success**：表示诊断成功。
     * - **failed**：表示诊断失败。
     * - **diagnosing**：表示诊断中。
     * @example `success`
     */
    "Status"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：1~100。默认值：20。
     * @example `20`
     */
    "MaxResults"?: number;
}
