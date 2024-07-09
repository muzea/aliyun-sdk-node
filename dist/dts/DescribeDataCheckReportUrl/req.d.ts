export interface DescribeDataCheckReportUrlRequest {
    /**
     * 数据校验方式，当前仅支持取值为**1**，表示全量校验。
     * @example `1`
     */
    "CheckType": number;
    /**
     * 校验的源数据库名称。
     * @example `dtsdb`
     */
    "DbName": string;
    /**
     * 源数据库中校验的表名。
     * @example `student`
     */
    "TbName": string;
    /**
     * DTS任务ID，可以调用[DescribeDtsJobs](~~209702~~)获取。
     * @example `f4612nr2182****`
     */
    "DtsJobId": string;
}
