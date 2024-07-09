export interface UpdateWhiteRuleListRequest {
    /**
     * 加白规则唯一ID。
     * @example `123456789`
     */
    "WhiteRuleId": number;
    /**
     * 事件全局唯一ID。
     * @example `85ea4241-798f-4684-a876-65d4f0c3****`
     */
    "IncidentUuid"?: string;
    /**
     * 告警加白规则，json对象。
     * @example `[
          {
                "alertName": "webshell",
                "alertNameId": "webshell",
                "alertType": "command",
                "alertTypeId": "command",
                "expression": {
                      "status": 1,
                      "conditions": [
                            {
                                  "isNot": false,
                                  "left": {
                                        "value": "file_path"
                                  },
                                  "operator": "gt",
                                  "right": {
                                        "value": "cp"
                                  }
                            }
                      ]
                }
          }
    ]`
     */
    "Expression": string;
    /**
     * 视图类型。
     * - 0：当前阿里云账号视图。
     * - 1：企业下所有账号的视图。
     * @example `1`
     */
    "RoleType"?: number;
    /**
     * 管理员切换成其他成员视角的用户ID。
     * @example `113091674488****`
     */
    "RoleFor"?: number;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港
     * - ap-southeast-1：资产属于海外地域
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
