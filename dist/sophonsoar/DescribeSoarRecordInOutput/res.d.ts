export interface DescribeSoarRecordInOutputResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `372D8B41-AF8D-573A-9B3F-0924950F241F`
     */
    RequestId: string;
    /**
     * 组件动作的执行结果。
     * @example `{
        "actionUuid": "3896a25d-4967-493c-942e-4e60f27da1f7-xxxxx",
        "outputSummary": {
            "datalist": [
                {
                    "a": "a"
                }
            ],
            "total_data_successful": 1,
            "total_data": 1,
            "total_exe_successful": 1,
            "total_exe": 1,
            "total_data_with_dup": 1,
            "status": true
        },
        "outputSchema": {
            "a": "String",
            "startTime": "DateTime"
        },
        "inputParams": {
            "inputData": [
                {
                    "outputFields": {
                        "a": "a"
                    }
                }
            ],
            "totalSize": 1
        },
        "startTime": "2023-11-13 17:47:28.645",
        "taskName": "92af3c79-1754-4646-9366-9ddbxxxxx"
    }`
     */
    InOutputInfo: string;
}
