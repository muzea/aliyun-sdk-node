export interface GetProjectResponse {
    /**
     * 请求id
     * @example `0b87b7b316643495896551555e855b`
     */
    requestId: string;
    /**
     * 业务成功与否。如果非空且不是200，那么表示业务处理失败。
     * @example `200`
     */
    httpCode: number;
    /**
     * 错误码
     * @example `040002`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `error message.`
     */
    errorMsg: string;
    /**
     * 返回数据
     */
    data: {
        /**
         * 项目名称
         * @example `odps_project`
         */
        name: string;
        /**
         * 项目owner
         * @example `1565950907343451`
         */
        owner: string;
        /**
         * 项目类型。
         * 取值：
         * -**managed**：内部项目。
         * -**external**：外部项目。
         * @example `managed`
         */
        type: string;
        /**
         * 备注
         * @example `maxcompute项目`
         */
        comment: string;
        /**
         * 默认计算quota
         * @example `quota_a`
         */
        defaultQuota: string;
        /**
         * 项目状态。
         * 取值：
         * -**AVAILABLE**：正常
         * -**READONLY**：只读
         * -**FROZEN**：冻结
         * -**DELETING**：删除中
         * @example `AVAILABLE`
         */
        status: string;
        /**
         * 计费模式
         * @example `PayAsYouGo`
         */
        productType: string;
        /**
         * 当前project是否支持三层模型
         * @example `true`
         */
        threeTierModel: boolean;
        /**
         * 存储量
         * @example `16489027`
         */
        costStorage: string;
        /**
         * 区域ID
         * @example `cn-beijing`
         */
        regionId: string;
        /**
         * 创建时间
         * @example `1704380838000
        `
         */
        createdTime: number;
        /**
         * 项目属性
         */
        properties: {
            /**
             * 项目时区
             * @example `Asia/Shanghai`
             */
            timezone: string;
            /**
             * 备份数据保留天数
             * @example `1`
             */
            retentionDays: number;
            /**
             * 是否允许全表扫描。
             * @example `false`
             */
            allowFullScan: boolean;
            /**
             * 数据类型版本。
             * 取值：
             * -**1**：1.0版本
             * -**2**：2.0版本
             * -**hive**：hive兼容类型
             * @example `2.0`
             */
            typeSystem: string;
            /**
             * 是否开启decimal 2.0
             * @example `true`
             */
            enableDecimal2: boolean;
            /**
             * sql消费限制
             * @example `1500`
             */
            sqlMeteringMax: string;
            /**
             * 表的生命周期。
             */
            tableLifecycle: {
                /**
                 * 生命周期类型。
                 * 取值：
                 * -**mandatory**：Lifecycle子句为必选设置，用户必须设置表的生命周期。
                 * -**optional**：创建表时，Lifecycle子句为可选设置，如果不设置表的生命周期，则该表永远有效。
                 * -**inherit**：创建表时，如果不设置表的生命周期，则该表的生命周期为odps.table.lifecycle.value的值。
                 * @example `optional`
                 */
                type: string;
                /**
                 * 生命周期天数。
                 * @example `37231`
                 */
                value: string;
            };
            /**
             * 存储加密信息
             */
            encryption: {
                /**
                 * 是否启用加密，取值：-true-false
                 * @example `true`
                 */
                enable: boolean;
                /**
                 * 加密算法名称
                 * @example `SHA1`
                 */
                algorithm: string;
                /**
                 * 算法密钥名称
                 * @example `dafault`
                 */
                key: string;
            };
            /**
             * tunnel Quota名称
             * @example `Quota`
             */
            tunnelQuota: string;
            /**
             * 无需关注
             * @example `无需关注`
             */
            elderTunnelQuota: string;
            /**
             * 是否允许tunnel quota路由
             * @example `true`
             */
            enableTunnelQuotaRoute: boolean;
            /**
             * 分层存储信息
             */
            storageTierInfo: {
                /**
                 * 分层存储
                 */
                storageTierSize: {
                    /**
                     * 标准存储
                     * @example `27649172`
                     */
                    standardSize: number;
                    /**
                     * 长期存储
                     * @example `21764917`
                     */
                    longTermSize: number;
                    /**
                     * 低频存储
                     * @example `767693`
                     */
                    lowFrequencySize: number;
                };
                /**
                 * 总存储
                 * @example `56066037`
                 */
                projectTotalSize: number;
                /**
                 * 备份存储
                 * @example `86672917`
                 */
                projectBackupSize: number;
            };
            /**
             * fdc quota
             */
            fdcQuota: string;
            /**
             * 是否强制开启fdc缓存
             */
            enableFdcCacheForce: boolean;
            enableTieredStorage: boolean;
            tableLifecycleConfig: {
                TierToLongterm: {
                    DaysAfterLastModificationGreaterThan: number;
                    DaysAfterLastAccessGreaterThan: number;
                    DaysAfterLastTierModificationGreaterThan: number;
                };
                TierToLowFrequency: {
                    DaysAfterLastModificationGreaterThan: number;
                    DaysAfterLastAccessGreaterThan: number;
                    DaysAfterLastTierModificationGreaterThan: number;
                };
            };
        };
        /**
         * superadmin角色成员
         */
        superAdmins: string[];
        /**
         * 权限属性
         */
        securityProperties: {
            /**
             * 是否使用acl权限
             * @example `true`
             */
            usingAcl: boolean;
            /**
             * 是否使用Policy授权
             * @example `true`
             */
            usingPolicy: boolean;
            /**
             * 是否允许对象创建者操作对象
             * @example `true`
             */
            objectCreatorHasAccessPermission: boolean;
            /**
             * 是否允许对象创建者授权对象
             * @example `true`
             */
            objectCreatorHasGrantPermission: boolean;
            /**
             * 是否启动Label访问控制
             * @example `false`
             */
            labelSecurity: boolean;
            /**
             * 是否开启Download权限
             * @example `false`
             */
            enableDownloadPrivilege: boolean;
            /**
             * 是否开启项目空间数据保护
             */
            projectProtection: {
                /**
                 * ExceptionPolicy。项目所有者需要提前规划Exception Policy，允许指定用户将指定对象的数据流出至指定项目，所有符合Exception Policy中描述的情形都可以打破数据保护机制。
                 * @example `    {
                    "Version": "1",
                    "Statement":
                    [{
                        "Effect":"Allow",
                        "Principal":"<Principal>",
                        "Action":["odps:<Action1>[, <Action2>, ...]"],
                        "Resource":"acs:odps:*:<Resource>",
                        "Condition":{
                            "StringEquals": {
                                "odps:TaskType":["<Tasktype>"]
                            }
                        }
                    }]
                    }`
                 */
                exceptionPolicy: string;
                /**
                 * 是否开启项目空间数据保护
                 * @example `true`
                 */
                protected: boolean;
            };
        };
        /**
         * ip白名单
         */
        ipWhiteList: {
            /**
             * ip白名单
             * @example `10.88.111.3`
             */
            ipList: string;
            /**
             * vpcip白名单列表
             * @example `10.88.111.3`
             */
            vpcIpList: string;
        };
        /**
         * 标签
         */
        saleTag: {
            /**
             * 资源ID
             * @example `project_name`
             */
            resourceId: string;
            /**
             * 资源类型
             * @example `project`
             */
            resourceType: string;
        };
    };
}
