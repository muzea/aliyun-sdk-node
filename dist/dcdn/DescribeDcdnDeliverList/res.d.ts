export interface DescribeDcdnDeliverListResponse {
    /**
     * 订阅任务列表数据。
     * @example `"data": [{"deliverId": 1,"status": "enable","createTime": "2021-06-14T11:19:26Z","crontab": "0 0 0 * * ?","frequency": "d","name": "域名订阅","dmList": ["www.example.com"],"reports": [{"reportId": 1,"conditions": [{"op": "in","field": "prov","value": ["黑龙江","北京"]}]},{"reportId": 2}],"deliver": {"email": {"subject": "主题","to": ["username@example.com","username@example.org"],"copy":["username@example.com","username@example.org"]}}}]}`
     */
    Content: string;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
}
