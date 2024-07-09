export interface GetDasProServiceUsageRequest {
    /**
     * 用户ID，即创建数据库实例的阿里云主账号ID。
     * > 非必填，输入目标数据库实例ID后，在调用API接口时，系统会自动获取用户ID。
     * @example `196278346919****`
     */
    "UserId"?: string;
    /**
     * 数据库实例ID。
     * @example `rm-2ze8g2am97624****`
     */
    "InstanceId": string;
}
