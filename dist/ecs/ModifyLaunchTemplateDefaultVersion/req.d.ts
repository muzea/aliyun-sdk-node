interface ModifyLaunchTemplateDefaultVersionRequest {
    /**
    * 模板所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 设置为默认版本的启动模板版本号。
    * @example `2`
    */ "DefaultVersionNumber": number;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 启动模板 ID。您必须指定 LaunchTemplateId 或 LaunchTemplateName 以确定模板。
    * @example `lt-templateid1`
    */ "LaunchTemplateId"?: string;
    /**
    * 启动模板名称。您必须指定 LaunchTemplateId 或 LaunchTemplateName 以确定模板。
    * @example `lt-name1`
    */ "LaunchTemplateName"?: string;
}
export { ModifyLaunchTemplateDefaultVersionRequest };