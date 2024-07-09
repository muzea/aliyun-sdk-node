export interface ListDataDiagnoseReportsResponse {
    /**
     * Id of the request
     * @example `8B90B646-1678-41A3-B23F-EAC6587B0E48`
     */
    requestId: string;
    /**
     * 返回结果
     * @example `{
        "todayTimeLimit":8,
        "totalCount":10,
        "reports":[
            {
                "diagnoseLevel":"low | medium | high",
                "startTime":1566489600,
                "endTime":1566489600,
                "taskCreateTime":1566489600,
                "taskSource":"manual | cycle | firstRun",
                "total":{
                    "itemCount":100,
                    "userCount":100,
                    "bhvCount":100
                },
                "details":[
                    {
                        "key":"",
                        "level":"error | warn | info",
                        "errorCount":10,
                        "errorPercent":10,
                        "sampleEnabled":true;
                    }
                ]
            },
            {
                "diagnoseLevel":"low | medium | high",
                "startTime":1566489600,
                "endTime":1566489600,
                "taskCreateTime":1566489600,
                "taskSource":"manual | cycle | firstRun",
                "total":{
                    "itemCount":100,
                    "userCount":100,
                    "bhvCount":100
                },
                "details":[
                    {
                        "key":"",
                        "level":"error | warn | info",
                        "errorCount":10,
                        "errorPercent":10,
                        "sampleEnabled":true;
                    }
                ]
            }
        ]
    }`
     */
    result: any;
}
