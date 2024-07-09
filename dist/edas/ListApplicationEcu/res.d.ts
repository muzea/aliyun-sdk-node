export interface ListApplicationEcuResponse {
    /**
     * 接口状态或POP错误码。
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
     * @example `b197-40ab-9155-7ca7`
     */
    RequestId: string;
    EcuInfoList: {
        /**
         * ECU信息列表。
         */
        EcuEntity: {
            /**
             * VPC ID。
             * @example `vpc-2zef6ob8**********`
             */
            VpcId: string;
            /**
             * 更新时间的时间戳。
             * @example `1599803995894`
             */
            UpdateTime: number;
            /**
             * ECU的内网IP。
             * @example `192.168.XXX.XXX`
             */
            IpAddr: string;
            /**
             * 可用CPU数量。
             * @example `1`
             */
            AvailableCpu: number;
            /**
             * 创建时间的时间戳。
             * @example `1542692376066`
             */
            CreateTime: number;
            /**
             * 关联用户的UID。
             * @example `****_common_****@aliyun.com`
             */
            UserId: string;
            /**
             * 实例ID。
             * @example `i-2zej4i2jdf*********`
             */
            InstanceId: string;
            /**
             * 总内存，单位MB。
             * @example `500`
             */
            Mem: number;
            /**
             * 所在地域。
             * @example `cn-beijing`
             */
            RegionId: string;
            /**
             * 这台ECU的唯一标示ID，可以通过在ECS上执行`dmidecode`命令获取。
             * @example `0de2ebdb-9490-4fc4-be41***************`
             */
            EcuId: string;
            /**
             * CPU总核数。
             * @example `1`
             */
            Cpu: number;
            /**
             * 应用ID。
             * @example `e809****-43d7-4c6b-8e01-b0d9d1db****`
             */
            AppId: string;
            /**
             * 是否安装了Docker：
             * - true：已安装。
             * - false：未安装。
             * @example `true`
             */
            DockerEnv: boolean;
            /**
             * 是否在线：
             * - true：在线。
             * - false：不在线。
             * @example `true`
             */
            Online: boolean;
            /**
             * 可用内存，单位MB。
             * @example `200`
             */
            AvailableMem: number;
            /**
             * 所在可用区ID。
             * @example `cn-beijing-h`
             */
            ZoneId: string;
            /**
             * 名称。
             * @example `test`
             */
            Name: string;
            /**
             * 上一次心跳检测的时间戳。
             * @example `1573281040819`
             */
            HeartbeatTime: number;
        }[];
    };
}
