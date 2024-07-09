export interface ListSessionClustersRequest {
    /**
     * 标记当前开始读取的位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    "nextToken"?: string;
    /**
     * 一次获取的最大记录数。
     * @example `20`
     */
    "maxResults"?: number;
    /**
     * 工作空间id。
     * @example `w-1234abcd`
     */
    "workspaceId"?: string;
    /**
     * 作业名称。
     * @example `emr-spark-demo-job`
     */
    "sessionClusterId"?: string;
    /**
     * 队列名称。
     * @example `root`
     */
    "queueName"?: string;
    /**
     * 区域ID。
     * @example `cn-hangzhou`
     */
    "regionId"?: string;
}
