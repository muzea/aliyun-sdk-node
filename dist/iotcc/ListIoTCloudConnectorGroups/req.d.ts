export interface ListIoTCloudConnectorGroupsRequest {
    /**
     * 实例组的状态。最多支持20个实例组的状态。取值：
     * - **Creating**：创建中。
     * - **Created**：创建完成。
     * - **Deleting**：删除中。
     * - **Updating**：更新中。
     */
    "IoTCloudConnectorGroupStatus"?: string[];
    /**
     * 实例组的ID列表。最多支持20个实例组的ID列表。
     */
    "IoTCloudConnectorGroupIds"?: string[];
    /**
     * 实例组的名称。最多支持20个实例组的名称。
     */
    "IoTCloudConnectorGroupName"?: string[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值：**1**~**50**。默认值：**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 实例组所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云连接器实例的版本，不同版本有不同功能限制和计费策略。取值：
     * - **Basic**：基础版。
     * - **Standard**：标准版。
     * <props="china">云连接器实例默认创建标准版，如果需要创建基础版实例，请[提交工单](https://selfservice.console.aliyun.com/ticket/category/ga/today)申请。</props>
     * <props="intl">云连接器实例默认创建标准版，如果需要创建基础版实例，请[提交工单](https://workorder-intl.console.aliyun.com/?spm=5176.11182188.console-base-top.dworkorder.18ae4882n3v6ZW#/ticket/createIndex)申请</props>
     * @example `Standard`
     */
    "Type"?: string;
}
