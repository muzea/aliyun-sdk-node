export interface UpdateQuotaRequest {
    /**
     * 租户id
     * @example `196871833188896`
     */
    "tenantId"?: string;
    /**
     * 地域id。
     * @example `cn-shanghai`
     */
    "region"?: string;
    /**
     * ak 换取凭证
     * @example `null`
     */
    "AkProven"?: string;
    /**
     * 配额名称
     * @example `quota_a`
     */
    "nickname": string;
    /**
     * 请求体参数
     * @example `{
          "id": "0",
          "name": "a",
          "nickName": "VIRTUAL",
          "type": "",
          "status": "ON",
          "tenantId": "10001",
          "regionId": "cn-hangzhou",
          "parentId": "0",
          "cluster": "AT-ODPS-TEST3",
          "version": "",
          "billingPolicy": {
                "odpsSpecCode": "",
                "billingMethod": "subscription"
          },
          "parameter": {
                "minCU": 40,
                "maxCU": 40,
                "adhocCU": 0, //弹性预留CU
                "elasticMinCU": 40, //非预留CU
                "elasticMaxCU": 40,
                "enablePreemptiveScheduling": false,
                "forceReservedMin": true,
                "enablePriority": false,
                "singleJobCULimit": 100,
                "adhocQuotaBeginTimeInSec": 1345,
                "adhocQuotaEndTimeInSec": 1234,
                "ignoreAdhocQuota": false
          },
          "subQuotaInfoList": [
                {
                      "id": "1000048",
                      "nickName": "WlmFuxiSecondaryOnlineQuotaTest",
                      "name": "WlmFuxiSecondaryOnlineQuotaTest",
                      "type": "FUXI_ONLINE",
                      "status": "ON",
                      "tenantId": "10001",
                      "regionId": "cn-hangzhou",
                      "parentId": "0",
                      "cluster": "AT-ODPS-TEST3",
                      "version": "",
                      "billingPolicy": {
                            "odpsSpecCode": "",
                            "billingMethod": "subscription"
                      },
                      "parameter": {
                            "minCU": 40,
                            "maxCU": 40,
                            "adhocCU": 0, //弹性预留CU
                            "elasticMinCU": 40, //非预留CU
                            "elasticMaxCU": 40,
                            "enablePreemptiveScheduling": false,
                            "forceReservedMin": true,
                            "enablePriority": false,
                            "singleJobCULimit": 100,
                            "adhocQuotaBeginTimeInSec": 1345,
                            "adhocQuotaEndTimeInSec": 1234,
                            "ignoreAdhocQuota": false
                      }
                }
          ]
    }`
     */
    "body"?: string;
}
