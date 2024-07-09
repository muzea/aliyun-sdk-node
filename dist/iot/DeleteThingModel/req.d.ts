export interface DeleteThingModelRequest {
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
     * 资源组ID。
     * @example `rg-acfm4l5tcwd****`
     */
    "ResourceGroupId"?: string;
    /**
     * 产品的ProductKey。
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 物模型自定义模块标识符，在产品中具有唯一性。
     * - **PropertyIdentifier.N**、**ServiceIdentifier.N**或**EventIdentifier.N**不为空时，传入此参数，删除自定义模块下指定功能；不传入此参数，删除默认模块下指定功能。
     * - **PropertyIdentifier.N**、**ServiceIdentifier.N**和**EventIdentifier.N**都为空时，传入此参数，删除该模块及其下所有功能定义。
     * @example `BatteryModule`
     */
    "FunctionBlockId"?: string;
    /**
     * 需要删除的属性标识符列表。最多传入10个属性标识符。
     * @example `Temperature`
     */
    "PropertyIdentifier"?: string[];
    /**
     * 需要删除的服务标识符列表。最多传入10个服务标识符。
     * @example `Set`
     */
    "ServiceIdentifier"?: string[];
    /**
     * 需要删除的事件标识符列表。最多传入10个事件标识符。
     * @example `OfflineAlert`
     */
    "EventIdentifier"?: string[];
}
