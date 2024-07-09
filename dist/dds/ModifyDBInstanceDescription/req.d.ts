export interface ModifyDBInstanceDescriptionRequest {
    /**
     * 实例ID。
     * > 如需修改分片集群实例中的Shard节点或Mongos节点的名称，还需要传入**NodeId**参数。
     * @example `dds-bp2234****`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中Shard节点ID或Mongos节点ID。
     * > 当**DBInstanceId**传入的是分片集群实例ID时，本参数才可用。
     * @example `d-bp89067****`
     */
    "NodeId"?: string;
    /**
     * 实例名称。
     * > - 不能以`http://`或`https://`开头。
     * > - 以中文、英文字母开头。
     * > - 可以包含中文、英文字符、下划线（_）、短划线（-）和数字，字符长度2~256个字符。
     * @example `testdata`
     */
    "DBInstanceDescription": string;
}
