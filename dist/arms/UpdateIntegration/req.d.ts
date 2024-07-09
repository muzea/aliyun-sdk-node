export interface UpdateIntegrationRequest {
    /**
     * 告警集成ID。
     * @example `1234`
     */
    "IntegrationId": number;
    /**
     * 告警集成名称。
     * @example `云监控集成`
     */
    "IntegrationName": string;
    /**
     * 集成产品类型：
     * - CLOUD_MONITOR：云监控
     * - LOG_SERVICE：日志服务
     * @example `CLOUD_MONITOR`
     */
    "IntegrationProductType": string;
    /**
     * 告警集成描述信息。
     * @example `测试`
     */
    "Description"?: string;
    /**
     * 告警事件是否自动恢复：
     * - true（默认）
     * - false
     * @example `true`
     */
    "AutoRecover"?: boolean;
    /**
     * 告警事件自动恢复时间，默认时间为300秒。
     * @example `300`
     */
    "RecoverTime"?: number;
    /**
     * 去重的字段。
     * @example `LABEL.dimensions::LABEL.ruleId`
     */
    "DuplicateKey"?: string;
    /**
     * 告警集成是否启用：
     * - true
     * - false
     * @example `true`
     */
    "State"?: boolean;
    /**
     * 最近1小时总数及异常数。
     * @example `[0,0]`
     */
    "Stat"?: string;
    /**
     * 告警集成活跃度。
     * @example `ready`
     */
    "Liveness"?: string;
    /**
     * 事件映射，将源字段映射到目标字段。
     * 固定字段映射，创建集成时默认生成的固定映射。更多信息，请参见下方补充说明。
     * @example `[
        {
            "redefineType":"EXTRACT",
            "matchExpression":null,
            "fieldName":"alertname",
            "expression":null,
            "mappingRuleList":[
    
            ],
            "name":"告警名称",
            "integrationId":1234,
            "jsonPath":"$.alertName",
            "id":10001,
            "fieldType":"LABEL"
        },
        {
            "redefineType":"MAP",
            "matchExpression":null,
            "fieldName":"severity",
            "expression":null,
            "mappingRuleList":[
                {
                    "mappingValue":"critical",
                    "mappingName":"P1",
                    "mappingType":"MAP",
                    "originValue":"CRITICAL"
                },
                {
                    "mappingValue":"error",
                    "mappingName":"P2",
                    "mappingType":"MAP",
                    "originValue":"WARN"
                },
                {
                    "mappingValue":"warning",
                    "mappingName":"P3",
                    "mappingType":"MAP",
                    "originValue":"INFO"
                }
            ],
            "name":"告警等级",
            "integrationId":1234,
            "jsonPath":"$.triggerLevel",
            "id":10002,
            "fieldType":"LABEL"
        },
        {
            "redefineType":"EXTRACT",
            "matchExpression":null,
            "fieldName":"message",
            "expression":"{{$labels.namespace}} / {{$labels.dimensions}} 发生 {{ $labels.alertname }}, 当前值 {{$value}}。",
            "mappingRuleList":[
    
            ],
            "name":"告警描述",
            "integrationId":1234,
            "jsonPath":null,
            "id":10003,
            "fieldType":"ANNOTATION"
        },
        {
            "redefineType":"EXTRACT",
            "matchExpression":null,
            "fieldName":"value",
            "expression":null,
            "mappingRuleList":[
    
            ],
            "name":"告警样本值",
            "integrationId":1234,
            "jsonPath":"$.curValue",
            "id":10004,
            "fieldType":"ANNOTATION"
        },
        {
            "redefineType":"EXTRACT",
            "matchExpression":null,
            "fieldName":"source",
            "expression":null,
            "mappingRuleList":[
    
            ],
            "name":"来源",
            "integrationId":1234,
            "jsonPath":null,
            "id":10007,
            "fieldType":"LABEL"
        },
        {
            "redefineType":"ADD",
            "matchExpression":null,
            "fieldName":"generatorUrl",
            "expression":"https://cloudmonitor.console.aliyun.com/index.htm#/alarmInfo/name={{$labels.ruleId}}&searchValue=&searchType=name&searchProduct=/history/all/searchKey:{{$labels.ruleId}},startTime:{{sub $startsAt 300000}},endTime:{{$endsAt}}",
            "mappingRuleList":[
    
            ],
            "name":"事件地址",
            "integrationId":1234,
            "jsonPath":"https://cloudmonitor.console.aliyun.com/index.htm#/alarmInfo/name={{$labels.ruleId}}&searchValue=&searchType=name&searchProduct=/history/all/searchKey:{{$labels.ruleId}},startTime:{{sub $startsAt 300000}},endTime:{{$endsAt}}",
            "id":10012,
            "fieldType":"GENERATE_URL"
        }
    ]`
     */
    "FieldRedefineRules"?: string;
    /**
     * 事件映射，将源字段映射到目标字段，拓展字段增加映射。更多信息，请参见下方补充说明。
     * @example `[
        {
            "redefineType":"EXTRACT",
            "matchExpression":null,
            "fieldName":"dimensions",
            "expression":null,
            "mappingRuleList":[
    
            ],
            "name":"dimensions",
            "integrationId":1234,
            "jsonPath":"$.dimensions",
            "id":10013,
            "fieldType":"LABEL"
        },
        {
            "redefineType":"EXTRACT",
            "matchExpression":null,
            "fieldName":"expression",
            "expression":null,
            "mappingRuleList":[
    
            ],
            "name":"expression",
            "integrationId":1234,
            "jsonPath":"$.expression",
            "id":10014,
            "fieldType":"LABEL"
        }
    ]`
     */
    "ExtendedFieldRedefineRules"?: string;
    /**
     * 告警事件恢复字段。系统收到恢复事件后会根据恢复事件中的字段查询告警事件进行恢复。
     * > 仅日志服务支持设置此参数。
     * @example `$.status`
     */
    "InitiativeRecoverField"?: string;
    /**
     * 告警事件恢复字段值。系统收到恢复事件后会根据恢复事件中的字段查询告警事件进行恢复。
     * > 仅日志服务支持设置此参数。
     * @example `ok`
     */
    "InitiativeRecoverValue"?: string;
}
