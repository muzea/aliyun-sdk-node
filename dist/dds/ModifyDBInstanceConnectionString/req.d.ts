export interface ModifyDBInstanceConnectionStringRequest {
    /**
     * 实例ID。
     * > 当本参数传入的是分片集群实例ID时，还需要传入**NodeId**参数。
     * @example `dds-bpxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中的Mongos节点ID，每次调用仅能传入一个Mongos节点ID。
     * > 当**DBInstanceId**参数传入的是分片集群实例ID时，本参数才可用。
     * @example `s-bpxxxxxxxx`
     */
    "NodeId"?: string;
    /**
     * 当前连接地址，即待修改的连接地址。
     * @example `s-bpxxxxxxxx.mongodb.rds.aliyuncs.com`
     */
    "CurrentConnectionString": string;
    /**
     * 新的连接地址，要求如下：
     * - 以小写字母开头。
     * - 以小写字母或数字结尾。
     * - 由小写字母、数字和连字符（-） 组成。
     * - 长度为8~63个字符。
     * > 仅需传入连接地址的前缀部分，前缀以外的部分不可修改。
     * @example `aliyuntest111`
     */
    "NewConnectionString": string;
    /**
     * 新的端口，端口范围需要在1000~65535之间。
     * > 当**DBInstanceId**参数传入的是云盘实例ID时，本参数才可用。
     * @example `3310`
     */
    "NewPort"?: number;
}
