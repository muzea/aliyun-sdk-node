export interface ModifyParametersRequest {
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~61933~~)接口查询。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * >当本参数传入的是分片集群实例ID时，还需要传入NodeId参数。
     * @example `dds-bp19f409d75****`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中的Mongos节点ID或Shard节点ID。
     * >当DBInstanceId参数传入的是分片集群实例ID时，本参数才可用。
     * @example `d-bp1b7bb3bbe****`
     */
    "NodeId"?: string;
    /**
     * 需要修改的参数及参数值，格式为JSON串，例如：{"ParameterName1":"ParameterValue1","ParameterName2":"ParameterValue2"}。
     * >您可以通过调用[DescribeParameterTemplates](~~67618~~)接口查询默认的参数模板列表。
     * @example `{"operationProfiling.mode":"all","operationProfiling.slowOpThresholdMs":"200"}`
     */
    "Parameters": string;
    /**
     * 实例的角色类型，取值说明：
     * - **db**：shard角色。
     * - **cs**：config server角色。
     * - **mongos**：mongos角色。
     * @example `db`
     */
    "CharacterType"?: string;
}
