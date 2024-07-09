export type DescribeClusterLogsResponse = {
    /**
     * 日志ID。
     * @example `590749245`
     */
    ID: number;
    /**
     * 集群ID。
     * @example `c23421cfa74454bc8b37163fd19af***`
     */
    cluster_id: string;
    /**
     * 日志内容。
     * @example `start to update cluster status to CREATE_COMPLETE`
     */
    cluster_log: string;
    /**
     * 日志产生时间。
     * @example `2020-09-11T10:11:51+08:00`
     */
    created: string;
    /**
     * 日志更新时间。
     * @example `2020-09-11T10:11:51+08:00`
     */
    updated: string;
}[];
