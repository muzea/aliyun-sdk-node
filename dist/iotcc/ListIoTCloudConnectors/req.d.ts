export interface ListIoTCloudConnectorsRequest {
    /**
     * 云连接器实例的状态。最多支持输入20个实例状态。取值：
     * - **Creating**：创建中。
     * - **Created**：创建完成。
     * - **Deleting**：删除中。
     * - **Updating**：修改中。
     */
    "IoTCloudConnectorStatus"?: string[];
    /**
     * 云连接器实例ID列表。
     */
    "IoTCloudConnectorIds"?: string[];
    /**
     * 云连接器实例的名称。最多支持输入20个实例名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）或短划线（-）。
     */
    "IoTCloudConnectorName"?: string[];
    /**
     * 云连接器实例的运营商。最多支持输入20个实例的运营商。取值：
     * - **telecom**：中国电信。
     * - **mobile**：中国移动。
     * - **unicom**：中国联通。
     */
    "ISP"?: string[];
    /**
     * 云连接器实例连接的VPC的ID。
     */
    "VpcId"?: string[];
    /**
     * 运营商APN的ID。
     */
    "APN"?: string[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**50**，默认值：**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 云连接器实例所在的地域ID。
     * 您可以通过调用[ListRegions](~~313836~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否查询实例组中的实例。取值：
     * - **true**：查询实例组中的实例。
     * - **false**（默认值）：不查询实例组中的实例。
     * - **null**：全量查询实例，不区分实例是否在实例组中。
     * @example `false`
     */
    "IsInGroup"?: boolean;
    /**
     * 云连接器实例组ID。
     * @example `iotccg-g00epppbi9di9y****`
     */
    "IoTCloudConnectorGroupId"?: string;
}
