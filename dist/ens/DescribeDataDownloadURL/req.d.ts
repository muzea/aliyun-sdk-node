export interface DescribeDataDownloadURLRequest {
    /**
     * 应用ID。
     * @example `474bdef0-d149-4695-abfb-52912d9143f0`
     */
    "AppId": string;
    /**
     * 数据文件名。
     * @example `mirror_file/pk-1642597182026-878199448832413.tar`
     */
    "DataName": string;
    /**
     * 数据版本号。
     * @example `7895`
     */
    "DataVersion": string;
    /**
     * 文件服务器筛选条件。支持多种灰度策略，默认全量查询。
     * @example `{\"name\": \"ScheduleToRegionId\",\"parameters\":{\"operator\": \"In\",\"values\": [\"cn-shijiazhuang-telecom_unicom_cmcc\"]}}`
     */
    "ServerFilterStrategy"?: string;
    /**
     * 预留参数。
     * @example `600`
     */
    "ExpireTimeout"?: number;
}
