export interface ListDeploymentJobResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `12345678-1234-1234-1234-123456789ABC`
     */
    RequestId: string;
    /**
     * 查询到的部署任务总数。
     * @example `7`
     */
    Total: number;
    /**
     * 分页，表示当前页，默认1。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 每页包含部署任务的个数。默认值为**50**。
     * @example `50`
     */
    ShowSize: number;
    /**
     * 请求接口返回的数据。
     */
    Data: {
        /**
         * 部署任务ID。后续可用于查询部署任务详情、部署任务状态等。
         * @example `19975`
         */
        Id: number;
        /**
         * 部署任务创建时间（秒，时间戳格式）。
         * @example `1624343180000`
         */
        GmtCreate: string;
        /**
         * 部署任务上次修订时间（秒，时间戳格式）。
         * @example `1606482979000`
         */
        GmtModified: string;
        /**
         * 用户账号ID（UID）。
         * @example `166688437*****`
         */
        UserId: number;
        /**
         * 部署任务实例ID。
         * @example `cas-job-user-***`
         */
        InstanceId: string;
        /**
         * 部署任务名称。
         * @example `job-test`
         */
        Name: string;
        /**
         * 证书类型。
         * - **upload**：上传证书
         * - **buy**：自购证书
         * - **free**：免费证书（仅中国站支持）
         * @example `upload`
         */
        CertType: string;
        /**
         * 任务调度时间。
         * @example `1606482979000`
         */
        ScheduleTime: string;
        /**
         * 部署任务执行开始时间（秒，时间戳格式）。
         * @example `1606482979000`
         */
        StartTime: string;
        /**
         * 部署任务执行结束时间（秒，时间戳格式）。
         * @example `1606482979000`
         */
        EndTime: string;
        /**
         * 部署任务状态。
         * - **pending**：待执行
         * - **editing**：编辑中
         * - **scheduling**：调度中
         * - **processing**：部署中
         * - **error**：部署失败
         * - **success**：部署成功
         * @example `scheduling`
         */
        Status: string;
        /**
         * 删除标识，无实际意义。
         * - **0**：未删除
         * - **1**：已删除
         * @example `1`
         */
        Del: number;
        /**
         * 是否包含回滚任务worker。例如某个任务中的某个云产品执行过回滚，则返回**1**。
         * - **0**：不包含回滚任务worker
         * - **1**：包含回滚任务worker
         * @example `1`
         */
        Rollback: number;
        /**
         * 任务类型。
         * - **cloud**：多云部署任务
         * - **user**：云产品部署任务（不含云服务器）
         * @example `user`
         */
        JobType: string;
        /**
         * 部署任务证书包含的域名。
         * @example `aliyundoc1.com,aliyundoc2.com,aliyundoc3.com`
         */
        CertDomain: string;
        /**
         * 部署任务资源包含云产品。
         * @example `NLB`
         */
        ProductName: string;
    }[];
}
