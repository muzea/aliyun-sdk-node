export interface CreateStorageAnalysisTaskRequest {
    /**
     * 实例ID。
     * @example `rm-2ze1jdv45i7l6****`
     */
    "InstanceId": string;
    /**
     * 节点ID。
     * 对于MongoDB实例，通过该参数指定节点进行空间分析。调用[DescribeRoleZoneInfo](~~123802~~)接口，可以查询MongoDB实例各个节点的详细信息。
     * - 当传入目标节点的**InsName**（节点ID）时，例如`d-bp1872fa24d5****`，调用该接口分析其对应的Hidden节点。
     * - 当传入目标节点的`InsName#RoleId`时，例如`d-bp1872fa24d5****#299****5`，调用该接口分析指定的节点。
     * ><notice>对于MongoDB副本集实例，不传入此参数时，调用该接口会默认分析唯一的Hidden节点。对于MongoDB分片集群实例，推荐传入此参数，指定目标节点。</notice>
     * @example `d-bp1872fa24d5****`
     */
    "NodeId"?: string;
    /**
     * 数据库名。传入该参数时，分析指定数据库的空间使用情况。
     * @example `testdb01`
     */
    "DbName"?: string;
    /**
     * 表名。传入该参数时，分析指定数据库中指定表的空间使用情况。传入该参数时，必须同时传入**DbName**，指定该表所属的数据库。
     * @example `test_table`
     */
    "TableName"?: string;
}
