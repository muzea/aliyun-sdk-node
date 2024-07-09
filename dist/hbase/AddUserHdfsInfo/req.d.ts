export interface AddUserHdfsInfoRequest {
    /**
     * 集群ID，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `hb-bp16o0pd5****582s`
     */
    "ClusterId": string;
    /**
     * dfs.nameservices为dfs的nameservices名称，dfs.ha.namenodes为dfs节点，如nn1，nn2。
     * dfs.namenode.http-address.{dfs.nameservices}.nn1 为hdfs nn1的50070链接。
     * dfs.namenode.http-address.{dfs.nameservices}.nn2 为hdfs nn2的50070链接。
     * dfs.namenode.rpc-address.{dfs.nameservices}.nn1 为hdfs nn1的8020链接。
     * dfs.namenode.rpc-address.{dfs.nameservices}.nn2 为hdfs nn2的8020链接。
     * 50070端口链接和8020端口链接在hdfs各个节点都存在，hdfs有几个节点，就有几对50070和8020端口的链接。
     * @example `{"dfs.nameservices":"hdfs_test","dfs.ha.namenodes":"nn1,nn2","dfs.namenode.http-address.hdfs_test.nn1":"TEST-xxx1.com:50070","dfs.namenode.http-address.hdfs_test.nn2":"TEST-xxx2.com:50070","dfs.namenode.rpc-address.hdfs_test.nn1":"TEST-xxx1.com:8020","dfs.namenode.rpc-address.hdfs_test.nn2":"TEST-xxx2.com:8020"}`
     */
    "ExtInfo": string;
    /**
     * 用于保证请求的幂等性。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
}
