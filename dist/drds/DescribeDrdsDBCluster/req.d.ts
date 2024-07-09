export interface DescribeDrdsDBClusterRequest {
    /**
     * DRDS实例ID。
     * @example `drds*********`
     */
    "DrdsInstanceId": string;
    /**
     * DRDS数据库名称。
     * @example `drds_test`
     */
    "DbName": string;
    /**
     * PolarDB集群ID。
     * @example `pc-*****************`
     */
    "DbInstanceId": string;
}
