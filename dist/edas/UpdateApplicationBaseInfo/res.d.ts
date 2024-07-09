export interface UpdateApplicationBaseInfoResponse {
    /**
     * code码。
     * @example `200`
     */
    Code: number;
    /**
     * 信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `D16979DC-4D42-**************`
     */
    RequestId: string;
    /**
     * 应用列表。
     */
    Applcation: {
        /**
         * 公网SLB实例的IP。
         * @example `39.97.XX.XX`
         */
        ExtSlbIp: string;
        /**
         * 应用负责人。
         * @example `test@aliyun_XXX.com`
         */
        Owner: string;
        /**
         * 私网SLB端口。
         * @example `80`
         */
        SlbPort: number;
        /**
         * 公网SLB名称。
         * @example `test`
         */
        ExtSlbName: string;
        /**
         * 创建时间的时间戳。
         * @example `1577259573911`
         */
        CreateTime: number;
        /**
         * 云账号ID。
         * @example `edas_com***@****.***`
         */
        UserId: string;
        /**
         * 应用所占用的端口。
         * @example `8080`
         */
        Port: number;
        /**
         * 正在运行的应用实例数量。
         * @example `1`
         */
        RunningInstanceCount: number;
        /**
         * 私网SLB IP。
         * @example `192.168.XX.XX`
         */
        SlbIp: string;
        /**
         * 是否为Docker应用。
         * @example `false`
         */
        Dockerize: boolean;
        /**
         * 应用描述。
         * @example `test`
         */
        Description: string;
        /**
         * 包含实例数。
         * @example `1`
         */
        InstanceCount: number;
        /**
         * 应用ID。
         * @example `c627c157-560d-43ff-****-************`
         */
        AppId: string;
        /**
         * 配置的应用实例内存大小，单位为M。
         * @example `0`
         */
        Memory: number;
        /**
         * 应用名称。
         * @example `test`
         */
        Name: string;
        /**
         * 集群ID。
         * @example `d7730a49-629a-47bd-****-f45eb01f****`
         */
        ClusterId: string;
        /**
         * 私网SLB实例的ID。
         * @example `a3d4*******`
         */
        SlbId: string;
        /**
         * 健康检查URL。
         * @example `http://127.0.XX.XX:8080/_etc.html`
         */
        HealthCheckUrl: string;
        /**
         * 应用部署类型：
         * - War代表WAR包部署。
         * - FatJar代表JAR包部署。
         * - Image代表镜像部署。
         * - 空代表未部署。
         * @example `FatJar`
         */
        ApplicationType: string;
        /**
         * 公网SLB实例的ID。
         * @example `ace93*******`
         */
        ExtSlbId: string;
        /**
         * 地域ID。
         * @example `cn-beijing:****`
         */
        RegionId: string;
        /**
         * 容器版本ID。
         * @example `58`
         */
        BuildPackageId: number;
        /**
         * CPU核数。
         * @example `0`
         */
        Cpu: number;
        /**
         * 应用集群环境类型：
         * - 0：普通Docker集群。
         * - 1：Swarm集群。
         * - 2：ECS集群。
         * - 3：EDAS自带K8s集群。
         * - 4：Pandora自动注册应用集群类型。
         * - 5：容器服务K8s集群。
         * @example `2`
         */
        ClusterType: number;
        /**
         * 私网SLB名称。
         * @example `test`
         */
        SlbName: string;
    };
}
