interface DeleteLaunchTemplateRequest {
    /**
    * 实例启动模板所属的地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 启动模板ID。更多详情，请调用 [DescribeLaunchTemplates](~~73759~~)。您必须指定 `LaunchTemplateId` 或 `LaunchTemplateName` 以确定启动模板。
    * @example `lt-bp1apo0bbbkuy0rj3***`
    */ "LaunchTemplateId"?: string;
    /**
    * 启动模板名称。您必须指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板。
    * @example `JoshuaWinPostPaid`
    */ "LaunchTemplateName"?: string;
}
export { DeleteLaunchTemplateRequest };