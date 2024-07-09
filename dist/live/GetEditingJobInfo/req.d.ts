export interface GetEditingJobInfoRequest {
    /**
     * 需要查询的导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `53200b81-b761-4c10-842a-a0726d97****`
     */
    "CasterId": string;
    /**
     * 需要查询的节目ID。
     * >通过查看[AddShowIntoShowList](~~370861~~)接口的返回参数获取ShowId值。
     * @example `72200b81-b761-4c10-842a-a0726d97****`
     */
    "ShowId"?: string;
}
