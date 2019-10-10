interface DescribeInstanceListRequest {
    "RegionId"?: string;
    "PageNo": number;
    "PageSize": number;
    "SourceIp"?: string;
    "ResourceGroupId"?: string;
    "InstanceIdList"?: string;
    "Remark"?: string;
    "DdosRegionId"?: string;
    "IpVersion"?: string;
    "InstanceType"?: string;
    "Ip"?: string;
    "Orderby"?: string;
    "Orderdire"?: string;
    "Tag"?: string[];
}
export { DescribeInstanceListRequest };