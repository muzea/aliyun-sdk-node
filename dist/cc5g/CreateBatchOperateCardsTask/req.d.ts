export interface CreateBatchOperateCardsTaskRequest {
    /**
     * 批量操作任务名称。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 批量操作任务描述。
     * @example `task- test`
     */
    "Description"?: string;
    /**
     * 地域id。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `TF-******-1633255280-43c94bf7-2dd3-4c14-8`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建批量操作卡任务。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查直接创建批量操作卡任务。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 5G上云实例的id列表，最多10个。
     */
    "WirelessCloudConnectorIds"?: string[];
    /**
     * 卡的iccid列表，最多200条。
     */
    "Iccids"?: string[];
    /**
     * iccid文件存放路径。
     * @example `https://examplebucket.oss-eu-central-1.aliyuncs.com/***`
     */
    "IccidsOssFilePath"?: string;
    /**
     * 限制类型，取值：
     * - **BreakNetwork**: 达量断网
     * - **LimitRate**: 达量限速
     * - **Alarm**: 达量告警
     * @example `BreakNetwork`
     */
    "OperateType": string;
    /**
     * 达量阈值，单位MB。
     * @example `100`
     */
    "Threshold": number;
    /**
     * 生效类型，取值：
     * - **CurrentMonth**：当月生效
     * - **ContinualMonth**：连续生效
     * @example `CurrentMonth`
     */
    "EffectType": string;
}
