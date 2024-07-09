export interface DescribeCdnDeliverListResponse {
    /**
     * 订阅任务列表数据。
     * @example `"data": [{"deliverId": 1,"status": "enable","createTime": "2020-10-14T11:19:26Z","crontab": "0 0 0 * * ?","frequency": "d","name": "域名订阅","dmList": ["www.example.com"],"reports": [{"reportId": 1,"conditions": [{"op": "in","field": "prov","value": ["黑龙江","北京"]}]},{"reportId": 2}],"deliver": {"email": {"subject": "主题","to": ["example@alibaba-inc.com","example@alibaba-inc.com"]}}}]}}`
     */
    Content: string;
    /**
     * 请求ID。
     * @example `12345`
     */
    RequestId: string;
}
