export interface GetEmonMonitorDataRequest {
    /**
     * 项目ID，格式为`es-当前账号ID`。
     * @example `es-185320276651****`
     */
    "ProjectId": string;
    /**
     * 指定指标监控参数。
     * @example `{     "start": 1522127381471,      "queries": [     {         "metric": "elasticbuild.elasticsearch.source.total_doc_count",         "aggregator": "sum",         "downsample": "avg",          "tags": {           "taskName": "et-testtsk",           "userId":"123456"          },          "granularity": "1m"        }     ],      "limit": "",       "end": 1522129151000 }`
     */
    "body"?: string;
}
