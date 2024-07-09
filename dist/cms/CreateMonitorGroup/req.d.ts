export interface CreateMonitorGroupRequest {
    /**
     * 应用分组名称。
     * @example `ECS_Group`
     */
    "GroupName": string;
    /**
     * 报警联系组。应用分组的报警通知会发送给该报警联系组中的报警联系人。
     * > 报警联系组是一组报警联系人，可以包含一个或多个报警联系人。关于如何创建报警联系人和报警联系组，请参见[PutContact](~~PutContact~~)和[PutContactGroup](~~PutContactGroup~~)。
     * @example `ECS_Alert_Group`
     */
    "ContactGroups"?: string;
}
