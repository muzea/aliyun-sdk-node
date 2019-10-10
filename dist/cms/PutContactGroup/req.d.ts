interface PutContactGroupRequest {
    "RegionId"?: string;
    /**
    * 报警联系组的名称。
    * @example `我的报警联系组`
    */ "ContactGroupName": string;
    /**
    * 报警联系组描述信息。
    * @example `报警联系人名称`
    */ "Describe": string;
    "ContactNames": string[];
}
export { PutContactGroupRequest };