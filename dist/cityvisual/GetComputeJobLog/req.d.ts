interface GetComputeJobLogRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 计算工作组下指定的JobID。
    * @example `37`
    */ "JobId": string;
    /**
    * 日志名称。
    * @example `xxx.log`
    */ "JobLogName": string;
    /**
    * 日志大小。
    * @example `100`
    */ "Size"?: number;
    /**
    * 计算工作组ID。
    * @example `101`
    */ "JobGroupId": string;
}
export { GetComputeJobLogRequest };