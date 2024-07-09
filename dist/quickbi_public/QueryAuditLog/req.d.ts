export interface QueryAuditLogRequest {
    /**
     * 日志类型:
     * - dataView-访问类
     * - function-操作类
     * - permission-权限类
     * @example `function`
     */
    "LogType": string;
    /**
     * 工作空间ID，需要查询的日志所属工作空间ID。
     * @example `95296e95-ca89-4c7d-8af9-dedf0ad0****`
     */
    "WorkspaceId"?: string;
    /**
     * 查询开始日期，格式（“yyyyMMdd”）,不能早于当前时间90天。
     * @example `20240504`
     */
    "StartDate": string;
    /**
     * 查询结束日期，格式（“yyyyMMdd”)。
     * @example `20240604`
     */
    "EndDate": string;
    /**
     * 资源类型，参见作品类型。
     * @example `cube`
     */
    "ResourceType"?: string;
    /**
     * 操作人userId。
     * @example `95296e95-ca89-4c7d-8af9-dedf0ad0***`
     */
    "OperatorId"?: string;
    /**
     * 权限/访问/操作类型，空-默认所有；
     * 见审计日志码值,送多个请以英文逗号分割。
     * @example `MODIFY`
     */
    "OperatorTypes"?: string;
}
