export interface ModifyInstanceTypeRequest {
    /**
     * 集群ID。
     * @example `cds-uf6ig2gf****7pw7`
     */
    "ClusterId": string;
    /**
     * 集群数据中心ID。
     * @example `cn-shanghai-e`
     */
    "DataCenterId": string;
    /**
     * 集群实例类型。可取值部分示例：
     * - cassandra.c.large：2核 4G
     * - cassandra.c.xlarge：4核 8G
     * - cassandra.c.2xlarge：8核 16G
     * @example `cassandra.g.xlarge`
     */
    "InstanceType": string;
}
