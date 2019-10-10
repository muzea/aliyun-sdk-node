interface ModifyInstanceVpcAuthModeRequest {
    /**
    * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 分片集群实例的Mongos节点ID。
    * > 实例类型为分片集群实例时，本参数才可用。
    * @example `s-bpxxxxxxxx`
    */ "NodeId"?: string;
    /**
    * 设置专有网络免密访问功能，取值：
    * - **Open**：开启专有网络免密访问。
    * - **Close**：关闭专有网络免密访问。
    * @example `Open`
    */ "VpcAuthMode"?: string;
}
export { ModifyInstanceVpcAuthModeRequest };