export interface DescribeHostEcsLevelInfoResponse {
    /**
     * 请求ID。
     * @example `395858E2-2A82-4ED7-BB93-2DB60119EF4C`
     */
    RequestId: string;
    /**
     * ECS主机信息列表。
     */
    HostEcsLevelInfos: {
        /**
         * 主机类型 ，取值：
         * - **general**: 通用型。
         * - **compute**: 计算型。
         * - **ram**: 内存型。
         * - **dragon**: 弹性裸金属服务器（神龙）。
         * @example `ram`
         */
        CddcHostType: string;
        /**
         * 主机规格详情。
         */
        Items: {
            /**
             * 内网带宽，单位为Gbps。
             * @example `10`
             */
            NetBandWidth: number;
            /**
             * 规格族。
             * @example `通用型 g6`
             */
            EcsClass: string;
            /**
             * RDS规格。
             * @example `mssql.cluster.host.g2xlarge	`
             */
            RdsClassCode: string;
            /**
             * 主机CPU。
             * @example `24`
             */
            Cpu: number;
            /**
             * 处理器频率，单位为GHz。
             * @example `2.5 GHz/3.2 GHz`
             */
            CpuFrequency: string;
            /**
             * 存储IOPS ，单位为万。
             * @example `5`
             */
            StorageIops: number;
            /**
             * 云盘带宽，单位为Gbit/s。
             * @example `4`
             */
            CloudStorageBandwidth: number;
            /**
             * ECS规格。
             * @example `ecs.g6.2xlarge	`
             */
            EcsClassCode: string;
            /**
             * 是否为云盘。
             * @example `1`
             */
            IsCloudDisk: number;
            /**
             * 内存大小，单位为GB。
             * @example `192`
             */
            Memory: number;
            /**
             * 内网收发包，单位为万PPS。
             * @example `150`
             */
            NetPackage: number;
            /**
             * 处理器型号。
             * @example `Intel Xeon(Cascade Lake) Platinum 8269CY	`
             */
            CpuVersion: string;
            /**
             * 本地存储。
             * @example `7`
             */
            LocalStorage: string;
            /**
             * 主机的名称。
             * @example `testxxx`
             */
            Description: string;
        }[];
    }[];
}
