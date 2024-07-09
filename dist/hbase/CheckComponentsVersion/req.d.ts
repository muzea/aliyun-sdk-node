export interface CheckComponentsVersionRequest {
    /**
     * 集群ID，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `hb-t4naqsay5gn****`
     */
    "ClusterId": string;
    /**
     * 要检查的组件：
     * - **HBASE**
     * - **HADOOP**
     * - **PHOENIX**
     * - **SOLR**
     * - **THRIFT**
     * @example `HBASE,HADOOP`
     */
    "Components": string;
}
