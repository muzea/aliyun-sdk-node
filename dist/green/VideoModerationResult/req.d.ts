export interface VideoModerationResultRequest {
    /**
     * 视频审核ServiceCode
     * @example `videoDetection`
     */
    "Service"?: string;
    /**
     * 审核服务需要的参数集。taskId，即要查询的检测任务的taskId，每次支持输入一个taskId。
     * @example `{"taskId":"au_f_8PoWiZKoLbczp5HRn69VdT-1y8@U5"}`
     */
    "ServiceParameters"?: string;
}
