export interface GetStatefulAsyncInvocationRequest {
    /**
     * 异步任务所属的服务名称。
     * @example `demo-service`
     */
    "serviceName": string;
    /**
     * 异步任务所属的函数名称。
     * @example `demo-function`
     */
    "functionName": string;
    /**
     * 异步任务的ID。
     * > 建议您在使用SDK调用时设置与业务相关的ID，方便对相关执行进行后续操作。例如，一个视频处理函数可以使用视频文件名作为调用ID，通过该ID可以查看视频是否处理完成或终止视频的处理。该ID的命名规则只能以英文大小写字母或下划线（\_）开头，由英文大小写字母、数字（0-9）、下划线（_）及短划线（-）组成，不超过128个字符。如果您未设置异步调用的ID时，系统则会自动生成一个ID。
     * @example `e026ae92-61e5-472f-b32d-1c9e3c4e****`
     */
    "invocationId": string;
    /**
     * 异步任务所属服务的别名或版本。
     * @example `LATEST`
     */
    "qualifier"?: string;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数代码包的CRC-64值，用于校验完整性。应当由工具自动计算。
     * @example `1506052139770049xxxx`
     */
    "X-Fc-Code-Checksum"?: string;
    /**
     * 请求返回日志。
     * - **Tail**：返回当前请求产生的最后4 KB日志。
     * - **None**：默认值，不返回请求日志。
     * @example `Tail`
     */
    "X-Fc-Log-Type"?: string;
    /**
     * 调用方式。
     * - **Sync**：同步调用。
     * - **Async**：异步调用。
     * @example `Async`
     */
    "X-Fc-Invocation-Type"?: string;
    /**
     * 函数的调用开始日期，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Sat, 14 Jul 2017 07:02:38 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 函数计算调用请求的调用链ID。
     * @example `asdf****`
     */
    "X-Fc-Trace-Id"?: string;
}
