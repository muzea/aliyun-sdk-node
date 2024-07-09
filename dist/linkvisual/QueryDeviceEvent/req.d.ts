export interface QueryDeviceEventRequest {
    /**
     * IPC设备所属产品的ProductKey。
     * 您可以在物联网平台控制台**产品**页查看或调用[QueryProductList](~~69271~~)查看当前账号下所有产品的信息。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * IPC设备的设备名称。
     * 您可以在物联网平台控制台的**设备**页查看**DeviceName**。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `camera1`
     */
    "DeviceName"?: string;
    /**
     * IPC设备的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。可调用物联网平台[QueryDeviceDetail](~~69594~~)查询。
     * ><notice> 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**的组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**的组合，则以**IotId**为准。
     * ></notice>
     * @example `zLZyi6aOLyOSHa9hsPyD00****`
     */
    "IotId"?: string;
    /**
     * 智能告警事件类型：
     * - 设置为全部智能告警事件：0。
     * - 设置为单个智能告警事件：输入智能告警事件对应的序号，例如：10001。
     * 请在物联网平台控制台，**产品详情**页面的**功能定义**页签，查看全部智能告警事件类型。详细信息，请参考[查看智能告警事件类型](~~207701~~)。
     * @example `0`
     */
    "EventType"?: number;
    /**
     * 查询范围起始时间，格式为13位时间戳，单位为毫秒。
     * @example `1539507310000`
     */
    "BeginTime": number;
    /**
     * 查询范围结束时间，格式为13位时间戳，单位为毫秒。
     * @example `1539607310000`
     */
    "EndTime": number;
    /**
     * 指定从返回结果中的第几页开始显示。页数从1开始排序。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页显示的条数。最小值为1，最大值为50，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 实例ID。
     * <props="china">您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。</props>
     * <props="china">
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。</props>
     * <props="intl">无需传入此参数。</props>
     * @example `iot-cn-n6w1y****`
     */
    "IotInstanceId"?: string;
}
