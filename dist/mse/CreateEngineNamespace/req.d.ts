export interface CreateEngineNamespaceRequest {
    /**
     * 集群ID。
     * @example `mse-98s****`
     */
    "ClusterId"?: string;
    /**
     * 命名空间展示名字。
     * @example `dev`
     */
    "Name": string;
    /**
     * 命名空间描述。
     * @example `开发环境`
     */
    "Desc"?: string;
    /**
     * 实例ID。
     * @example `mse-cn-st21ri2****`
     */
    "InstanceId"?: string;
    /**
     * 当前命名空间下运行的最大服务数。
     * @example `100`
     */
    "ServiceCount"?: number;
    /**
     * 命名空间自定义ID，若不填，返回自动生成的UUID
     * @example `f4fa5b81-2f26-4900-833a-7516b315ebb2`
     */
    "Id"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
