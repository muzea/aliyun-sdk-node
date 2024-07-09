export interface QueryMigrateEcuListResponse {
    /**
     * 接口状态或POP错误码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `b197-40ab-9155-7ca7`
     */
    RequestId: string;
    EcuEntityList: {
        /**
         * 可供迁移的实例列表
         */
        EcuEntity: {
            /**
             * VPC ID
             * @example `vpc-2zef6ob8m************`
             */
            VpcId: string;
            /**
             * 更新时间的时间戳
             * @example `1573281041109`
             */
            UpdateTime: number;
            /**
             * ECU的私网IP
             * @example `192.168.0.150`
             */
            IpAddr: string;
            /**
             * 可用CPU，单位为核数。
             * @example `2`
             */
            AvailableCpu: number;
            /**
             * 创建时间的时间戳
             * @example `1573281041101`
             */
            CreateTime: number;
            /**
             * 主账号ID
             * @example `edas_com***_****@******-*****.***`
             */
            UserId: string;
            /**
             * 实例ID
             * @example `i-2zej4i2jd***********`
             */
            InstanceId: string;
            /**
             * 总内存
             * @example `0`
             */
            Mem: number;
            /**
             * 所在地域ID
             * @example `cn-beijing`
             */
            RegionId: string;
            /**
             * 这台ECU的唯一标识ID，可以通过在ECS上执行`dmidecode`获取。
             * @example `70ed3f59-b476-49aa-****-************`
             */
            EcuId: string;
            /**
             * CPU限制配额，单位为核数。0表示不限制。
             * @example `0`
             */
            Cpu: number;
            /**
             * 是否安装了Docker：
             * - true：已安装Docker
             * - false：未安装Docker
             * @example `false`
             */
            DockerEnv: boolean;
            /**
             * 是否在线。
             * - true：在线
             * - false：不在线
             * @example `true`
             */
            Online: boolean;
            /**
             * 可用内存，单位为MB。
             * @example `2048`
             */
            AvailableMem: number;
            /**
             * 可用区ID
             * @example `cn-bei****-*`
             */
            ZoneId: string;
            /**
             * 实例名称
             * @example `product_test003`
             */
            Name: string;
            /**
             * 心跳时间的时间戳
             * @example `1573281041101`
             */
            HeartbeatTime: number;
        }[];
    };
}
