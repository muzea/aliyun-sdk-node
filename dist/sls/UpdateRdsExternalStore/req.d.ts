export interface UpdateRdsExternalStoreRequest {
    /**
     * project 名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 外部存储名称。
     * @example `test-external-store`
     */
    "externalStoreName": string;
    /**
     * 请求体结构。
     * @example `test-external-store`
     */
    "body": {
        /**
         * 外部存储的名称。
         * @example `rds_store`
         */
        externalStoreName: string;
        /**
         * 存储类型。固定取值为rds-vpc，表示VPC下的RDS MySQL数据库。
         * @example `rds-vpc`
         */
        storeType: string;
        /**
         * 参数结构体。
         */
        parameter: {
            /**
             * RDS MySQL实例所属的VPC ID。
             * @example `vpc-bp1aevy8sofi8mh1q****`
             */
            vpc-id: string;
            /**
             * RDS MySQL实例ID。
             * @example `i-bp1b6c719dfa08exf****`
             */
            instance-id: string;
            /**
             * RDS MySQL实例的内网地址或外网地址。
             * @example `192.168.XX.XX`
             */
            host: string;
            /**
             * RDS MySQL实例的内网或者外网端口。
             * @example `3306`
             */
            port: string;
            /**
             * RDS MySQL实例中的账号名称。
             * @example `root`
             */
            username: string;
            /**
             * RDS MySQL实例中账号对应的密码。
             * @example `sfdsfldsfksfls****`
             */
            password: string;
            /**
             * RDS MySQL实例的数据库名称。
             * @example `meta`
             */
            db: string;
            /**
             * RDS MySQL实例的数据库表名称。
             * @example `join_meta`
             */
            table: string;
            /**
             * RDS MySQL实例所在地域，目前仅支持cn-qingdao、cn-beijing、cn-hangzhou。
             * @example `cn-qingdao`
             */
            region: string;
        };
    };
}
