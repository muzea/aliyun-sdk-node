export interface RestartInstanceRequest {
    /**
     * 目标实例ID，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `ld-bp150tns0sjxs****`
     */
    "ClusterId": string;
    /**
     * 目标实例的组件名称，取值：
     * - **HBASE**
     * - **HADOOP**
     * - **PHOENIX**
     * - **SOLR**
     * - **THRIFT**
     * @example `THRIFT`
     */
    "Components"?: string;
}
