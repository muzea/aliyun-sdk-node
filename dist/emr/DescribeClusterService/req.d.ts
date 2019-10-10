interface DescribeClusterServiceRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 待查询的集群ID。
    * @example `C-F32FB31D8295****`
    */ "ClusterId": string;
    /**
    * 待查询的服务名称，例如：HDFS、YARN。
    * @example `HDFS`
    */ "ServiceName": string;
}
export { DescribeClusterServiceRequest };