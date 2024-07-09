export interface RemoveShowFromShowListRequest {
    /**
     * 需要删除的节目ID组。
     */
    "showIdList"?: string[];
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**路径查看导播台名称。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
    /**
     * 节目ID。
     * >通过查看[AddShowIntoShowList](~~370861~~)接口的返回参数获取ShowId值。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    "ShowId"?: string;
    /**
     * 是否批量删除节目。取值：
     * - true：批量删除。
     * - false：单个删除。
     * >该参数不填，取值为空时，也表示单个删除。
     * @example `false`
     */
    "isBatchMode"?: boolean;
}
