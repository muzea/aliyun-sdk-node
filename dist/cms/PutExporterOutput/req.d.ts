export interface PutExporterOutputRequest {
    /**
     * 配置的名称。
     * @example `exporterConfig`
     */
    "DestName": string;
    /**
     * 数据导出的配置。是一个JSONObject字符串。必须要包含如下字段：
     * - endpoint：日志服务（SLS）数据对应的域名。
     * - project：项目。
     * - logstore：日志库。
     * - ak：AccessKey ID。
     * - as：AccessKey Secret。
     * @example `{ "endpoint": "http://cn-qingdao-share.log.aliyuncs.com", "project": "exporter", "logstore": "exporter","ak": "LTAIp*******", "userId": "17754********", "as": "TxHwuJ8yAb3AU******"}`
     */
    "ConfigJson": string;
    /**
     * 配置的描述信息。
     * @example `CPU指标导出`
     */
    "Desc"?: string;
    /**
     * 导出的产品。
     * @example `sls`
     */
    "DestType"?: string;
}
