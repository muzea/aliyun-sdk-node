interface ModifyParametersRequest {
    "RegionId"?: string;
    /**
    * 需要修改的参数及参数的取值，格式为JSON串，例如：{“name”:”value”,”name”:”value2”}。
    * > 您可以通过调用[DescribeParameterTemplates](~~67618~~)接口查询默认的参数模板列表。
    * @example `{"operationProfiling.slowOpThresholdMs":"300"}`
    */ "Parameters": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 分片集群实例中的Mongos节点ID或Shard节点ID。
    * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
    * @example `d-bpxxxxxxxx`
    */ "NodeId"?: string;
}
export { ModifyParametersRequest };