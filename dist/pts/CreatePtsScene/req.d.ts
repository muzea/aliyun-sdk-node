export interface CreatePtsSceneRequest {
    /**
     * 场景信息。更多信息，请参见[参数说明](~~201321~~) 。
     * @example `{"loadConfig":{"agentCount":1,"apiLoadConfigList":[{"rpsBegin":10,"rpsLimit":100}],"configuration":{"allRpsBegin":10,"allRpsLimit":100},"maxRunningTime":1,"testMode":"tps_mode"},"relationList":[{"apiList":[{"apiName":"链路1的第一个API","body":{"bodyValue":"{\"key1\":\"111\",\"key2\":\"222\"}","contentType":"application/x-www-form-urlencoded"},"checkPointList":[{"checkPoint":"userId","checkType":"EXPORTED_PARAM","expectValue":"111","operator":"ctn"}],"exportList":[{"exportName":"userId","exportType":"STATUS_CODE"}],"headerList":[{"headerName":"userName","headerValue":"张三"}],"method":"GET","url":"https://www.aliyundoc.com"}],"relationName":"链路1"}],"sceneName":"xing-测试OpenAPI-1"}`
     */
    "Scene": string;
}
