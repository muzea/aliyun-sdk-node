export interface QueryApplicationStatusResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息 。
     * @example `success`
     */
    Message: string;
    /**
     * 唯一请求ID。
     * @example `D16979DC-4D42-********`
     */
    RequestId: string;
    /**
     * 应用信息。
     */
    AppInfo: {
        EcuList: {
            /**
             * ECU信息。
             */
            Ecu: {
                /**
                 * VPC网络ID。
                 * @example `vpc-wz9b246zg************`
                 */
                VpcId: string;
                /**
                 * 更新时间的时间戳。
                 * @example `1573635952012`
                 */
                UpdateTime: number;
                /**
                 * ECU的内网IP。
                 * @example `172.16.*.**`
                 */
                IpAddr: string;
                /**
                 * 可用CPU。
                 * @example `0`
                 */
                AvailableCpu: number;
                /**
                 * 创建时间的时间戳。
                 * @example `1573626207270`
                 */
                CreateTime: number;
                /**
                 * 关联用户ID。
                 * @example `edas_com***_****@******-*****.***`
                 */
                UserId: string;
                /**
                 * 实例ID。
                 * @example `i-wz9fp1ljg***********`
                 */
                InstanceId: string;
                /**
                 * 所在RegionID。
                 * @example `cn-shen****-*`
                 */
                RegionId: string;
                /**
                 * 这台ECU的唯一标示ID，可以通过在ECS实例上执行`dmidecode`获取。
                 * @example `07bd417a-b863-477d-****-************`
                 */
                EcuId: string;
                /**
                 * 分组ID。
                 * @example `8123db90-880f-486f-****-************`
                 */
                GroupId: string;
                /**
                 * 是否安装了Docker。
                 * @example `false`
                 */
                DockerEnv: boolean;
                /**
                 * 是否在线。
                 * @example `true`
                 */
                Online: boolean;
                /**
                 * 可用内存。
                 * @example `0`
                 */
                AvailableMem: number;
                /**
                 * 所在地域ID。
                 * @example `cn-shen****-*`
                 */
                ZoneId: string;
                /**
                 * 名称。
                 * @example `EDAS-scaled-cluster：默认集群`
                 */
                Name: string;
                /**
                 * 心跳时间的时间戳。
                 * @example `1573635952012`
                 */
                HeartbeatTime: number;
            }[];
        };
        EccList: {
            /**
             * ECC信息。
             */
            Ecc: {
                /**
                 * VPC网络ID。
                 * @example `vpc-wz9b246zg************`
                 */
                VpcId: string;
                /**
                 * 更新时间的时间戳。
                 * @example `1573635952012`
                 */
                UpdateTime: number;
                /**
                 * ECU唯一标识。
                 * @example `07bd417a-b863-477d-****-************`
                 */
                EcuId: string;
                /**
                 * ECC唯一标识。
                 * @example `0cf49a6c-95a8-4aa8-****-************`
                 */
                EccId: string;
                /**
                 * 分组ID。
                 * @example `8123db90-880f-486f-****-************`
                 */
                GroupId: string;
                /**
                 * 应用实例状态：
                 * - 0：AGENT_OFF：Agent下线。
                 * - 1：STOPPED：应用已停止。
                 * - 3：RUNNING\_BUT\_URL\_FAILED：健康检查失败。
                 * - 7：RUNNING：应用运行中。
                 * @example `7`
                 */
                AppState: number;
                /**
                 * 实例上最近的一次任务的任务状态：
                 * - 0：UNKNOWN：未知状态。
                 * - 1：PROCESSING：任务处理中。
                 * - 2：SUCCESS：任务执行成功。
                 * - 3：FAILED：任务执行失败。
                 * @example `3`
                 */
                TaskState: number;
                /**
                 * 创建时间的时间戳。
                 * @example `1573626226691`
                 */
                CreateTime: number;
                /**
                 * 应用ID。
                 * @example `3616cdca-4f92-4413-****-************`
                 */
                AppId: string;
                /**
                 * 容器状态。
                 * @example `“”`
                 */
                ContainerStatus: string;
                /**
                 * ECU的内网IP。
                 * @example `172.16.*.***`
                 */
                Ip: string;
            }[];
        };
        GroupList: {
            /**
             * 分组信息。
             */
            Group: {
                /**
                 * 更新时间的时间戳。
                 * @example `1573627441388`
                 */
                UpdateTime: number;
                /**
                 * 分组名称。
                 * @example `_DEFAULT_GROUP`
                 */
                GroupName: string;
                /**
                 * 分组ID。
                 * @example `8123db90-880f-486f-****-************`
                 */
                GroupId: string;
                /**
                 * 创建时间的时间戳。
                 * @example `1573626155185`
                 */
                CreateTime: number;
                /**
                 * 分组部署记录ID。
                 * @example `changeorder_a**_*******_**`
                 */
                AppVersionId: string;
                /**
                 * 应用ID。
                 * @example `3616cdca-4f92-4413-****-************`
                 */
                AppId: string;
                /**
                 * 分组部署的包ID。
                 * @example `441beb18-da42-44dc-****-************`
                 */
                PackageVersionId: string;
                /**
                 * 表示分组类型：
                 * - 0：表示默认。
                 * - 1：表示用户创建。
                 * - 2：表示灰度分组。
                 * @example `0`
                 */
                GroupType: number;
                /**
                 * 集群ID。
                 * @example `0d247b93-8d62-4e34-****-************`
                 */
                ClusterId: string;
            }[];
        };
        DeployRecordList: {
            /**
             * DeployRecord信息。
             */
            DeployRecord: {
                /**
                 * ECC唯一标识。
                 * @example `0cf49a6c-95a8-4aa8-****-************`
                 */
                EccId: string;
                /**
                 * ECU唯一标识。
                 * @example `07bd417a-b863-477d-****-************`
                 */
                EcuId: string;
                /**
                 * 部署包MD5值。
                 * @example `d0db5bcb442e492104d0f00e10a03dd9`
                 */
                PackageMd5: string;
                /**
                 * 创建时间的时间戳。
                 * @example `1573626226691`
                 */
                CreateTime: number;
                /**
                 * 分组部署的包ID。
                 * @example `441beb18-da42-44dc-****-************`
                 */
                PackageVersionId: string;
                /**
                 * 部署记录ID。
                 * @example `bbc6c0d5-d792-4907-****-************`
                 */
                DeployRecordId: string;
            }[];
        };
        /**
         * 应用基础信息。
         */
        Application: {
            /**
             * 健康检查URL。
             * @example `“”`
             */
            HealthCheckUrl: string;
            /**
             * 应用创建者。
             * @example `edas_com***_****@******-*****.***`
             */
            Owner: string;
            /**
             * 创建时间的时间戳。
             * @example `1573626207270`
             */
            CreateTime: number;
            /**
             * 云账号ID。
             * @example `edas_com***_****@******-*****.***`
             */
            UserId: string;
            /**
             * 应用所占用的端口。
             * @example `8080`
             */
            Port: number;
            /**
             * 运行中的应用实例数。
             * @example `1`
             */
            RunningInstanceCount: number;
            /**
             * 电话。
             * @example `1886666****`
             */
            Phone: string;
            /**
             * 命名空间ID。
             * @example `cn-shenzhen:test`
             */
            RegionId: string;
            /**
             * 容器版本ID。
             * @example `0`
             */
            BuildPackageId: number;
            /**
             * 是否为Docker应用。
             * @example `false`
             */
            Dockerize: boolean;
            /**
             * 电子邮箱地址。
             * @example `1234567@qq.com`
             */
            Email: string;
            /**
             * CPU数。
             * @example `0`
             */
            Cpu: number;
            /**
             * 包含的应用实例数。
             * @example `1`
             */
            InstanceCount: number;
            /**
             * 运行时间的时间戳。
             * @example `0`
             */
            LaunchTime: number;
            /**
             * 内存。
             * @example `0`
             */
            Memory: number;
            /**
             * 应用名称。
             * @example `EDAS-scaled-cluster：默认集群`
             */
            Name: string;
            /**
             * 应用ID。
             * @example `3616cdca-4f92-4413-****-************`
             */
            ApplicationId: string;
            /**
             * 集群ID。
             * @example `0d247b93-8d62-4e34-****-************`
             */
            ClusterId: string;
        };
    };
}
