interface DeleteMonitorGroupNotifyPolicyRequest {
    /**
    * 资源所属的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 暂停通知类型，目前仅支持PauseNotify。
    * @example `PauseNotify`
    */ "PolicyType": string;
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId"?: string;
}
export { DeleteMonitorGroupNotifyPolicyRequest };