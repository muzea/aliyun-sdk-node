export interface PushMeteringDataRequest {
    /**
     * 示例中的参数说明如下：
     * - InstanceId：云市场实例ID 。参数类型为String。
     * - StartTime：计量开始时间。单位秒（格式为Unix时间戳）。参数类型为Long。
     * - EndTime：计量结束时间。单位秒（格式为Unix时间戳）。参数类型为Long。
     * - Entities：计量实体对象。参数类型为List<Map>。
     *     - Key：计量项属性名称。参数类型为String。
     *         - Frequency：使用次数（次）。
     *         - Period：使用小时时长（秒）。
     *      <props="china">注意：请求参数中的时长单位为秒，而计费单位为小时，因此计费时会转换为小时，如推送19:00-20:00的用量1800，计费价格为1元/小时，按小时出账该时段费用为1800 / 3600 x 1 = 0.5元, 费用如为小数，保留两位小数，超过两位舍弃。</props>
     *      <props="intl">注意：请求参数中的时长单位为秒，而计费单位为小时，因此计费时会转换为小时，如推送19:00-20:00的用量1800，计费价格为1美元/小时，按小时出账该时段费用为1800/3600 x 1 = 0.5美元, 费用如为小数，保留两位小数，超过两位舍弃。</props>
     *         - Storage：使用存储空间（Byte）。
     *          <props="china">注意：请求参数中的单位为Byte，而计费单位为MB，因此计费时会转换为MB，如推送19:00-20:00的用量524288，计费价格为1元/MB，按小时出账该时段费用为524288 / 1024 / 1024 x 1 = 0.5元，费用如为小数，保留两位小数，超过两位舍弃。</props>
     *          <props="intl">注意：请求参数中的单位为Byte，而计费单位为MB，因此计费时会转换为MB，如推送19:00-20:00的用量524288，计费价格为1美元/MB，按小时出账该时段费用为524288 / 1024 / 1024 x 1 = 0.5美元，费用如为小数，保留两位小数，超过两位舍弃。</props>
     *         - NetworkOut：上行使用流量（Bit）。
     *         <props="china">注意：请求参数中的单位为Bit，而计费单位为Mb，因此计费时会转换为Mb，如推送19:00-20:00的用量524288，计费价格为1元/Mb，按小时出账该时段费用为524288 / 1024 / 1024 x 1 = 0.5元，费用如为小数，保留两位小数，超过两位舍弃。</props>
     *          <props="intl">注意：请求参数中的单位为Bit，而计费单位为Mb，因此计费时会转换为Mb，如推送19:00-20:00的用量524288，计费价格为1美元/Mb，按小时出账该时段费用为524288 / 1024 / 1024 x 1 = 0.5美元，费用如为小数，保留两位小数，超过两位舍弃。</props>
     *         - NetworkIn：下行使用流量（Bit）。
     *         <props="china">注意：请求参数中的单位为Bit，而计费单位为Mb，因此计费时会转换为Mb，如推送19:00-20:00的用量524288，计费价格为1元/Mb，按小时出账该时段费用为524288 / 1024 / 1024 x 1 = 0.5元，费用如为小数，保留两位小数，超过两位舍弃。</props>
     *         <props="intl">注意：请求参数中的单位为Bit，而计费单位为Mb，因此计费时会转换为Mb，如推送19:00-20:00的用量524288，计费价格为1美元/Mb，按小时出账该时段费用为524288 / 1024 / 1024 x 1 = 0.5美元，费用如为小数，保留两位小数，超过两位舍弃。</props>
     *         - Character：字符数（个）。
     *         - DailyActiveUser：日活跃用户数（DAU）。
     *         - PeriodMin：使用分钟时长（分钟）。
     *         - VirtualCpu：虚拟CPU核数。
     *     - Value：计量数值（取值 >= 0）。参数类型为Integer。
     * **说明**：
     * - 如果商品设置为实时出账，StartTime和 EndTime为任意时间宽度均可以，但是EndTime一定要大于StartTime 。
     * - 如果商品设置为非实时出账（即选择按小时、按天、按月等），StartTime和EndTime 的间隔必须大于5分钟。
     * - 批量推送计量数据时，“InstanceId”属性必须为同一个商品所产生的实例，目前不支持多个商品的实例同时推送。
     * @example `[{"StartTime":1711527396,"EndTime":1711527397,"Entities":[{"Key":"Unit","Value":"0"}]}]`
     */
    "Metering": string;
    /**
     * 服务实例ID。
     * @example `si-0e6fca6a51a54420****`
     */
    "ServiceInstanceId": string;
}
