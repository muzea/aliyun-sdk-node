export interface DeleteUserHdfsInfoRequest {
    /**
     * 实例ID。
     * @example `hb-bp16o0pd52e3y****`
     */
    "ClusterId": string;
    /**
     * addUserHdfsInfo里的dfs.nameservices的值，会通过[QueryXpackRelateDB](~~144509~~)接口（relateDB为hdfs）时返回。
     * @example `hdfs_test`
     */
    "NameService": string;
}
