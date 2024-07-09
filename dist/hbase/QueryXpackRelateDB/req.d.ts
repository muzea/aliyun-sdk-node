export interface QueryXpackRelateDBRequest {
    /**
     * 当前Spark实例ID。
     * @example `ap-bp1qtz9rcbbt3p6ng`
     */
    "ClusterId": string;
    /**
     * 要查询可关联数据库类型。
     * - spark可以关联hdfs,hbase,mongodb,mysql,polardb_mysql,redis,geomesa
     * - bds可以关联hbase,spark,hbaseue
     * @example `hbase`
     */
    "RelateDbType": string;
    /**
     * 仅对bds查询关联hbase有效。
     * - true：会包含单节点HBase。
     * - false：不包含单节点HBase。非必填，为兼容之前逻辑为空时会包含单节点HBase。
     * @example `false`
     */
    "HasSingleNode"?: boolean;
}
