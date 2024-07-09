export interface TestEventPatternRequest {
    /**
     * 事件
     * @example `{
        "datacontenttype": "application/json;charset=utf-8",
        "aliyunaccountid": "*****",
        "aliyunpublishtime": "2023-04-****:54:57.939Z",
        "data": {
            "resourceEventType": "****",
            "resourceCreateTime": "****",
            "resourceId": "sls-code-***-debug",
            "captureTime": "***"
        },
        "aliyunoriginalaccountid": "****",
        "specversion": "1.0",
        "aliyuneventbusname": "****",
        "id": "295e6bd2-bb72-4f70-****-204a0680ee41",
        "source": "acs.sls",
        "time": "2023-04-***:37:56Z",
        "aliyunregionid": "cn-***",
        "type": "sls:Config:****"
    }`
     */
    "Event": string;
    /**
     * 事件模式
     * @example `{"key1": "value1"}`
     */
    "EventPattern": string;
}
