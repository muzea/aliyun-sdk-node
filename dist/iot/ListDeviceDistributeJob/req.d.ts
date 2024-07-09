export interface ListDeviceDistributeJobRequest {
    /**
     * 设备分发的目标阿里云账号ID。
     * @example `198***`
     */
    "TargetUid"?: string;
    /**
     * 指定从返回结果中的第几页开始显示。默认值是1。
     * **NextToken**与**CurrentPage**是设置显示结果的条件参数，可任选一个传入。如果同时传入，则**NextToken**优先级更高。
     * **NextToken**参数的使用说明，请参见**NextToken**描述。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页显示的分发任务数量。最大不超过200条。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 设备分发任务的状态。
     * - **0**：任务初始化。
     * - **1**：任务执行中。
     *
     * - **2**：任务完成。该状态仅表示分发任务执行完成，不表示所有产品和设备都分发成功。获取分发结果详情，请调用[QueryDeviceDistributeDetail](~~199533~~)。
     * - **3**：任务异常中断。
     * @example `1`
     */
    "Status"?: number;
    /**
     * 设备分发任务的ID。任务的全局唯一标识符。
     * @example `UbmsMHmkqv0PiAG****010001`
     */
    "JobId"?: string;
    /**
     * 下一页标识，首次查询无需传入。
     * **NextToken**与**CurrentPage**是设置显示结果的条件参数，可任选一个传入。如果同时传入，则**NextToken**优先级更高。
     * ><notice>
     * 定义查询结果的偏移数量为：**PageSize**×（**CurrentPage**-1）。
     * 当偏移数量大于10,000时，必须传入上一次调用本接口返回的**NextToken**值，才会返回**Data**数据。否则，接口请求会被中断，无法返回**Data**数据。
     * ></notice>
     * @example `TGlzdFJlc291***`
     */
    "NextToken"?: string;
    /**
     * 设备所隶属的产品ProductKey。
     * @example `a1T27vz****`
     */
    "ProductKey"?: string;
}
