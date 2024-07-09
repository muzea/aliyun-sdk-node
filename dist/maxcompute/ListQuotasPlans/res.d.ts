export interface ListQuotasPlansResponse {
    /**
     * 请求id。
     * @example `0be3e0bd16661643917136451ebf55`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * Quota计划列表。
         */
        planList: {
            /**
             * Quota计划名称
             * @example `planA`
             */
            name: string;
            /**
             * 创建时间。
             * @example `2022-05-16T06:07:45Z
            `
             */
            createTime: string;
            /**
             * quota详情
             */
            quota: {
                /**
                 * quota ID
                 * @example `0`
                 */
                id: string;
                /**
                 * quota名称
                 * @example `quota_a`
                 */
                name: string;
                /**
                 * quota别名
                 * @example `quota_nickname`
                 */
                nickName: string;
                /**
                 * 对应控制集群的resourceSystemType字段
                 * @example `FUXI_ONLINE`
                 */
                type: string;
                /**
                 * 资源状态
                 * @example `ON`
                 */
                status: string;
                /**
                 * 租户id。
                 * @example `478403690625249`
                 */
                tenantId: string;
                /**
                 * 地域id。
                 * @example `cn-beijing`
                 */
                regionId: string;
                /**
                 * 父资源id。
                 * @example `null`
                 */
                parentId: string;
                /**
                 * 集群id
                 * @example `AT-120N
                `
                 */
                cluster: string;
                /**
                 * 版本。
                 * @example `1`
                 */
                version: string;
                /**
                 * 订单信息
                 */
                billingPolicy: {
                    /**
                     * 订单规格
                     * @example `OdpsStandard `
                     */
                    odpsSpecCode: string;
                    /**
                     * 订单id。
                     * @example `45245678`
                     */
                    orderId: string;
                    /**
                     * 付费模式。
                     * - subscription,表示是预付费quota。
                     * - payasyougo，表示是后付费quota。
                     * @example `subscription`
                     */
                    billingMethod: string;
                };
                /**
                 * 分时信息。
                 */
                scheduleInfo: {
                    /**
                     * 按照调度计划生效的quota计划
                     * @example `planA`
                     */
                    currPlan: string;
                    /**
                     * currPlan被调度的时间
                     * @example `0800
                    `
                     */
                    currTime: string;
                    /**
                     * 按照调度计划将要生效的quota计划
                     * @example `planB`
                     */
                    nextPlan: string;
                    /**
                     * next_plan被调度的时间
                     * @example `1700`
                     */
                    nextTime: string;
                    /**
                     * 如果用户触发了立即生效且不同于curr_plan，那么非空。
                     * @example `planC`
                     */
                    oncePlan: string;
                    /**
                     * 立即生效触发的时间
                     * @example `1500`
                     */
                    onceTime: string;
                    /**
                     * 操作者名称。
                     * @example `userA`
                     */
                    operatorName: string;
                };
                /**
                 * quota的描述信息
                 */
                parameter: any;
                /**
                 * quota的资源标签
                 * @example `abc`
                 */
                tag: string;
                /**
                 * 创建时间。
                 * @example `2022-09-06T02:14:44Z
                `
                 */
                createTime: number;
                /**
                 * 资源创建者，云账号UID。
                 * @example `672863518`
                 */
                creatorId: string;
                /**
                 * 二级quota信息
                 */
                subQuotaInfoList: {
                    /**
                     * 二级quota ID
                     * @example `1000048`
                     */
                    id: string;
                    /**
                     * 二级quota名称
                     * @example `subquotaA`
                     */
                    name: string;
                    /**
                     * 二级quota昵称
                     * @example `subquotaA`
                     */
                    nickName: string;
                    /**
                     * 对应控制集群的resourceSystemType字段
                     * @example `FUXI_ONLINE`
                     */
                    type: string;
                    /**
                     * 资源状态
                     * @example `ON`
                     */
                    status: string;
                    /**
                     * 租户id。
                     * @example `478403690625249`
                     */
                    tenantId: string;
                    /**
                     * 地域id。
                     * @example `cn-beijing`
                     */
                    regionId: string;
                    /**
                     * 父资源id。
                     * @example `0`
                     */
                    parentId: string;
                    /**
                     * 集群id
                     * @example `AT-120N
                    `
                     */
                    cluster: string;
                    /**
                     * 版本号
                     * @example `1`
                     */
                    version: string;
                    /**
                     * 订单信息
                     */
                    billingPolicy: {
                        /**
                         * 订单规格
                         * @example `OdpsStandard `
                         */
                        odpsSpecCode: string;
                        /**
                         * 订单ID
                         * @example `45245678`
                         */
                        orderId: string;
                        /**
                         * 付费模式。
                         * - subscription,表示是预付费quota。
                         * - payasyougo，表示是后付费quota。
                         * @example `subscription
                        `
                         */
                        billingMethod: string;
                    };
                    /**
                     * 分时信息
                     */
                    scheduleInfo: {
                        /**
                         * 按照调度计划生效的quota计划
                         * @example `planA`
                         */
                        currPlan: string;
                        /**
                         * currPlan被调度的时间
                         * @example `0800`
                         */
                        currTime: string;
                        /**
                         * 按照调度计划将要生效的quota计划
                         * @example `planB`
                         */
                        nextPlan: string;
                        /**
                         * next_plan被调度的时间
                         * @example `1700`
                         */
                        nextTime: string;
                        /**
                         * 如果用户触发了立即生效且不同于curr_plan，那么非空。
                         * @example `planC`
                         */
                        oncePlan: string;
                        /**
                         * 立即生效触发的时间
                         * @example `1500`
                         */
                        onceTime: string;
                        /**
                         * 操作者名称。
                         * @example `userA`
                         */
                        operatorName: string;
                    };
                    /**
                     * quota的描述信息
                     */
                    parameter: any;
                    /**
                     * quota的资源标签
                     * @example `abc`
                     */
                    tag: string;
                    /**
                     * 创建时间。
                     * @example `2022-09-06T02:14:44Z
                    `
                     */
                    createTime: number;
                    /**
                     * 资源创建者，云账号UID。
                     * @example `672863518`
                     */
                    creatorId: string;
                }[];
            };
        }[];
    };
}
