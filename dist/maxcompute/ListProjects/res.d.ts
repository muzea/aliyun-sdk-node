export interface ListProjectsResponse {
    /**
     * 请求ID。
     * @example `0b16399216671970335563173e2340`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 项目描述。
         */
        projects: {
            /**
             * 项目名称。
             * @example `odps_project`
             */
            name: string;
            /**
             * 项目owner。
             * @example `113981577560****`
             */
            owner: string;
            /**
             * 项目类型。
             * 取值：
             * -managed：内部项目。
             * -external：外部项目。
             * @example `managed`
             */
            type: string;
            /**
             * 备注
             * @example `MaxCompute项目
            `
             */
            comment: string;
            /**
             * 默认计算quota
             * @example `quotaA`
             */
            defaultQuota: string;
            /**
             * 项目状态。
             * 取值：
             * -AVAILABLE：正常
             * -READONLY：只读
             * -FROZEN：冻结
             * -DELETING：删除中
             * @example `AVAILABLE`
             */
            status: string;
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
             * @example `1704380838000`
             */
            createdTime: number;
            /**
             * 项目属性。
             */
            properties: {
                /**
                 * 时区。
                 * @example `Asia/Shanghai
                `
                 */
                timezone: string;
                /**
                 * 备份数据保留天数。
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
                 * -1：1.0版本
                 * -2：2.0版本
                 * -hive：hive兼容类型
                 * @example `2`
                 */
                typeSystem: string;
                /**
                 * 是否开启decimal 2.0。
                 * @example `true`
                 */
                enableDecimal2: boolean;
                /**
                 * sql消费限制。
                 * @example `1500`
                 */
                sqlMeteringMax: string;
                /**
                 * 表生命周期。
                 */
                tableLifecycle: {
                    /**
                     * 生命周期类型。
                     * 取值：
                     * -mandatory：Lifecycle子句为必选设置，用户必须设置表的生命周期。
                     * -optional：创建表时，Lifecycle子句为可选设置，如果不设置表的生命周期，则该表永远有效。
                     * -inherit：创建表时，如果不设置表的生命周期，则该表的生命周期为odps.table.lifecycle.value的值。
                     * @example `optional`
                     */
                    type: string;
                    /**
                     * 生命周期天数。
                     * @example `37231
                    `
                     */
                    value: string;
                };
                /**
                 * 存储加密信息。
                 */
                encryption: {
                    /**
                     * 是否启用加密，取值：-true-false。
                     * @example `true`
                     */
                    enable: boolean;
                    /**
                     * 加密算法名称。
                     * @example `SHA1`
                     */
                    algorithm: string;
                    /**
                     * 算法密钥名称。
                     * @example `dafault`
                     */
                    key: string;
                };
                /**
                 * tunnel Quota名称。
                 * @example `quota_tunnel`
                 */
                tunnelQuota: string;
                /**
                 * 是否开启tunnelQuota路由。
                 * @example `true`
                 */
                enableTunnelQuotaRoute: boolean;
            };
            /**
             * 权限属性。
             */
            securityProperties: {
                /**
                 * 是否使用acl。
                 * @example `true`
                 */
                usingAcl: boolean;
                /**
                 * 是否使用Policy授权。
                 * @example `true`
                 */
                usingPolicy: boolean;
                /**
                 * 是否允许对象创建者操作对象。
                 * @example `true`
                 */
                objectCreatorHasAccessPermission: boolean;
                /**
                 * 是否允许对象创建者授权对象。
                 * @example `true`
                 */
                objectCreatorHasGrantPermission: boolean;
                /**
                 * 是否启动Label访问控制。
                 * @example `false`
                 */
                labelSecurity: boolean;
                /**
                 * 是否开启Download权限。
                 * @example `false`
                 */
                enableDownloadPrivilege: boolean;
                /**
                 * 是否开启项目空间数据保护。
                 */
                projectProtection: {
                    /**
                     * 是否开启项目空间数据保护。
                     * @example `true`
                     */
                    protected: boolean;
                    /**
                     * ExceptionPolicy。项目所有者需要提前规划Exception Policy，允许指定用户将指定对象的数据流出至指定项目，所有符合Exception Policy中描述的情形都可以打破数据保护机制。
                     * @example `{
                          "Version": "1",
                          "Statement": [
                                {
                                      "Effect": "Allow",
                                      "Principal": "",
                                      "Action": [
                                            "odps:[, , ...]"
                                      ],
                                      "Resource": "acs:odps:*:",
                                      "Condition": {
                                            "StringEquals": {
                                                  "odps:TaskType": [
                                                        ""
                                                  ]
                                            }
                                      }
                                }
                          ]
                    }`
                     */
                    exceptionPolicy: string;
                };
            };
            /**
             * IP白名单
             */
            ipWhiteList: {
                /**
                 * IP白名单列表
                 * @example `10.88.111.3`
                 */
                ipList: string;
                /**
                 * VPCID白名单列表
                 * @example `10.88.111.3`
                 */
                vpcIpList: string;
            };
            /**
             * 描述了MaxCompute quota 对象的标识，这个标识与阿里云售卖账单中的标识是一致的。实际使用与标签场景下。
             */
            saleTag: {
                /**
                 * 描述了MaxCompute quota 对象的标识，这个标识与阿里云售卖账单中的标识是一致的。实际使用与标签场景下。
                 * @example `"aaaa-bbbb"`
                 */
                resourceId: string;
                /**
                 * 对象的类型，目前仅支持quota 和 project 两种类型。
                 * @example `"project"`
                 */
                resourceType: string;
            };
            /**
             * 标签。
             */
            Tags: {
                /**
                 * 标签值。
                 * @example `acceptance test`
                 */
                TagValue: string;
                /**
                 * 标签键。
                 * @example `Department`
                 */
                TagKey: string;
            }[];
            /**
             * 当前project是否支持三层模型
             * @example `true`
             */
            threeTierModel: boolean;
        }[];
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。
         * @example `cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==`
         */
        marker: string;
        /**
         * 每页返回的最大结果数。
         * @example `10`
         */
        maxItem: number;
        /**
         * 分页标识，当前接口仅支持连续翻页。返回值nextToken 非空代表还有剩余数据。把nextToken 作为参数继续查询会获得下一页。
         * @example `AAAAAV3MpHK1AP0pfERHZN5pu6kvikyUl3ChyRxN+qLPvtOb`
         */
        NextToken: string;
    };
}
