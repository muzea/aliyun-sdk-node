export interface CreateInstantSiteMonitorRequest {
    /**
     * 探测任务的URL或IP地址。
     * @example `http://www.aliyun.com`
     */
    "Address": string;
    /**
     * 探测任务的类型。
     * 目前探测任务的类型包括：HTTP、PING、TCP、UDP和DNS。
     * @example `HTTP`
     */
    "TaskType": string;
    /**
     * 探测任务的名称。
     * <props="china">长度4~100个字符，取值可包含英文字母、数字、下划线（_）和汉字。</props>
     * <props="intl">长度4~100个字符，取值可包含英文字母、数字和下划线（_）。</props>
     * <props="partner">长度4~100个字符，取值可包含英文字母、数字和下划线（_）。</props>
     * @example `task1`
     */
    "TaskName": string;
    /**
     * 探测点信息。如果该参数取值为空，则系统随机选择3个探测点。
     * 格式为`JSONArray`，例如：[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]，分别对应北京、杭州、青岛。
     * 关于如何获取探测点信息，请参见[DescribeSiteMonitorISPCityList](~~115045~~)。
     * > `IspCities`和`RandomIspCity`必须二选一。
     * @example `[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`
     */
    "IspCities"?: string;
    /**
     * 探测任务对应协议类型的高级扩展选项。不同探测任务的协议类型对应不同的扩展选项。
     * @example `{"time_out":5000}`
     */
    "OptionsJson"?: string;
    /**
     * 探测点的数量。
     * > - `IspCities`和`RandomIspCity`必须二选一。- 如果您设置了参数`RandomIspCity`，参数`IspCities`自动失效。
     * @example `1`
     */
    "RandomIspCity"?: number;
}
