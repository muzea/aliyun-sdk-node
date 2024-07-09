export interface DescribeDrdsRdsInstancesResponse {
    /**
     * 请求ID。
     * @example `123DB16B-02F2-45F7-A571-843991******`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    DbInstances: {
        /**
         * 存储层私有定制RDS实例信息详情。
         */
        DbInstance: {
            /**
             * 存储层私有定制RDS实例的CPU核数。
             * @example `8`
             */
            DBInstanceCPU: string;
            /**
             * 存储层私有定制RDS实例的内存，单位：M。
             * @example `8192`
             */
            DBInstanceMemory: number;
            /**
             * 存储层私有定制RDS实例的付费方式，取值范围如下：
             * * Postpaid：按量付费（即后付费）
             * * Prepaid：包年包月（即预付费）
             * @example `PostPaid`
             */
            PayType: string;
            /**
             * 存储层私有定制RDS实例的状态，取值范围如下：
             * * 0：创建中
             * * 1：运行中
             * * 3：删除中
             * * 5：重启中
             * * 6：升降级中
             * * 7：备份中
             * * 8：内外网切换中
             * * 9：迁移中
             * * 11：迁移数据中
             * * 12：生成灾备实例中
             * * 13：数据导入中
             * * 14：从其他RDS实例导入数据中
             * * 15：容灾切换中
             * * 16：创建临时实例中
             * * 17：网络创建中
             * * 18：实例克隆中
             * * 19：链路切换中
             * * 20：只读实例迁移中
             * @example `1`
             */
            DBInstanceStatus: string;
            /**
             * 存储层私有定制RDS实例的网络类型，固定为VPC（专有网络）。
             * @example `VPC`
             */
            NetworkType: string;
            /**
             * 内网连接端口。
             * @example `3306`
             */
            Port: number;
            /**
             * 存储层私有定制RDS实例的引擎版本号，固定为8.0。
             * @example `8.0`
             */
            EngineVersion: string;
            /**
             * 资源ID。
             * @example `dm-*************`
             */
            DmInstanceId: string;
            /**
             * 存储层私有定制RDS实例的存储空间，单位：GB。
             * @example `20`
             */
            DBInstanceStorage: number;
            /**
             * 存储层私有定制RDS实例的内网连接地址。
             * @example `rm-***************.mysql.rds.aliyuncs.com`
             */
            ConnectUrl: string;
            /**
             * 目标存储层私有定制RDS实例的读写权重。
             * @example `0`
             */
            ReadWeight: number;
            /**
             * 存储层私有定制RDS实例的类型，取值范围如下：
             * * Primary：主实例
             * * Readonly：只读实例
             * @example `Primary`
             */
            RdsInstType: string;
            /**
             * 实例规格族，取值范围如下：
             * * **x**：通用型
             * * **d**：独享套餐
             * * **h**：独占物理机
             * @example `x`
             */
            DBInstanceClassType: string;
            /**
             * 存储层私有定制RDS实例ID。
             * @example `rm-*****************`
             */
            DBInstanceId: string;
            /**
             * 存储层私有定制RDS实例的引擎类型，固定为MySQL。
             * @example `MySQL`
             */
            Engine: string;
            /**
             * 存储层实例类型，固定为RDS。
             * @example `RDS`
             */
            DbInstType: string;
            /**
             * RDS的锁定状态，取值范围：0|1|2|3|4|5
             *  0，正常
             * 1，手动触发锁
             * 2，实例过期自动锁定
             * 3，实例回滚前的自动锁定
             * 4，实例空间满自动锁定
             * 5，只读实例空间满自动锁定
             * @example `1`
             */
            LockMode: number;
            /**
             * RDS锁定的原因
             * @example `手动触发锁`
             */
            LockReason: string;
        }[];
    };
}
