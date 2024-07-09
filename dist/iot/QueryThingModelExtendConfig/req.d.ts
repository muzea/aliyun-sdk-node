export interface QueryThingModelExtendConfigRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 产品的**ProductKey**。
     * @example `a1T27vz****`
     */
    "ProductKey": string;
    /**
     * 资源组ID。
     * ><notice>目前，物联网平台仅支持实例维度的资源组管理。请求参数**ResourceGroupId**配置已无效，无需再传入。
     * ></notice>
     * @example `123***`
     */
    "ResourceGroupId"?: string;
    /**
     * 物模型版本号。
     * 可调用[ListThingModelVersion](~~150318~~)查看产品下的物模型版本号。
     * 为空时返回已发布的最新版本。
     * @example `v1.0.0`
     */
    "ModelVersion"?: string;
    /**
     * 物模型自定义模块标识符，在产品中具有唯一性。
     * 不传入此参数时，导出默认模块数据。
     * @example `BatteryModule`
     */
    "FunctionBlockId"?: string;
}
