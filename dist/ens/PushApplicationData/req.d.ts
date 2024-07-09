export interface PushApplicationDataRequest {
    /**
     * 预推的数据文件列表，Json数组的字符串格式。
     * @example `[{\"name\":\"app01\",       \"version\":\"1.0\",       \"size\":100,\"archiveType\":\"tar.gz\",       \"md5\":\"\",       \"url\":\"http://xxxx\",\"timeout\": 1000   },    {       \"name\":\"app02\",       \"version\":\"1.1\",       \"size\":10,\"archiveType\":\"zip\",       \"md5\":\"xxxx\",       \"url\":\"http://xxxxxx\",\"timeout\": 1000   }]`
     */
    "Data": string;
    /**
     * 应用ID。
     * @example `e76f8985-7965-41fc-925b-9648bb6bf650`
     */
    "AppId": string;
    /**
     * 无效参数。
     * @example `1800`
     */
    "Timeout"?: number;
    /**
     * 灰度预推策略，Json格式的字符串，支持多种分发策略，默认全量预推。
     * @example `{\"name\": \"ScheduleToRegionId\",  \"parameters\":{      \"operator\": \"In\",       \"values\": [\"cn-chegndu-telecom-4\", \"cn-shanghai-cmcc-4\"]  }}`
     */
    "PushStrategy"?: string;
}
