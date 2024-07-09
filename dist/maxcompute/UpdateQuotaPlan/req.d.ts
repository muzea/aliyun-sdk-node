export interface UpdateQuotaPlanRequest {
    /**
     * Quota名称
     * @example `quotaA`
     */
    "nickname": string;
    /**
     * Quota计划名称
     * @example `planA`
     */
    "planName": string;
    /**
     * 租户id。
     * @example `478403690625249`
     */
    "tenantId"?: string;
    /**
     * 地域id。
     * @example `cn-hangzhou`
     */
    "region"?: string;
    /**
     * 请求体参数
     * @example `{
      "name": "planA",
      // 以下为一个一级 quota，可以只选取跟 plan 相关的字段
      "quota": {
        "name": "a",
        "nickName": "aaa_nick",
        "tenantId": "10001",
        "regionId": "cn-hangzhou",
        "parentId": "0",
        "cluster": "AT-ODPS-TEST3",
        "parameter": {
            "minCU": 40,
            "maxCU": 40,
            "adhocCU": 0,
            "elasticMinCU": 40,
            "elasticMaxCU": 40,
            "enablePreemptiveScheduling": false,
            "forceReservedMin":true,
            "enablePriority":false,
            "singleJobCULimit":100,
            "adhocQuotaBeginTimeInSec": 1345,
            "adhocQuotaEndTimeInSec": 1234,
            "ignoreAdhocQuota":false
        },
        "subQuotaInfoList":
      [
            {
                "nickName": "WlmFuxiSecondaryOnlineQuotaTest",
                "name": "WlmFuxiSecondaryOnlineQuotaTest",
                "type": "FUXI_ONLINE",
                "tenantId": "10001",
                "regionId": "cn-hangzhou",
                "cluster": "AT-ODPS-TEST3",
                "parameter": {
                    "minCU": 40,
                    "maxCU": 40,
                    "adhocCU": 0,
                    "elasticMinCU": 40,
                    "elasticMaxCU": 40,
                    "enablePreemptiveScheduling": false,
                    "forceReservedMin":true,
                    "enablePriority":false,
                    "singleJobCULimit":100,
                    "adhocQuotaBeginTimeInSec": 1345,
                    "adhocQuotaEndTimeInSec": 1234,
                    "ignoreAdhocQuota":false
                }
            }
        ]
      }
    }`
     */
    "body"?: string;
}
