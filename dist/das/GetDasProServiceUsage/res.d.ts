export interface GetDasProServiceUsageResponse {
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `7172BECE-588A-5961-8126-C216E16B****`
     */
    RequestId: string;
    /**
     * 返回数据。
     * @example `{         "storageFreeQuotaInMB": 5120,         "ip": "rm-2ze8g2am97624****.mysql.****.com",         "custinsId": 12448331,         "userId": "196278346919****",         "uuid": "hdm_b0ae36343407609bf3e8df8709d8****",         "expireTime": 1924963200000,         "instanceId": "rm-2ze8g2am97624****",         "storageUsed": 10773752667393,         "engine": "MySQL",         "instanceAlias": "TESTDB01_PROD",         "port": 3310,         "vpcId": "hdm_****",         "commodityInstanceId": "daspro-****",         "startTime": 1606381940000,         "isSpare": false,         "region": "cn-shanghai",         "serviceUnitId": "5",         "sqlRetention": 30     }`
     */
    Data: {
        /**
         * 赠送的SQL洞察数据存储空间，单位为MB。
         * @example `5120`
         */
        storageFreeQuotaInMB: number;
        /**
         * 数据库实例的地址。
         * @example `rm-2ze8g2am97624****.mysql.****.com`
         */
        ip: string;
        /**
         * 用户ID，即创建数据库实例的阿里云主账号ID。
         * @example `196278346919****`
         */
        userId: string;
        /**
         * 数据库实例企业版到期时间，格式为Unix时间戳，单位为毫秒。
         * @example `1648742400000`
         */
        expireTime: number;
        /**
         * 数据库实例ID。
         * @example `rm-2ze8g2am97624****`
         */
        instanceId: string;
        /**
         * 数据库实例已使用的SQL洞察数据存储空间，单位为Byte。
         * @example `35903498`
         */
        storageUsed: number;
        /**
         * 数据库引擎。
         * @example `MySQL`
         */
        engine: string;
        /**
         * 数据库实例名称。
         * @example `TESTDB01`
         */
        instanceAlias: string;
        /**
         * 端口号。
         * @example `3306`
         */
        port: number;
        /**
         * VPC ID。
         * @example `vpc-2zentqj1sk4qmolci****`
         */
        vpcId: string;
        /**
         * DAS企业版ID。
         * @example `daspro-cn-v0h1l6i****`
         */
        commodityInstanceId: string;
        /**
         * 开启企业版的时间，格式为Unix时间戳，单位为毫秒。
         * @example `1646100892000`
         */
        startTime: number;
        /**
         * 数据库实例的企业版是否过期：
         * - **true**：过期。
         * - **false**：未过期。
         * @example `false`
         */
        isSpare: boolean;
        /**
         * 数据库实例所属的地域。
         * @example `cn-shanghai`
         */
        region: string;
        /**
         * 服务单元ID。
         * @example `4`
         */
        serviceUnitId: string;
        /**
         * SQL洞察数据存储时长，单位为天。
         * @example `180`
         */
        sqlRetention: string;
        /**
         * 旧版SQL洞察和审计迁移到新版的预计剩余时间，单位为毫秒。
         * ><notice>仅当进行旧版SQL洞察和审计迁移到新版操作时，返回此参数。
         * ></notice>
         * @example `60000`
         */
        migrationPredictRemainingTime: number;
    };
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}
