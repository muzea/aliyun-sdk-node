interface UpdateOwnedLocalJoinPermissionEnablingStateRequest {
    "RegionId"?: string;
    /**
    * 要操作的专用入网凭证ID。
    * @example `123`
    */ "JoinPermissionId": string;
    /**
    * **true**为启用，**false**为停用。
    * @example `true`
    */ "Enabled": boolean;
}
export { UpdateOwnedLocalJoinPermissionEnablingStateRequest };