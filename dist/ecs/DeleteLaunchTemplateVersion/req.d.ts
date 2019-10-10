interface DeleteLaunchTemplateVersionRequest {
    /**
    * 模板所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "DeleteVersion": number[];
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 需要删除的启动模板 ID。更多详情，请调用 [DescribeLaunchTemplates](~~73759~~)。
    * @example `lt-bp1apo0bbbkuy0rj3***`
    */ "LaunchTemplateId"?: string;
    /**
    * 启动模板名称。
    * @example `JoshuaWinPostPaid`
    */ "LaunchTemplateName"?: string;
}
export { DeleteLaunchTemplateVersionRequest };