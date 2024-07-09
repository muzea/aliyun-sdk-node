export interface PlayChoosenShowRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**路径查看导播台名称。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
    /**
     * 需要播放切换的节目ID。
     * >通过查看[AddShowIntoShowList](~~370861~~)或[DescribeShowList](~~377459~~)接口的返回参数获取ShowId值。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    "ShowId": string;
}
