export interface GetInstanceConsumeTimeRankRequest {
    /**
     * DataWorks工作空间的ID。
     * @example `100000`
     */
    "ProjectId": number;
    /**
     * 业务日期，精确到天。您需要使用yyyy-MM-dd'T'HH:mm:ssZ的UTC格式。
     * @example `2020-09-21T00:00:00+0800`
     */
    "Bizdate": string;
}
