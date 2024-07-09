export interface ListEcuByRegionResponse {
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
     * 请求ID。
     * @example `00000000-0000-0000-****`
     */
    RequestId: string;
    EcuEntityList: {
        /**
         * ECU列表。
         */
        EcuEntity: {
            /**
             * ECU所在的VPC ID。
             * @example `vpc-2zew8mi6gqbo5wf****`
             */
            VpcId: string;
            /**
             * 最后变更时间的时间戳。
             * @example `1572867895575`
             */
            UpdateTime: number;
            /**
             * ECU的私网IP。
             * @example `192.168.xxx.xxx`
             */
            IpAddr: string;
            /**
             * ECU的可用CPU核数。
             * @example `4`
             */
            AvailableCpu: number;
            /**
             * 创建时间的时间戳。
             * @example `1572539283168`
             */
            CreateTime: number;
            /**
             * 主账号ID。
             * @example `edas@aliyun-****.com`
             */
            UserId: string;
            /**
             * ECU ID。
             * @example `i-2ze82h8f4zcn449y****`
             */
            InstanceId: string;
            /**
             * 总内存，单位MB。
             * @example `0`
             */
            Mem: number;
            /**
             * ECU所在地域ID。
             * @example `cn-beijing`
             */
            RegionId: string;
            /**
             * 这台ECU的唯一标示ID，可以在ECS上执行`dmidecode`获取。
             * @example `c96c494c-1b91-4456-bbb3-b5afcd16****`
             */
            EcuId: string;
            /**
             * CPU总核数。
             * @example `0`
             */
            Cpu: number;
            /**
             * 是否安装了Docker：
             * - true：已安装Docker。
             * - false：未安装Docker。
             * @example `true`
             */
            DockerEnv: boolean;
            /**
             * 是否在线：
             * - true：在线。
             * - false：不在线。
             * @example `false`
             */
            Online: boolean;
            /**
             * ECU的可用内存数，单位MB。
             * @example `8192`
             */
            AvailableMem: number;
            /**
             * ECU所在可用区ID。
             * @example `cn-beijing-a`
             */
            ZoneId: string;
            /**
             * ECU名称。
             * @example `worker-k8s-for`
             */
            Name: string;
            /**
             * 上一次心跳检测的时间戳。
             * @example `1572867865221`
             */
            HeartbeatTime: number;
        }[];
    };
}
