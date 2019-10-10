interface DescribeSecurityGroupReferencesRequest {
    /**
    * 安全组所属地域。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SecurityGroupId": string[];
    "SourceRegionId"?: string;
    /**
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { DescribeSecurityGroupReferencesRequest };