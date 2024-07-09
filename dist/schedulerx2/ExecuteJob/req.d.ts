export interface ExecuteJobRequest {
    /**
     * 任务ID，在控制台的任务管理页面中获取。
     * @example `92583`
     */
    "JobId": number;
    /**
     * 本次触发携带参数，可以是任意字符串，`processor`代码通过`context.getInstanceParameters()`获取，区别于创建任务自定义参数。
     * @example `test`
     */
    "InstanceParameters"?: string;
    /**
     * 命名空间ID，在控制台的命名空间页面中获取。
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
     */
    "Namespace": string;
    /**
     * 特殊第三方才需要填写。
     * @example `schedulerx`
     */
    "NamespaceSource"?: string;
    /**
     * 应用ID，在控制台的应用管理页面中获取。
     * @example `testSchedulerx.defaultGroup`
     */
    "GroupId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否检查任务状态，取值如下：**true**：任务启用才能执行任务。**false**：任务不启用也可以执行任务。
     * @example `true`
     */
    "CheckJobStatus"?: boolean;
    /**
     * 指定机器的类型，取值如下：**1**：指定worker。**2**：指定label
     * @example `1`
     */
    "DesignateType"?: number;
    /**
     * 应用的worker地址，需要先通过GetWokerList接口返回workerAddress
     * @example `xxxxxxx@127.0.0.1:222`
     */
    "Worker"?: string;
    /**
     * worker的标签
     * @example `gray`
     */
    "Label"?: string;
}
