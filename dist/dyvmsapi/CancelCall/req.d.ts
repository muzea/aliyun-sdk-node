interface CancelCallRequest {
    "RegionId"?: string;
    /**
    * 此次通话的唯一回执ID，可以从接口**ClickToDial**的返回信息中获取。
    * @example `116012854210^102814279210`
    */ "CallId": string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { CancelCallRequest };