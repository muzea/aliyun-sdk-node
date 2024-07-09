export interface GetMetricsOfAppRequest {
    /**
     * 命名空间
     * @example `default`
     */
    "Namespace": string;
    /**
     * 应用名，若为EDAS应用，则AppName为EDAS中的App ID，可在EDAS控制台具体应用的基本信息页签中查看对应的ID。
     * @example `ahas-demo`
     */
    "AppName": string;
    /**
     * 开始时间，单位毫秒。
     * @example `1596081600000`
     */
    "StartTime"?: number;
    /**
     * 结束时间，单位毫秒。
     * @example `1596081780000`
     */
    "EndTime"?: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
