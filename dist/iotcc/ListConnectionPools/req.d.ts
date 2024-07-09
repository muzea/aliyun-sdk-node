export interface ListConnectionPoolsRequest {
    /**
     * 云连接器实例ID。
     * @example `iotcc-bp1odcab8tmno0hdq****`
     */
    "IoTCloudConnectorId": string;
    /**
     * 连接地址池的ID列表。最多支持传入20个连接地址池ID。
     */
    "ConnectionPoolIds"?: string[];
    /**
     * 连接地址池的名称。最多支持传入20个连接地址池名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）或短划线（-）。
     */
    "ConnectionPoolName"?: string[];
    /**
     * 连接地址池的状态。最多支持传入20个连接地址池状态。
     * - **Creating**：创建中。
     * - **Running**：运行中。
     * - **Deleting**：删除中。
     * - **Deleted**：已删除。
     * - **Associating**：IP绑定中。
     * - **Dissociating**：IP解绑中。
     */
    "ConnectionPoolStatus"?: string[];
    /**
     * 用来标记当前开始读取的位置，置空表示从头开始。
     * > 第一次调用不用填写，会在返回结果中包含第二次调用时用的NextToken，之后每次调用返回结果中都有下一次调用时的NextToken。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录数量，取值：**1**~**50**。传入为空时，默认值为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 云连接器实例所在的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
