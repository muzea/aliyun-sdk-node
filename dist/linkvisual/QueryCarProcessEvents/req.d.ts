export interface QueryCarProcessEventsRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iotx-oxsshare****`
     */
    "IotInstanceId"?: string;
    /**
     * IPC设备的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。可调用物联网平台[QueryDeviceDetail](~~69594~~)查询。
     * ><notice> 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**的组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**的组合，则以**IotId**为准。
     * ></notice>
     * @example `ImP6ECd1aQ****CAfWTO000101`
     */
    "SubIotId"?: string;
    /**
     * IPC设备所属产品的ProductKey。
     * 您可以在物联网平台控制台**产品**页查看或调用[QueryProductList](~~69271~~)查看当前账号下所有产品的信息。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1Duh0F****`
     */
    "SubProductKey"?: string;
    /**
     * IPC设备的设备名称。
     * 您可以在物联网平台控制台的**设备**页查看**DeviceName**。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `car_test`
     */
    "SubDeviceName"?: string;
    /**
     * 查询范围起始时间，格式为13位时间戳，单位为毫秒。
     * @example `1646288487368`
     */
    "BeginTime"?: number;
    /**
     * 查询范围结束时间，格式为13位时间戳，单位为毫秒。
     * @example `1646288488368`
     */
    "EndTime"?: number;
    /**
     * 指定从返回结果中的第几页开始显示。页数从1开始排序。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 每页显示的条数。最小值为1，最大值为20，默认值为10。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 车牌号码。最大支持输入15个字符。
     * @example `浙AM****`
     */
    "PlateNo"?: string;
    /**
     * 车辆的动作类型，包含以下三种类型：
     * - **1**：进入
     * - **2**：停留
     * -  **3**：离开
     * @example `2`
     */
    "ActionType"?: number;
    /**
     * IPC设备的检测框。您可调用[InvokeThingService](~~69584~~)查询检测框数量。其中**identifier**设置为**QueryAlgoTaskDetails**。
     * @example `1`
     */
    "AreaIndex"?: number;
}
