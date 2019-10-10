interface ModifyWorkGroupRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 接流工作组描述。
    * @example `描述信息`
    */ "Description"?: string;
    /**
    * 接流工作组ID。
    * @example `234362`
    */ "WorkGroupId": string;
}
export { ModifyWorkGroupRequest };