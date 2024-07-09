export interface RunSmokeTestRequest {
    /**
     * 工作空间的环境，包括PROD（生产环境）和DEV（开发环境）。
     * 简单模式的工作空间无开发环境，详情请参见[简单模式和标准模式的工作空间](~~85772~~)。
     * @example `PROD`
     */
    "ProjectEnv": string;
    /**
     * 业务日期。
     * @example `2020-05-26 00:00:00`
     */
    "Bizdate": string;
    /**
     * 工作流的名称。
     * @example `xm_create_test`
     */
    "Name": string;
    /**
     * 节点的ID。您可以调用[ListNodes](~~173979~~)接口获取节点ID。
     * @example `1234`
     */
    "NodeId": number;
    /**
     * 节点的参数。配置为一个JSON字符串，Key为节点 ID，Value为参数实际取值。
     * @example `bizdate=$bizdate tbods=$tbods`
     */
    "NodeParams"?: string;
}
