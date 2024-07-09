export interface ListScaleOutEcuResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `AF860D6C-ACE3-4429-9D54-3BD15A******`
     */
    RequestId: string;
    EcuInfoList: {
        /**
         * ECU列表。
         */
        EcuInfo: {
            /**
             * ECU所在的VPC ID。
             * @example `vpc-2zef6ob8**********`
             */
            VpcId: string;
            /**
             * 最后变更时间的时间戳。
             * @example `1573281040827`
             */
            UpdateTime: number;
            /**
             * ECU的私网IP。
             * @example `192.168.XX.XX`
             */
            IpAddr: string;
            /**
             * ECU的可用CPU核数。
             * @example `2`
             */
            AvailableCpu: number;
            /**
             * 创建时间的时间戳。
             * @example `1573281040819`
             */
            CreateTime: number;
            /**
             * 主账号ID。
             * @example `1172****6608****`
             */
            UserId: string;
            /**
             * ECU实例ID。
             * @example `i-2zej4i2jdf*********`
             */
            InstanceId: string;
            /**
             * ECU所在地域ID。
             * @example `cn-beijing`
             */
            RegionId: string;
            /**
             * 这台ECU的唯一标识ID，可以通过在ECS上执行`dmidecode`获取。
             * @example `0de2ebdb-9490-4fc4-be41***************`
             */
            EcuId: string;
            /**
             * 是否在线，且实例当前是否受EDAS管控：
             * - true：在线。
             * - false：不在线。
             * @example `true`
             */
            Online: boolean;
            /**
             * 是否安装了Docker：
             * - true：已安装Docker。
             * - false：未安装Docker。
             * @example `false`
             */
            DockerEnv: boolean;
            /**
             * ECU的可用内存数，单位MB。
             * @example `111`
             */
            AvailableMem: number;
            /**
             * ECU所在可用区。
             * @example `cn-beijing-h`
             */
            ZoneId: string;
            /**
             * ECU名称。
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
