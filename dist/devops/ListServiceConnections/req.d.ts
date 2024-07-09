export interface ListServiceConnectionsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 服务连接类型
     * - aliyun_code 阿里云代码
     * -  Codeup Codeup
     * -  Gitee 码云
     * -  github Github
     * - ack 容器服务Kubernetes（ACK）
     * -  docker_register_aliyun 容器镜像服务（ACR）
     *  - ecs ecs主机
     * -  edas 企业级分布式应用（EDAS）
     * - emas 移动研发平台（EMAS）
     * -  fc 阿里云函数计算（FC）
     * - kubernetes 自建k8s集群
     * -  oss 对象存储（OSS）
     * - PACKAGES 制品仓库
     * -  ros 资源编排服务（ROS）
     * - sae Serverless应用引擎（SAE）
     * @example `codeup`
     */
    "sericeConnectionType": string;
}
