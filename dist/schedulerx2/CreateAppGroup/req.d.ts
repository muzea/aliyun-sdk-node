export interface CreateAppGroupRequest {
    /**
     * 应用名称。
     * @example `DocTest`
     */
    "AppName": string;
    /**
     * 命名空间ID，在控制台的命名空间页面中获取。
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
     */
    "Namespace": string;
    /**
     * 暂不支持，无须填写。
     * @example `schedulerx`
     */
    "NamespaceSource"?: string;
    /**
     * 应用ID，在控制台的应用管理页面中获取。
     * @example `TestSchedulerx.defaultGroup`
     */
    "GroupId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 应用描述。
     * @example `Test`
     */
    "Description"?: string;
    /**
     * 最大任务数。
     * @example `1000`
     */
    "MaxJobs"?: number;
    /**
     * 命名空间名称。
     * @example `Test`
     */
    "NamespaceName"?: string;
    /**
     * 应用Appkey。
     * @example `adcExHZviLcl****`
     */
    "AppKey"?: string;
    /**
     * 报警配置JSON字段。关于此字段的详细说明参见下文**关于请求参数的补充说明**。
     * @example `{"sendChannel":"sms,ding"}`
     */
    "MonitorConfigJson"?: string;
    /**
     * 报警联系人JSON格式。
     * @example `[{"userName":"张三","userPhone":"89756******"},{"userName":"李四","ding":"http://www.example.com"}]`
     */
    "MonitorContactsJson"?: string;
    /**
     * 是否调度繁忙机器。
     * @example `false`
     */
    "ScheduleBusyWorkers"?: boolean;
    /**
     * 是否开启日志。
     * - true：开启
     * - false：关闭
     * @example `true`
     */
    "EnableLog"?: boolean;
    /**
     * 应用类型。
     * - 1、普通应用。
     * - 2、k8s应用。
     * @example `1`
     */
    "AppType"?: number;
    /**
     * 应用版本，1:基础版，2:专业版
     * @example `2`
     */
    "AppVersion"?: number;
}
