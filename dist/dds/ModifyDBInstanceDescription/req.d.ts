interface ModifyDBInstanceDescriptionRequest {
    "RegionId"?: string;
    /**
    * 实例名称。
    * > - 不能 http:// 或者 https:// 开头。
    * - 以中文、英文字母开头。
    * - 可以包含中文、英文字符、下划线（_）、连接号（-）和数字，字符长度2~256个字符。
    * @example `testdata`
    */ "DBInstanceDescription": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * > 如需修改分片集群实例中的Shard节点或Mongos节点的名称，还需要传入**NodeId**参数。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 分片集群实例中Shard节点ID或Mongos节点ID。
    * > 当**DBInstanceId**传入的是分片集群实例ID时，本参数才可用。
    * @example `d-bpxxxxxxxx`
    */ "NodeId"?: string;
}
export { ModifyDBInstanceDescriptionRequest };