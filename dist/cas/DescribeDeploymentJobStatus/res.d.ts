export interface DescribeDeploymentJobStatusResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D`
     */
    RequestId: string;
    /**
     * 部署资源总数。
     * @example `4127`
     */
    ResourceCount: number;
    /**
     * 已使用的部署资源总数。
     * @example `300`
     */
    UseCount: number;
    /**
     * 购买的部署资源总数。
     * @example `500`
     */
    BuyCount: number;
    /**
     * 当前云产品部署的证书的资源总数，即Worker任务总数。
     * @example `20`
     */
    WorkerCount: number;
    /**
     * 匹配证书的Worker任务总数。
     * @example `20`
     */
    MatchWorkerCount: number;
    /**
     * Worker任务部署（不含回滚任务）成功数。
     * @example `20`
     */
    SuccessCount: number;
    /**
     * Worker任务部署（不含回滚任务）失败数。
     * @example `20`
     */
    FailedCount: number;
    /**
     * Worker任务回滚任务数。
     * @example `20`
     */
    RollbackCount: number;
    /**
     * Worker任务回滚成功数。
     * @example `20`
     */
    RollbackSuccessCount: number;
    /**
     * Worker任务回滚失败数。
     * @example `20`
     */
    RollbackFailedCount: number;
    /**
     * Worker任务消耗的部署资源数。
     * @example `20`
     */
    CostCount: number;
    /**
     * 部署任务涉及的证书数量。
     * @example `20`
     */
    CertCount: number;
    /**
     * 部署任务中已部署的云产品资源数（Worker）统计。
     */
    ProductWorkerCount: {
        /**
         * 云产品名称。
         * - **SLB**：传统型负载均衡CLB（仅中国站）
         * - **LIVE**：视频直播（仅中国站）
         * - **webHosting**：云虚拟主机（仅中国站）
         * - **VOD**：视频点播（仅中国站）
         * - **CR**：容器镜像服务（仅中国站）
         * - **DCDN**：全站加速
         * - **DDOS**：DDos防护
         * - **CDN**：内容分发网络
         * - **ALB**：应用负载均衡
         * - **APIGateway**：API网关
         * - **FC**：函数计算
         * - **GA**：全球加速
         * - **MSE**：微服务引擎
         * - **NLB**：网络型负载均衡
         * - **OSS**：对象存储
         * - **SAE**：Serverless 应用引擎
         * - **TencentCDN**：腾讯CDN
         * - **WAF**：Web应用防火墙
         * @example `NLB`
         */
        ProductName: string;
        /**
         * 部署任务下的某个云产品的资源总数。
         * @example `2`
         */
        Count: number;
    }[];
}
