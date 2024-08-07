export interface StartVirusScanTaskRequest {
    /**
     * 要执行病毒扫描的资产。支持选择服务器或服务器分组执行扫描病毒，该参数使用JSON数组转化的字符串格式表示。包含以下字段：
     * - **type**：执行病毒扫描的资产类型。取值：
     *     - **groupId**：服务器分组。
     *     - **uuid**：服务器。
     * - **name**：服务器名称或服务器分组的名称。
     * - **target**：执行病毒扫描的资产。取值：
     *     - **type**的值为**groupId**时，该字段取值为服务器分组ID。您可以调用[DescribeAllGroups](~~DescribeAllGroups~~)获取服务器分组ID。
     *     - **type**的值为**uuid**时，该字段取值为服务器的UUID。您可以调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取服务器的UUID。
     * @example `[{"type":"uuid","name":"Host001","target":"503201a7-14c6-4280-801b-1169ed42****"}]`
     */
    "TargetInfo": string;
}
