interface DescribeServerCertificatesRequest {
    /**
    * 负载均衡实例的地域。
    * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 服务器证书ID。
    * @example `12315790xxxxxxx_166f8204689_1714763408_709981430`
    */ "ServerCertificateId"?: string;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 企业资源组ID。
    * @example `rg-atstuj3rtoptyui`
    */ "ResourceGroupId"?: string;
    "Tag"?: string[];
}
export { DescribeServerCertificatesRequest };