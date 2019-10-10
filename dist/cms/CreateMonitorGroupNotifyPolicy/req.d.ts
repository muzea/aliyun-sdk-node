interface CreateMonitorGroupNotifyPolicyRequest {
    /**
    * 资源所属的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 暂停通知类型， 目前仅支持： PauseNotify。
    * @example `PauseNotify`
    */ "PolicyType": string;
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId": string;
    /**
    * 暂停通知的开始时间，距离1970年1月1日 00:00:00的毫秒数。
    * @example `1551756547863`
    */ "StartTime": number;
    /**
    * 暂停通知的结束时间，距离1970年1月1日 00:00:00的毫秒数。
    * @example `1551757147863`
    */ "EndTime": number;
}
export { CreateMonitorGroupNotifyPolicyRequest };