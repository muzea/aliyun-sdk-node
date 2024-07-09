export interface XpackRelateDBRequest {
    /**
     * 当前Spark实例ID。
     * @example `ap-bp1qtz9rcbbt3****`
     */
    "ClusterId": string;
    /**
     * 需要关联的集群实例ID。
     * @example `hb-bp16o0pd52e3****`
     */
    "DbClusterIds": string;
    /**
     * 需要关联的数据库类型，可选值：
     * - **hdfs**
     * - **hbase**
     * - **mongodb**
     * - **mysql**
     * - **polardb_mysql**
     * - **redis**
     * - **geomesa**
     * @example `hbase`
     */
    "RelateDbType": string;
}
