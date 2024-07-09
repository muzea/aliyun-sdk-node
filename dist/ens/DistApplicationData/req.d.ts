export interface DistApplicationDataRequest {
    /**
     * 应用ID。获取AppId，请参见ListApplications。
     * @example `e76f8985-7965-41fc-925b-9648bb6bf650`
     */
    "AppId": string;
    /**
     * 分发的数据文件列表，Json数组的字符串格式。
     * @example `[{\"name\":\"app01\",        \"version\":\"1.0\",        \"destPath\":\"/root/installed\",        \"decompress\":true,        \"targetDirName\":\"target01\",        \"fileMode\":755,        \"timeout\":1000    },    {        \"name\":\"app02\",        \"version\":\"1.1\",        \"destPath\":\"/tmp/test.txt\",        \"decompress\":false    }]`
     */
    "Data": string;
    /**
     * 灰度分发策略，Json格式的字符串，支持多种分发策略，默认全量分发。
     * @example `{\"name\":\"ScheduleToAllByMatchExpressions\",\"parameters\":{\"match_expressions\":[{\"key\":\"region_id\",\"operator\":\"In\",\"values\":[\"cn-wuhan-telecom_unicom_cmcc-2\"]}]}}`
     */
    "DistStrategy"?: string;
}
