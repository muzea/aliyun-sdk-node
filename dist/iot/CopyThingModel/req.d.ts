export interface CopyThingModelRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 资源组ID。
     * ><notice>目前，物联网平台仅支持实例维度的资源组管理。请求参数**ResourceGroupId**配置已无效，无需再传入。
     * ></notice>
     * @example `rg-acfm4l5tcwd****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要复制的物模型所属产品的ProductKey。
     * 可以在物联网平台控制台产品页查看，或调用[QueryProductList](~~69271~~)查看ProductKey的取值。
     * @example `a1BwAGV****`
     */
    "SourceProductKey": string;
    /**
     * 目标产品的**ProductKey**。
     * 可以在物联网平台控制台产品页查看，或调用[QueryProductList](~~69271~~)查看**ProductKey**的取值。
     * @example `a1BwwG0****`
     */
    "TargetProductKey": string;
    /**
     * 要复制的物模型版本号。
     * 可以调用[ListThingModelVersion](~~150318~~)，查看源物模型的版本号。
     * @example `V1.0.0`
     */
    "SourceModelVersion"?: string;
}
