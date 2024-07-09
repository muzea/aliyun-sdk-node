export interface ListDeploymentJobResourceResponse {
    /**
     * 请求接口返回的数据。
     */
    Data: {
        /**
         * 云产品资源ID。
         * @example `20979`
         */
        Id: number;
        /**
         * 同步资源创建时间（秒，时间戳格式）。
         * @example `1673423339000`
         */
        GmtCreate: string;
        /**
         * 同步资源最近一次修改时间（秒，时间戳格式）。
         * @example `1681956830000`
         */
        GmtModified: string;
        /**
         * 云产品。
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
         * @example `SLB`
         */
        CloudProduct: string;
        /**
         * 阿里云账号ID
         * @example `1666884372******`
         */
        UserId: number;
        /**
         * 云产品资源绑定的证书ID。
         * @example `11599949`
         */
        CertId: number;
        /**
         * 云产品资源绑定的证书名称。
         * @example `sc-SSL`
         */
        CertName: string;
        /**
         * 云产品资源绑定证书的结束日期（秒，时间戳格式）。
         * @example `1681956830000`
         */
        CertEndTime: string;
        /**
         * 云产品资源绑定证书的开始日期（秒，时间戳格式）。
         * @example `1681956830000`
         */
        CertStartTime: string;
        /**
         * 云产品资源绑定的域名。
         * @example `aliyundoc.com`
         */
        Domain: string;
        /**
         * 云产品资源实例ID。
         * > 仅部署SLB、NLB、ALB和GA才会返回该参数。
         * @example `cas-cn-m7r1qocw91at`
         */
        InstanceId: string;
        /**
         * 云产品资源监听ID。
         * > 仅部署SLB、NLB、ALB和GA才会返回该参数。
         * @example `lsn-vwdff0q20poq5xazb9@443`
         */
        ListenerId: string;
        /**
         * 云产品资源监听端口。
         * > 仅部署SLB、NLB、ALB和GA才会返回该参数。
         * @example `8047`
         */
        ListenerPort: string;
        /**
         * 云产品资源是否开启HTTPS。
         * - **1**：开启
         * - **0**：未开启
         * @example `1`
         */
        EnableHttps: number;
        /**
         * 云产品资源是否为默认资源。
         * - **1**：默认资源
         * - **0**：非默认资源
         * > 仅部署SLB、NLB、ALB和GA才会返回该参数。
         * @example `0`
         */
        DefaultResource: number;
        /**
         * 云产品资源的其他相关元数据。
         * @example `{\"camera_model\":\"GIFSHOW [1267087617][OnePlus`
         */
        Remark: string;
        /**
         * 同步的云产品资源状态。
         * @example `online`
         */
        Status: string;
        /**
         * 是否使用阿里云SSL证书。
         * - **1**：使用
         * - **0**：未使用
         * > 仅多云部署才会返回该参数。
         * @example `1`
         */
        UseSsl: number;
        /**
         * 同步的云产品资源地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 云产品资源供应商。
         * - **aliyun**：阿里云
         * - **Tencent**：腾讯云
         * @example `aliyun`
         */
        CloudName: string;
        /**
         * 云产品资源在云供应商的地域ID。
         * @example `cn-hangzhou`
         */
        CloudRegion: string;
        /**
         * 云资源集访问的密钥ID。
         * > 仅多云部署才会返回该参数。
         * @example `1234`
         */
        CloudAccessId: string;
    }[];
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `15C66C7B-671A-4297-9187-2C4477247A74`
     */
    RequestId: string;
}
