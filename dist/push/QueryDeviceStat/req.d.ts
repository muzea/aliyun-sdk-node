export interface QueryDeviceStatRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 查询的开始时间。时间格式按照ISO8601标准表示，并需要使用UTC时间，格式为YYYY-MM-DDThh:mm:ssZ。
     * > 统计开始日期为开始时间当天北京时间0点。
     * @example `2016-07-28T00:00:00Z`
     */
    "StartTime": string;
    /**
     * 查询的结束时间。时间格式按照ISO8601标准表示，并需要使用UTC时间，格式为YYYY-MM-DDThh:mm:ssZ。
     * > 统计结束日期为结束时间当天。
     * @example `2016-07-29T00:00:00Z`
     */
    "EndTime": string;
    /**
     * 设备类型，取值范围为：
     * - **iOS**：iOS设备
     * - **ANDROID**：Android设备
     * - **ALL**：全部类型设备
     * @example `iOS`
     */
    "DeviceType": string;
    /**
     * 查询的是新增设备数还是历史累计设备数。可取值：
     * - **NEW**：新增设备
     * - **TOTAL**：累计设备数
     * @example `TOTAL`
     */
    "QueryType": string;
}
