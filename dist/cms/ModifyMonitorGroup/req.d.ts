interface ModifyMonitorGroupRequest {
    "RegionId"?: string;
    /**
    * 应用分组ID。
    * @example `12346`
    */ "GroupId": string;
    "BindUrls"?: string;
    "ServiceId"?: number;
    /**
    * 应用分组名称。
    * @example `修改组名1`
    */ "GroupName"?: string;
    /**
    * 报警联系人组。
    * @example `报警联系人组`
    */ "ContactGroups"?: string;
}
export { ModifyMonitorGroupRequest };