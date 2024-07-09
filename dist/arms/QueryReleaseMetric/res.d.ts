export interface QueryReleaseMetricResponse {
    /**
     * 返回的指标数据对比。
     * @example `{"data":{"SystemCpuUser":{"all":[{"date":1632798718000,"val":4.3277,"dim":"SystemCpuUser"},{"date":1632798733000,"val":8.1091,"dim":"SystemCpuUser"}]},"SystemMemUtil":{"all":[{"date":1632798718000,"val":73.4227,"dim":"SystemMemUtil"},{"date":1632798733000,"val":93.0977,"dim":"SystemMemUtil"}]}},"success":true}`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `46355DD8-FC56-40C5-BFC6-269DE4F9****`
     */
    RequestId: string;
}
