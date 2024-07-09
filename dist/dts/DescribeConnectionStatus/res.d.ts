export interface DescribeConnectionStatusResponse {
    /**
     * 源库测试连接结果。
     * @example `{     "connectDetail": [       {         "testName": "Oracle JDBC Connect",         "testSuccess": true       },       {         "testName": "Ping ",         "testSuccess": false       },       {         "testName": "Telnet ",         "testSuccess": true       }     ],     "connectRes": true,     "connectAdvice": ""   }`
     */
    SourceConnectionStatus: any;
    /**
     * 目标库测试连接结果。
     * @example `{     "connectDetail": [       {         "testName": "PolarDB_o JDBC Connect",         "testSuccess": true       },       {         "testName": "Ping ",         "testSuccess": true       },       {         "testName": "Telnet ",         "testSuccess": true       }     ],     "connectRes": true,     "connectAdvice": ""   }`
     */
    DestinationConnectionStatus: any;
    /**
     * 请求ID。
     * @example `0A47C784-70EF-4111-8677-369CAA00****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
}
