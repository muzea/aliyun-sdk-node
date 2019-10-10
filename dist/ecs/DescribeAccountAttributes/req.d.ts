interface DescribeAccountAttributesRequest {
    /**
    * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 可用区ID。
    * @example `cn-hangzhou-b`
    */ "ZoneId"?: string;
    "AttributeName"?: string[];
}
export { DescribeAccountAttributesRequest };