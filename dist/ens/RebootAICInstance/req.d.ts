export interface RebootAICInstanceRequest {
    /**
     * 服务器实例ID。
     * @example `cas-instance****`
     */
    "ServerId"?: string;
    /**
     * AIC实例ID。
     * @example `aic-instance****`
     */
    "InstanceId"?: string;
    /**
     * AIC实例ID组。
     */
    "InstanceIds"?: string[];
}
