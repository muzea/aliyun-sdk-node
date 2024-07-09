export interface QueryHostInstanceConsoleInfoResponse {
    /**
     * 请求ID。
     * @example `D6E068C3-25BC-455A-85FE-45F0B22ECB1F`
     */
    RequestId: string;
    /**
     * 实例信息列表。
     */
    HostInstanceConsoleInfos: {
        /**
         * 实例状态描述。
         * @example `RUNNING`
         */
        Status: string;
        /**
         * 上弹连接数。
         * @example `1300`
         */
        MaxConnIncreaseRatioValue: number;
        /**
         * 实例规格内存，单位为GB。
         * @example `16`
         */
        MemSize: number;
        /**
         * 实例存储空间，单位为GB。
         * @example `500`
         */
        DiskSize: number;
        /**
         * 实例所在主机IP。
         * @example `172.22.XX.XX`
         */
        Ip: string;
        /**
         * 主机端口。
         * @example `3443`
         */
        Port: string;
        /**
         * 数据库版本。
         * @example `5.8`
         */
        EngineVersion: string;
        /**
         * 上弹内存配置。
         * @example `64`
         */
        MemoryIncreaseRatioValue: number;
        /**
         * 上弹CPU配置。
         * @example `16`
         */
        CpuIncreaseRatioValue: number;
        /**
         * 实例ID。
         * @example `rm-bp1m5z8002gyj****`
         */
        DBInstanceId: string;
        /**
         * 数据库类型。
         * @example `mysql`
         */
        Engine: string;
        /**
         * 实例规格描述。
         * @example `mysql.z2.medium.2`
         */
        LevelName: string;
        /**
         * 实例角色。
         * @example `master`
         */
        Role: string;
        /**
         * 实例描述。
         * @example `rm-bp1m5z8002gyj****`
         */
        DBInstanceDescription: string;
        /**
         * 实例规格CPU，单位为核。
         * @example `8`
         */
        CpuCores: number;
        /**
         * 实例所在主机性能信息。
         */
        PerfInfo: {
            /**
             * 实例所在主机物理IO。
             * @example `30`
             */
            PerfIdbPio: number;
            /**
             * 实例所在主机磁盘空间，单位为GB。
             * @example `1000`
             */
            DiskCurr: number;
            /**
             * 实例所在主机内存大小，单位为GB。
             * @example `64`
             */
            MemRatio: number;
            /**
             * 实例所在主机CPU大小，单位为核。
             * @example `16`
             */
            CpuRatio: number;
        };
    }[];
}
