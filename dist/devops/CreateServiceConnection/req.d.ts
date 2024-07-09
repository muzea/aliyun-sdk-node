export interface CreateServiceConnectionRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如  https:// devops.aliyun.com/organization/【OrgId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 服务连接类型
         * @example `ecs     云服务器(ECS)
        ack     容器服务Kubernetes(ACK)
        oss     对象存储(OSS)
        edas   企业级分布式应用(EDAS)
        sae     Serverless应用引擎(SAE)
        ros      资源编排服务(ROS)
        fc        阿里云函数计算(FC)
        emas  移动研发平台(EMAS)
        customGitlab  自建Gitlab
        git       通用Git
        gitlab  Gitlab
        bitbucket  Bitbucket
        docker_register_aliyun  容器镜像服务(ACR)
        ess       弹性伸缩(ESS)`
         */
        connectionType: string;
        /**
         * 服务连接名称
         * @example `ecs连接`
         */
        connectionName: string;
        /**
         * 服务授权id
         * @example `111`
         */
        serviceAuthId: number;
        /**
         * 可见范围：如PERSON，GLOBAL，CUSTOM
         * @example `PERSON  （私有）
        GLOBAL   （公开）
        CUSTOM  （自定义）`
         */
        scope: string;
        /**
         * 服务授权类型
         * @example `CREDENTIAL  （服务证书）
        AUTHENTICATION  （服务授权）`
         */
        authType: string;
    };
}
