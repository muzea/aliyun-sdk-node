interface DescribeLaunchTemplatesRequest {
    /**
    * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    "TemplateTag"?: string[];
    "LaunchTemplateId"?: string[];
    "LaunchTemplateName"?: string[];
    /**
    * 实例启动模板列表的页码。起始值：1
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：50
    * 默认值：10
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 启动模板所在的企业资源组ID。
    * @example `rg-resourcegroupid1`
    */ "TemplateResourceGroupId"?: string;
}
export { DescribeLaunchTemplatesRequest };