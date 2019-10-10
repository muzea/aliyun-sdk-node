interface CreateAlertContactGroupRequest {
    /**
    * 地域 ID
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 报警联系人分组名称
    * @example `TestGroup`
    */ "ContactGroupName": string;
    /**
    * 报警联系人 ID（多个联系人 ID 以空格分隔）
    * @example `1234212343`
    */ "ContactIds"?: string;
}
export { CreateAlertContactGroupRequest };