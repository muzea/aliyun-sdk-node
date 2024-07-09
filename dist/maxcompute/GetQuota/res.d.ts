export interface GetQuotaResponse {
    /**
     * 订单信息
     */
    billingPolicy: {
        /**
         * 付费模式。
         * - subscription,表示是预付费quota。
         * - payasyougo，表示是后付费quota。
         * @example `subscription
        `
         */
        billingMethod: string;
        /**
         * 订单规格
         * @example `OdpsStandard`
         */
        odpsSpecCode: string;
        /**
         * 订单id。
         * @example `45245678`
         */
        orderId: string;
    };
    /**
     * 描述了MaxCompute quota 对象的标识，这个标识与阿里云售卖账单中的标识是一致的。实际使用与标签场景下。
     */
    saleTag: {
        /**
         * maxcompute quota 对象的标识，这个标识在阿里云售卖子系统内也存在。通过这个标识，可以把quota 对象的费用都关联到某个标签上。
         */
        resourceIds: string[];
        /**
         * 对象的类型，目前仅支持quota 和 project 两种类型。
         * @example `"quota"`
         */
        resourceType: string;
    };
    /**
     * 集群id。
     * @example `AT-120N`
     */
    cluster: string;
    /**
     * 资源的创建时间
     * @example `2022-09-06T02:14:44Z
    `
     */
    createTime: number;
    /**
     * 资源创建者，云账号UID。
     * @example `672863518
    `
     */
    creatorId: string;
    /**
     * 请求id。
     * @example `0b87b7a316654730544735643e9200`
     */
    requestId: string;
    /**
     * quota ID
     * @example `0`
     */
    id: string;
    /**
     * quota名称
     * @example `quota_a
    `
     */
    name: string;
    /**
     * quota别名
     * @example `quota_nickname`
     */
    nickName: string;
    /**
     * quota的描述信息
     * @example `{"minCU":10,
    "adhocCU":0,
    "maxCU":10,
    "schedulerType":"Fair",
    }`
     */
    parameter: any;
    /**
     * 父资源id。
     * @example `null`
     */
    parentId: string;
    /**
     * 地域id
     * @example `cn-beijing`
     */
    regionId: string;
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
         * 立即生效的quota计划。
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
         * 操作人名称。
         * @example `userA`
         */
        operatorName: string;
        /**
         * 时区
         * @example `UTC+8`
         */
        timezone: string;
    };
    /**
     * 资源状态
     * @example `ON`
     */
    status: string;
    /**
     * 二级quota信息
     */
    subQuotaInfoList: {
        /**
         * 订单信息
         */
        billingPolicy: {
            /**
             * 付费模式。
             * - subscription,表示是预付费quota。
             * - payasyougo，表示是后付费quota。
             * @example `subscription`
             */
            billingMethod: string;
            /**
             * 订单规格
             * @example `OdpsStandard
            `
             */
            odpsSpecCode: string;
            /**
             * 订单id。
             * @example `45245678
            `
             */
            orderId: string;
        };
        /**
         * 描述了MaxCompute quota 对象的标识，这个标识与阿里云售卖账单中的标识是一致的。实际使用与标签场景下。
         */
        saleTag: {
            /**
             * maxcompute quota 对象的标识，这个标识在阿里云售卖子系统内也存在。通过这个标识，可以把quota 对象的费用都关联到某个标签上。
             */
            resourceIds: string[];
            /**
             * 对象的类型，目前仅支持quota 和 project 两种类型。
             * @example `"quota"`
             */
            resourceType: string;
        };
        /**
         * 集群id。
         * @example `AT-120N
        `
         */
        cluster: string;
        /**
         * 资源创建时间
         * @example `2022-09-06T02:14:44Z
        `
         */
        createTime: number;
        /**
         * 资源创建者，云账号UID。
         * @example `672863518
        `
         */
        creatorId: string;
        /**
         * 二级quota ID
         * @example `1000048
        `
         */
        id: string;
        /**
         * 二级quota名称
         * @example `subquotaA
        `
         */
        name: string;
        /**
         * 二级quota别名
         * @example `subquotaA
        `
         */
        nickName: string;
        /**
         * quota的描述信息
         * @example `{"minCU":10,
        "adhocCU":0,
        "maxCU":10,
        "schedulerType":"Fair",
        }`
         */
        parameter: any;
        /**
         * 父资源id。
         * @example `0`
         */
        parentId: string;
        /**
         * 地域id
         * @example `cn-beijing`
         */
        regionId: string;
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
             * 立即生效的quota计划。
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
             * 操作人名称。
             * @example `userA
            `
             */
            operatorName: string;
            /**
             * 时区
             * @example `UTC+8`
             */
            timezone: string;
        };
        /**
         * 资源状态
         * @example `ON
        `
         */
        status: string;
        /**
         * quota的资源标签
         * @example `abc`
         */
        tag: string;
        /**
         * 租户id。
         * @example `478403690625249`
         */
        tenantId: string;
        /**
         * 对应控制集群的resourceSystemType字段
         * @example `FUXI_ONLINE`
         */
        type: string;
        /**
         * 版本号
         * @example `1`
         */
        version: string;
    }[];
    /**
     * quota的资源标签
     * @example `abc`
     */
    tag: string;
    /**
     * 租户id。
     * @example `478403690625249`
     */
    tenantId: string;
    /**
     * 对应控制集群的resourceSystemType字段
     * @example `FUXI_ONLINE`
     */
    type: string;
    /**
     * 版本号。
     * @example `1`
     */
    version: string;
    /**
     * 返回数据。
     */
    data: {
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
         * Quota别名
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
         * 描述了MaxCompute quota 对象的标识，这个标识与阿里云售卖账单中的标识是一致的。实际使用与标签场景下。
         */
        saleTag: {
            /**
             * maxcompute quota 对象的标识，这个标识在阿里云售卖子系统内也存在。通过这个标识，可以把quota 对象的费用都关联到某个标签上。
             */
            resourceIds: string[];
            /**
             * 对象的类型，目前仅支持quota 和 project 两种类型。
             * @example `"quota"
            `
             */
            resourceType: string;
        };
        /**
         * 租户id。
         * @example `478403690625249`
         */
        tenantId: string;
        /**
         * 地域id
         * @example `cn-beijing`
         */
        regionId: string;
        /**
         * 父资源id。
         * @example `null`
         */
        parentId: string;
        /**
         * 集群id。
         * @example `AT-120N`
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
             * @example `OdpsStandard`
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
             * 立即生效的quota计划。
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
             * 操作人名称。
             * @example `userA`
             */
            operatorName: string;
            /**
             * 时区
             * @example `UTC+8`
             */
            timezone: string;
        };
        /**
         * quota的描述信息
         * @example `{"minCU":10,
        "adhocCU":0,
        "maxCU":10,
        "schedulerType":"Fair",
        }`
         */
        parameter: any;
        /**
         * quota的资源标签
         * @example `abc`
         */
        tag: string;
        /**
         * 资源创建时间
         * @example `2022-09-06T02:14:44Z`
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
             * 描述了MaxCompute quota 对象的标识，这个标识与阿里云售卖账单中的标识是一致的。实际使用与标签场景下。
             */
            saleTag: {
                /**
                 * maxcompute quota 对象的标识，这个标识在阿里云售卖子系统内也存在。通过这个标识，可以把quota 对象的费用都关联到某个标签上。
                 */
                resourceIds: string[];
                /**
                 * 对象的类型，目前仅支持quota 和 project 两种类型。
                 * @example `"quota"
                `
                 */
                resourceType: string;
            };
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
             * @example `478403690625249
            `
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
             * 版本号。
             * @example `1`
             */
            version: string;
            /**
             * 订单信息
             */
            billingPolicy: {
                /**
                 * 订单规格
                 * @example `OdpsStandard`
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
                 * 立即生效的quota计划。
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
                 * 操作人名称。
                 * @example `userA`
                 */
                operatorName: string;
                /**
                 * 时区
                 * @example `UTC+8`
                 */
                timezone: string;
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
             * 资源创建时间
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
}
