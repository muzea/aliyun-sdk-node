export interface CreateDownloadDataJobRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-npk1u******`
     */
    "IotInstanceId"?: string;
    /**
     * 需下载的表名称。
     * @example `product_info`
     */
    "TableName": string;
    /**
     * 下载对象的类型，暂只支持**TABLE**。
     * @example `TABLE`
     */
    "DownloadDataType": string;
    /**
     * 下载文件设置。给下载文件设置一个名称（fileName），可自定义，若fileName不传则默认生成一个文件名。
     * @example `{"fileName":"fileName01"}`
     */
    "FileConfig"?: any;
    /**
     * 时间范围，查询数据的开始时间。
     * @example `1658332800000`
     */
    "StartTime"?: number;
    /**
     * 时间范围，查询数据的结束时间。
     * @example `1658406464534`
     */
    "EndTime"?: number;
}
