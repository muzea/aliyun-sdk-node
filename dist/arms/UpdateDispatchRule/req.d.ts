export interface UpdateDispatchRuleRequest {
    /**
     * 分派条件的配置JSON串。关于此字段的详细说明参见下文**关于参数DispatchRule的补充说明**。
     * @example `{   "id": 123,     "system": false,   "ruleid": 10282,   "name": "Prometheus Alert",   "labelMatchExpressionGrid": {     "labelMatchExpressionGroups": [       {         "labelMatchExpressions": [           {             "key": "_aliyun_arms_involvedObject_kind",             "value": "app",             "operator": "eq"           }         ]       }     ]   },   "dispatchType": "CREATE_ALERT/DISCARD_ALERT",   "isRecover": true,   "groupRules": [     {       "groupId": 1,       "groupingFields": [         "alertname"       ],       "groupWait": 10,       "groupInterval": 15,       "repeatInterval": 20     }   ],   "notifyRules": [     {       "notifyObjects": [         {           "notifyType": "ARMS_CONTACT",           "name": "JohnDoe",           "notifyObjectId": 1         },         {           "notifyType": "ARMS_CONTACT_GROUP",           "name": "JohnDoe_group",           "notifyObjectId": 2         }       ],       "notifyChannels":["dingTalk","wechat","webhook","email"]     },   ], }`
     */
    "DispatchRule": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
