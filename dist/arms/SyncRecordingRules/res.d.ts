export interface SyncRecordingRulesResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `1A9C645C-C83F-4C9D-8CCB-29BEC9E1****`
     */
    RequestId: string;
    /**
     * 返回结构体。
     * @example `{     "data":[         "c06ca68cd16f14f52bb07772eda***",         "c33dd70a0ac184c1b879d807ab2***",         "c384cf7e4dcb543e6ac8c7d4dd3***",         "ce30f833bc4a04a56a06b070319***"     ],     "message":"设置RecordingRule失败的clusterIds",     "success":true }`
     */
    Data: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
}
