interface DescribeClusterServiceConfigTagRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-F32FB31D8295****`
    */ "ClusterId": string;
    /**
    * 服务名称。
    * @example `TEZ`
    */ "ServiceName": string;
    /**
    * 标签名。
    * @example `FILE_NAME`
    */ "ConfigTag"?: string;
}
export { DescribeClusterServiceConfigTagRequest };