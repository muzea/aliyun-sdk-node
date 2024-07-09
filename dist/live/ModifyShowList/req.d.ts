export interface ModifyShowListRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**路径查看导播台名称。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
    /**
     * 需要被修改顺序的节目ID。
     * >通过查看[AddShowIntoShowList](~~370861~~)或[DescribeShowList](~~377459~~)接口的返回参数获取ShowId值。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    "ShowId"?: string;
    /**
     * 节目单整体播放的循环次数。
     * >- RepeatTimes为重复次数，示例：**0**表示重复**0**次（实际播放**1**次），**1**表示重复**1**次（实际播放**2**次），以此类推。
     * - 另外，取值为**-1**时，表示可无限重复。
     * @example `5`
     */
    "RepeatTimes"?: number;
    /**
     * 播放列表的位置。将需要被修改顺序的节目ID放到**Spot**的位置。
     * >取值需大于等于0且小于等于当前节目单总数值。
     * @example `1`
     */
    "Spot"?: number;
    /**
     * 最高优先级节目。
     * > 此配置只能在节目单未开始启动前设置。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    "HighPriorityShowId"?: string;
    /**
     * 最高优先级节目播放时间，格式为：_yyyy-MM-dd'T'HH:mm:ss_。
     * > 此配置只能在节目单未开始启动前设置。<br>配置完成，节目单会在最高优先级播放时间进行切播，开始播放最高优先级节目（从当前正在播放的节目切播到最高级优先节目）。
     * @example `2021-11-23T12:30:00`
     */
    "HighPriorityShowStartTime"?: string;
}
