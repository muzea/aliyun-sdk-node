export interface CreateAdamBenchTaskRequest {
    /**
     * 压测任务描述。
     * @example `test-das-bench-0501`
     */
    "Description": string;
    /**
     * 源端数据库全量SQL归档文件的OSS网址，您可在OSS上传文件后获取具体的网址。
     * @example `http://rdslog-hz-v3.oss-cn-hangzhou.aliyuncs.com/custins4131****`
     */
    "SrcSqlOssAddr": string;
    /**
     * 源端数据库引擎。
     * @example `MySQL`
     */
    "SrcEngine"?: string;
    /**
     * 源端数据库引擎的版本。
     * @example `9i`
     */
    "SrcEngineVersion"?: string;
    /**
     * 流量抓取时间段的最大QPS，精确到小数点后两位。
     * @example `2013.22`
     */
    "SrcMaxQps": number;
    /**
     * 流量抓取时间段的平均QPS，精确到小数点后两位。
     * @example `312.22`
     */
    "SrcMeanQps": number;
    /**
     * 压测任务的开始时间，格式为Unix时间戳，单位为毫秒。
     * @example `1588819800000`
     */
    "RequestStartTime": number;
    /**
     * 压测任务的持续时间，单位为毫秒。
     * @example `86400000`
     */
    "RequestDuration": number;
    /**
     * 流量回放的频率，取值1~30，默认为1。
     * @example `1`
     */
    "Rate"?: number;
    /**
     * 目标实例ID，仅支持RDS MySQL、PolarDB MySQL版实例，您可通过调用[GetInstanceInspections](~~202857~~)接口获取。
     * @example `rm-2ze1jdv45i7l6****`
     */
    "DstInstanceId": string;
    /**
     * 目标实例的高权限账号。
     * @example `root***`
     */
    "DstSuperAccount": string;
    /**
     * 目标实例的高权限账号的密码。
     * @example `root***1234`
     */
    "DstSuperPassword": string;
}
