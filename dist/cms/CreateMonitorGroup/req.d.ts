interface CreateMonitorGroupRequest {
    "RegionId"?: string;
    /**
    * 应用分组名称。
    * @example `我的应用分组1`
    */ "GroupName": string;
    "Type"?: string;
    "ServiceId"?: number;
    "BindUrl"?: string;
    /**
    * 报警联系人组。应用分组的报警通知会发送给此处指定的报警联系人组。
    * @example `默认报警联系人组`
    */ "ContactGroups"?: string;
    "Options"?: string;
}
export { CreateMonitorGroupRequest };