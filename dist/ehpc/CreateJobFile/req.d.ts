export interface CreateJobFileRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-jeJki6****`
     */
    "ClusterId": string;
    /**
     * 创建作业文件的用户名。
     * 您可以通过调用[ListUsers](~~188572~~)获取该集群中的用户名。
     * @example `testuser1`
     */
    "RunasUser": string;
    /**
     * 用户密码。
     * @example `!QAZ****`
     */
    "RunasUserPassword"?: string;
    /**
     * 作业文件内容，是以Base64编码的文本内容。
     * @example `c2xlZXAgMzA=`
     */
    "Content": string;
    /**
     * 作业文件名称。
     * @example `lammps.pbs`
     */
    "TargetFile": string;
    /**
     * 采用异步消息链路提交作业文件。
     * 默认值：false。
     * @example `false`
     */
    "Async"?: boolean;
}
