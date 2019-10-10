interface ReportInstancesStatusRequest {
    /**
    * 实例所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "InstanceId": string[];
    /**
    * 反馈原因，即实例发生的异常类型。取值范围：
    * - instance-hang：ECS实例不可用，或无法连接。
    * - instance-stuck-in-status：ECS实例长时间停留在某一个状态，如Starting或Stopping状态。
    * - abnormal-network：ECS实例发生网络异常。
    * - abnormal-local-disk：ECS实例挂载的本地盘出现异常。
    * - abnormal-cloud-disk：ECS实例挂载的云盘或共享块存储出现异常。
    * - others：其他异常类型。当以上异常类型不符合条件时，您可以设置`Reason=Other`并在`Description`中描述更多信息。
    * @example `abnormal-local-disk`
    */ "Reason": string;
    /**
    * @example `cn-hangzhou`
    */ "SourceRegionId"?: string;
    /**
    * @example `1`
    */ "OwnerId"?: number;
    "DiskId"?: string[];
    "Device"?: string[];
    /**
    * 异常问题的详细描述。
    * >当`reason=abnormal-local-disk`时，`Description`为必选参数。
    * @example `本地盘不可用，挂载点拒绝访问，无法加载文件。`
    */ "Description"?: string;
    /**
    * 实例异常问题开始时间。按照ISO8601标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * @example `2017-11-30T06:32:31Z`
    */ "StartTime"?: string;
    /**
    * 实例异常问题结束时间。按照ISO8601标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * @example `2017-11-31T06:32:31Z`
    */ "EndTime"?: string;
}
export { ReportInstancesStatusRequest };