export interface QueryHostBaseInfoByInstanceResponse {
    /**
     * 请求ID。
     * @example `D6E068C3-25BC-455A-85FE-45F0B22E12CV`
     */
    RequestId: string;
    /**
     * 主机上实例信息概览。
     */
    HostInstanceConsoleInfos: {
        /**
         * 实例所在主机专有网络ID 。
         * @example `vpc-bp1ov7as4yvz4kxei****`
         */
        VpcId: string;
        /**
         * 实例状态描述。
         * @example `RUNNING`
         */
        Status: string;
        /**
         * 实例到期时间。
         * @example `2021.07.20`
         */
        ExpiredTime: string;
        /**
         * 实例规格描述。
         * @example `rds.ebmr6.26xlarge`
         */
        ClusterName: string;
        /**
         * 实例所在主机IP地址。
         * @example ` 172.22.0.***`
         */
        Ip: string;
        /**
         * 实例所在主机名称。
         * @example `ch-bp1fgj3kt7fsb****`
         */
        HostName: string;
        /**
         * 数据库类型。
         * @example `mysql`
         */
        Engine: string;
        /**
         * 实例角色。
         * @example `master`
         */
        Role: string;
        /**
         * 实例所在主机端口。
         * @example `3443`
         */
        Port: string;
        /**
         * 数据库版本。
         * @example `5.7`
         */
        EngineVersion: string;
    }[];
}
