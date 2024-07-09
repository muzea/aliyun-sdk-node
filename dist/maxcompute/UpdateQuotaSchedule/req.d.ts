export interface UpdateQuotaScheduleRequest {
    /**
     * Quota名称
     * @example `%E9%BB%98%E8%AE%A4%E9%A2%84%E4%BB%98%E8%B4%B9Quota_p
    
    #中文名称需要经过utf8 urlencode编码转义`
     */
    "nickname": string;
    /**
     * 租户id
     * @example `478403690625249`
     */
    "tenantId"?: string;
    /**
     * 地域id。
     * @example `cn-chengdu`
     */
    "region"?: string;
    /**
     * 请求体参数
     * @example `
    # 立即生效
    [
      {
        "type": "once",
        "plan": "planA",
        "operator":"userA"
      }
    ]
    
    # 定时调度
    [
      {
        "id": "etl_time",
        "type": "daily",
        "condition": {
          "at": "0800"
        },
        "plan": "planA"
      },
      {
        "id": "bi",
        "type": "daily",
        "condition": {
          "at": "0900"
        },
        "plan": "planB"
      },
    ]`
     */
    "body"?: string;
}
