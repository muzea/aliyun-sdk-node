interface DescribeLaunchTemplateVersionsRequest {
    /**
    * 实例启动模板所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 实例启动模板 ID。您必须指定 LaunchTemplateId 或 LaunchTemplateName 以确定模板。
    * @example `lt-launchtemplateid1`
    */ "LaunchTemplateId"?: string;
    /**
    * 实例启动模板名称。
    * @example `FinanceJoshua`
    */ "LaunchTemplateName"?: string;
    "LaunchTemplateVersion"?: number[];
    /**
    * 通过范围指定版本时的最小版本号。
    * @example `1`
    */ "MinVersion"?: number;
    /**
    * 通过范围指定版本时的最大版本号。
    * @example `10`
    */ "MaxVersion"?: number;
    /**
    * 是否查询默认版本。
    * @example `true`
    */ "DefaultVersion"?: boolean;
    /**
    * @example `true`
    */ "DetailFlag"?: boolean;
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
}
export { DescribeLaunchTemplateVersionsRequest };