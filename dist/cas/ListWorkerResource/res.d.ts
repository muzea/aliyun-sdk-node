export interface ListWorkerResourceResponse {
    /**
     * 查询到的符合条件的总数。
     * @example `8`
     */
    Total: number;
    /**
     * 分页，当前页，默认1。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 分页查询时，每页展示的任务个数。默认值为**50**。
     * @example `50`
     */
    ShowSize: number;
    /**
     * 请求接口返回的数据。
     */
    Data: {
        /**
         * Worker任务ID。
         * @example `22487`
         */
        Id: number;
        /**
         * Worker任务创建时间（秒，时间戳格式）。
         * @example `1680228896000`
         */
        GmtCreate: string;
        /**
         * Worker任务最后修订时间（秒，时间戳格式）。
         * @example `1681956830000`
         */
        GmtModified: string;
        /**
         * Worker任务所归属的阿里云账号ID。
         * @example `166688437******`
         */
        UserId: number;
        /**
         * Worker所属的部署任务ID（JobId）
         * @example `8888`
         */
        JobId: number;
        /**
         * Worker任务订单ID，与证书订单ID一致。
         * > 返回CertId，则该参数不返回。
         * @example `9349278`
         */
        OrderId: number;
        /**
         * Worker任务对应的证书ID，与证书ID一致。
         * @example `12073663`
         */
        CertId: number;
        /**
         * Worker任务对应的证书域名。
         * @example `www.example.com`
         */
        CertDomain: string;
        /**
         * Worker任务证书实例ID。
         * @example `lsn-jzk2h0xz5dmynuphb8@1883`
         */
        CertInstanceId: string;
        /**
         * Worker任务对应的证书名称。
         * @example `testCertName`
         */
        CertName: string;
        /**
         * Worker任务对应的云产品资源ID。
         * @example `1286999`
         */
        ResourceId: number;
        /**
         * Worker任务中云资源所属云产品。
         * - **CDN**：内容分发网络（仅中国站）
         * - **SLB**：传统型负载均衡CLB（仅中国站）
         * - **DCDN**：全站加速（仅中国站）
         * - **DDOS**：DDos防护（仅中国站）
         * - **LIVE**：视频直播（仅中国站）
         * - **webHosting**：云虚拟主机（仅中国站）
         * - **VOD**：视频点播（仅中国站）
         * - **CR**：容器镜像服务（仅中国站）
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
         * @example `SLB`
         */
        CloudProduct: string;
        /**
         * Worker任务云产品资源原绑定证书ID。
         * @example `123`
         */
        ResourceCertId: number;
        /**
         * Worker任务云产品资源原绑定域名。
         * @example `www.example.com`
         */
        ResourceDomain: string;
        /**
         * Worker任务云产品资源的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * Worker任务云产品资源原始地域ID（云厂商的RegionID）。仅多云部署会返回。
         * @example `cn-hangzhou`
         */
        CloudRegion: string;
        /**
         * Worker任务云产品中的资源实例ID。
         * > 仅部署SLB、NLB、ALB和GA才会返回该参数。
         * @example `cas-cn-0pp118nuu40b`
         */
        InstanceId: string;
        /**
         * Worker任务云产品中资源的监听ID。
         * > 仅部署SLB、NLB、ALB和GA才会返回该参数。
         * @example `lsn-lhl8y7s1e1ngc3m3zz@81`
         */
        ListenerId: string;
        /**
         * Worker任务云产品中资源的监听端口。
         * > 仅部署SLB、NLB、ALB和GA才会返回该参数。
         * @example `4431`
         */
        Port: number;
        /**
         * Worker任务云产品资源是否为”默认资源“。
         * - **true**：默认资源
         * - **false**：非默认资源
         * > 仅部署SLB、NLB、ALB和GA才会返回该参数。
         * @example `true`
         */
        DefaultResource: boolean;
        /**
         * Worker任务云产品资源所属云厂商。
         * > 部署至阿里云的云产品默认不返回该参数。
         * @example `aliyun`
         */
        CloudName: string;
        /**
         * Serverless应用引擎命名空间ID。仅部署Serverless应用引擎返回。
         * @example `32fed52a-4bf7-44f6-955f-e82ada68ef18`
         */
        NamespaceId: string;
        /**
         * 部署任务Worker状态。
         * - **editing**：编辑中
         * - **pending**：待部署
         * - **scheduling**：调度中
         * - **processing**：部署中
         * - **error**：部署失败
         * - **success**：部署成功
         * - **rollback**：回滚中
         * - **rollback_success**：回滚成功
         * - **rollback_error**：回滚失败
         * @example `editing`
         */
        Status: string;
    }[];
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3E50D480-9765-5CFD-9650-9BACCECA5135`
     */
    RequestId: string;
}
