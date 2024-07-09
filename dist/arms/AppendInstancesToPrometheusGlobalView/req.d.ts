export interface AppendInstancesToPrometheusGlobalViewRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 聚合实例名称。
     * @example `zyGlobalView`
     */
    "GroupName": string;
    /**
     * 聚合实例列表，为JSON格式的字符串。
     * @example `[         {             "sourceName": "数据源名称- ArmsPrometheus No.1",             "sourceType":"AlibabaPrometheus",             "userId":"UserID",             "clusterId":"ClusterId",         },         {             "sourceName": "数据源名称 - MetrcStore No.2",             "sourceType":"MetricStore",             "dataSource":"MetricStore的 remote read 地址",             "extras":{                 "username":"BasicAuthUsername",                 "password":"BasicAuthPassword"             }         },         {             "sourceName": "Custom ",             "sourceType":"CustomPrometheus",             "dataSource":"自建Prometheus数据源 remoteread地址",             "extras":{                 "username":"BasicAuthUsername",                 "password":"BasicAuthPassword"             }         },         {           	"sourceName": "Other one ",             "sourceType":"Others",             "dataSource":"其他数据源如Tencent remoteread地址",             "headers":{                 "AnyHeaderToFill":"需要填充的Headers"             },             "extras":{                 "username":"BasicAuthUsername",                 "password":"BasicAuthPassword"             }         }   // ....... more addre ]`
     */
    "Clusters": string;
    /**
     * 聚合实例ID。
     * @example `global-v2-cn-1670100631025794-6gjc0qgb`
     */
    "GlobalViewClusterId": string;
}
