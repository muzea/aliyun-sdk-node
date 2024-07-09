export interface QueryDevicesHotStorageDataRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * @example `iot-2w****`
     */
    "IotInstanceId": string;
    /**
     * 单个字段标识符可返回的数据记录数量，最大值为100。
     * 任意一个字段返回的数据记录数量均不超过该值。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 设备所属的产品**ProductKey**。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 设备的名称。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `device1`
     */
    "DeviceName"?: string;
    /**
     * 下一页标识。如果存在下一页，服务会返回此token，下次请求带上即可。
     * @example `Bo***x44Qx`
     */
    "NextPageToken"?: string;
    /**
     * 要查询的数据记录的开始时间，必须小于结束时间**EndTime**。取值为毫秒值时间戳，例如：1579249499000。
     * @example `1579249499000`
     */
    "StartTime": number;
    /**
     * 已存储热数据中的字段标识符。即调用**WriteDevicesHotStorageData**接口写入热数据中请求参数**Items**中的字段标识符。
     * @example `temperature`
     */
    "Identifier": string;
    /**
     * 返回结果中数据记录的排序方式，取值：
     * - **0**：倒序。
     * - **1**：正序。
     * @example `0`
     */
    "Asc": number;
    /**
     * 设备ID。
     * ><notice> **IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果传入该参数，则无需传入**ProductKey**和**DeviceName**。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * ></notice>
     * @example `y4u2weAI********HMle1234`
     */
    "IotId"?: string;
    /**
     * 要查询的数据记录的结束时间，必须大于起始时间**StartTime**。取值为毫秒值时间戳，例如：1579249499000。
     * @example `1579249499000`
     */
    "EndTime": number;
    /**
     * 要查询数据所属自定义Topic。从`user`类目开始，输入自定义Topic的后续所有类目。
     * 自定义Topic详细说明，请参见[自定义Topic](~~85539~~)。
     * @example `user/a***​/b***`
     */
    "UserTopic": string;
}
