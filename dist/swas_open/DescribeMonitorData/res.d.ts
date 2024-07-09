export interface DescribeMonitorDataResponse {
    /**
     * 请求ID。
     * @example `30637AD6-D977-4833-A54C-CC89483E****`
     */
    RequestId: string;
    /**
     * 监控数据列表。
     * @example `[]`
     */
    Datapoints: string;
    /**
     * 时间间隔。
     * 取值：60、300、900。
     * 单位：秒。
     * >
     * 当Metricname为FLOW_USED时，Period值固定为3600s（即一小时），请根据您的实际需求设置该参数。
     * >
     * @example `60`
     */
    Period: string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值，初次调用无需配置。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6nOc1nj4M9UaAZ/I8db***
    `
     */
    NextToken: string;
}
