export interface UpdateAppGroupRequest {
    /**
     * 应用描述。
     * @example `Test`
     */
    "Description"?: string;
    /**
     * 应用ID，在控制台的**应用管理**页面中获取。
     * @example `testSchedulerx.defaultGroup`
     */
    "GroupId": string;
    /**
     * 最大同时运行实例数量，默认值为1，即上次触发没有运行结束，即使到了运行时刻也不会进行下次触发。
     * @example `1`
     */
    "MaxConcurrency"?: number;
    /**
     * 命名空间ID，在控制台的**命名空间**页面中获取。
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
     */
    "Namespace": string;
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 应用版本，1:基础版，2:专业版
     * @example `2`
     */
    "AppVersion"?: number;
}
