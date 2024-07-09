export interface UpdateCampaignRequest {
    /**
     * 呼叫中心实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 预测式外呼活动ID。
     * @example `ab11908b-6ebc-4b0c-b51e-3e17c7060`
     */
    "CampaignId": string;
    /**
     * 开始时间，格式为Unix时间戳，单位毫秒。
     * @example `1689901200000`
     */
    "StartTime"?: string;
    /**
     * 结束时间，格式为Unix时间戳，单位毫秒。
     * @example `1689933600000`
     */
    "EndTime"?: string;
    /**
     * 可执行时间，支持多个时间段。
     * @example `[
          {
                "beginTime": "09:00:00",
                "endTime": "12:00:00"
          }
    ]`
     */
    "CallableTime"?: string;
    /**
     * 策略参数。
     * @example `PACING策略，参考参数
    {
          "ratio": 2
    }
    
    PID策略，参考参数
    {
        "abandonRate":5,
        "historicalConnectedRate":45
    }`
     */
    "StrategyParameters"?: string;
    /**
     * 预测式外呼活动名称。
     * @example `云呼测试`
     */
    "Name"?: string;
    /**
     * 联系流ID。
     * @example `3a310f56-4d30-4081-ba24-5d87a3b7262e`
     */
    "ContactFlowId"?: string;
}
