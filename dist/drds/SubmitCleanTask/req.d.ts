export interface SubmitCleanTaskRequest {
    /**
     * DRDS实例ID。
     * @example `drds*********`
     */
    "DrdsInstanceId": string;
    /**
     * 扩容数据库的名称。
     * @example `test`
     */
    "DbName": string;
    /**
     * 该扩容任务的任务ID，提交扩容任务的请求会返回。
     * @example `123`
     */
    "ParentJobId": string;
    /**
     * 该扩容任务的JobId，与ParentJobId取值相同。
     * @example `123`
     */
    "JobId": string;
    /**
     * 扩容类型，取值范围如下：
     * * smooth_expand：平滑扩容
     * * hot_expand：热点扩容
     * @example `smooth_expand`
     */
    "ExpandType": string;
}
