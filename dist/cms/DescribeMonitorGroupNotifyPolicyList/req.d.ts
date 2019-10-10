interface DescribeMonitorGroupNotifyPolicyListRequest {
    /**
    * 资源所属的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 禁用的类型，目前只能选择PauseNotify。
    * @example `PauseNotify`
    */ "PolicyType": string;
    /**
    * 页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 每页记录条数，默认值为10。
    * @example `100`
    */ "PageSize"?: number;
    /**
    * 应用分组ID。
    * @example `12346`
    */ "GroupId"?: string;
}
export { DescribeMonitorGroupNotifyPolicyListRequest };