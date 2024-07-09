export interface GetEngineNamepaceRequest {
    /**
     * 目标ID。
     * @example `0e958d79-****-b282-b702d66362b5`
     */
    "Id"?: string;
    /**
     * 实例ID。
     * @example `mse.cn-hangzhou.aliyuncs.com`
     */
    "InstanceId"?: string;
    /**
     * 集群ID。
     * @example `mse-98s****`
     */
    "ClusterId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
