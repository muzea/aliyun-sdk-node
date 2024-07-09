export interface PageQuerySharedSpeechOpenRequest {
    /**
     * 要查询的设备ID。
     * > 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
    /**
     * 语料分享任务的分享码。
     * 您可在**千里传音语音播报服务**的**分享语料管理**页面，获取**分享码**。
     * @example `ebed9280_ba25_48df_80c2_****`
     */
    "ShareTaskCode"?: string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无**实例概览**页面或ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-2w****`
     */
    "IotInstanceId"?: string;
    /**
     * 指定返回结果中每页显示的记录数量，最大不超过100。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 设备所属产品的**ProductKey**。
     * @example `sd34****`
     */
    "ProductKey"?: string;
    /**
     * 要查询的页码。
     * @example `1`
     */
    "PageId"?: number;
    /**
     * 设备名称。
     * @example `device1`
     */
    "DeviceName"?: string;
    /**
     * 要查询语料的状态。可取值：
     * - **1**：等待审核。
     * - **2**：审核通过。
     * - **3**：审核拒绝。
     * @example `1`
     */
    "Status"?: number;
}
