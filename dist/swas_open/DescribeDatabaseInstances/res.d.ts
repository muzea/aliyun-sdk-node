export interface DescribeDatabaseInstancesResponse {
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4****`
     */
    RequestId: string;
    /**
     * 轻量数据库实例集合信息。
     */
    DatabaseInstances: {
        /**
         * 轻量数据库实例所属的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 轻量数据库实例ID。
         * @example `db-38263fa955774501a2ae1bdaed6f****`
         */
        DatabaseInstanceId: string;
        /**
         * 轻量数据库实例名称。
         * @example `我的数据库`
         */
        DatabaseInstanceName: string;
        /**
         * 轻量数据库实例套餐版本ID。可能值：
         * - swas.db.c1m1s25：35元/月。
         * - swas.db.c1m2s80：100元/月。
         * - swas.db.c2m4s120：200元/月。
         * - swas.db.c2m8s240：300元/月。
         * @example `swas.db.c1m1s25`
         */
        DatabaseInstanceEdition: string;
        /**
         * 数据库版本。可能值：
         * - 5.7：MySQL 5.7。
         * - 8.0：MySQL 8.0。
         * @example `5.7`
         */
        DatabaseVersion: string;
        /**
         * vCPU核数。
         * @example `1`
         */
        Cpu: string;
        /**
         * 内存大小，单位为GB。
         * @example `1`
         */
        Memory: string;
        /**
         * ESSD云盘容量，单位为GB。
         * @example `25`
         */
        Storage: number;
        /**
         * 私网链接地址。
         * @example `rm-bp1d39opj7906****.mysql.rds.aliyuncs.com`
         */
        PrivateConnection: string;
        /**
         * 公网链接地址。
         * > 只有申请开通公网访问地址才显示此参数。您可以调用[AllocatePublicConnection](~~451413~~)申请外网地址。
         * @example `db-38263fa955774501a2ae1bdaed6f****.mysql.rds.aliyuncs.com`
         */
        PublicConnection: string;
        /**
         * 轻量数据库服务实例状态：可能值
         * - Pending: 创建中。
         * - Restarting：重启中。
         * - Running：运行中。
         * - Stopping：停止中。
         * - Stopped：已停止。
         * - UPGRADING：升级中。
         * - DISABLED：已禁用。
         * @example `Running`
         */
        DatabaseInstanceStatus: string;
        /**
         * 业务状态。可能值：
         * - normal: 正常。
         * - expired: 到期。
         * - overdue: 欠费。
         * @example `normal`
         */
        BusinessStatus: string;
        /**
         * 实例创建时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2022-09-01T02:39:46Z`
         */
        CreationTime: string;
        /**
         * 实例到期时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * > +8小时后是控制台上显示的到期时间。
         * @example `2022-10-01T16:00:00Z`
         */
        ExpiredTime: string;
        /**
         * 轻量数据库例的计费方式。目前只支持包年包月的计费方式，取值为PrePaid。
         * 默认值：PrePaid。
         * @example `PrePaid`
         */
        ChargeType: string;
        /**
         * 轻量数据库实例超级账号名称。
         * @example `administrator`
         */
        SuperAccountName: string;
    }[];
    /**
     * 轻量数据库实例列表的当前页码。
     * @example `1`
     */
    PageSize: number;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageNumber: number;
    /**
     * 总条数。
     * @example `5`
     */
    TotalCount: number;
}
