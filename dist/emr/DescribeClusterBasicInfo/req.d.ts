interface DescribeClusterBasicInfoRequest {
    /**
    * 集群实例所在的地域，您可以通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
    * @example `cn-huhehaote`
    */ "RegionId": string;
    /**
    * 目标集群的业务ID。
    * @example `C-0EF9B0EC8564****`
    */ "ClusterId": string;
}
export { DescribeClusterBasicInfoRequest };