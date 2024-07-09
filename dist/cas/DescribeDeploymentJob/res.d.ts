export interface DescribeDeploymentJobResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `15C66C7B-671A-4297-9187-2C4477247A74`
     */
    RequestId: string;
    /**
     * 部署任务ID。
     * @example `43222`
     */
    Id: number;
    /**
     * 部署任务创建时间（秒，时间戳格式）。
     * @example `1679541809000`
     */
    GmtCreate: string;
    /**
     * 部署任务上次修订时间（秒，时间戳格式）。
     * @example `1679541809000`
     */
    GmtModified: string;
    /**
     * 部署任务创建人的阿里云账号ID。
     * @example `166688437******`
     */
    UserId: number;
    /**
     * 部署任务实例ID。
     * @example `14dcc8afc7578e1f`
     */
    InstanceId: string;
    /**
     * 部署任务名称。
     * @example `auto-test-AXX`
     */
    Name: string;
    /**
     * 证书类型。
     * - **upload**：上传证书
     * - **buy**：自购证书
     * - **free**：免费证书（仅中国站支持）
     * @example `buy`
     */
    CertType: string;
    /**
     * 部署任务计划调度时间（秒，时间戳格式）。
     * @example `1678083209335`
     */
    ScheduleTime: string;
    /**
     * 部署任务执行的开始时间（秒，时间戳格式）。
     * @example `1679541809000`
     */
    StartTime: string;
    /**
     * 部署任务执行的结束时间（秒，时间戳格式）。
     * @example `1679541809000`
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
     * @example `editing`
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
     * 是否包含回滚任务worker。例如某个部署任务中的某个云产品执行过回滚，则返回**1**。
     * - **0**：不包含回滚任务worker
     * - **1**：包含回滚任务worker
     * @example `1`
     */
    Rollback: number;
    /**
     * 任务类型。
     * - **cloud**：多云部署任务
     * - **trustee**：托管部署任务（仅中国站）
     * - **user**：云产品部署任务（不含云服务器）
     * @example `user`
     */
    JobType: string;
    /**
     * 部署任务证书包含域名（多个）。
     * @example `example.aliyundoc.com,demo.aliyundoc.com`
     */
    CertDomain: string;
    /**
     * 部署任务资源包含云产品（多个）。
     * @example `CDN`
     */
    ProductName: string;
    /**
     * 部署任务配置。
     * @example `{\"shareCertIds\":[],\"certIds\":[12342649,12304338,12067351,9957285]}`
     */
    Config: string;
    /**
     * 联系人信息。
     */
    CasContacts: {
        /**
         * 联系人ID。
         * @example `3304`
         */
        Id: string;
        /**
         * 联系人姓名。
         * @example `张先生`
         */
        Name: string;
        /**
         * 指定的手机号码。
         * @example `139****0000`
         */
        Mobile: string;
        /**
         * 联系人邮箱。
         * @example `username@example.com`
         */
        Email: string;
    }[];
}
