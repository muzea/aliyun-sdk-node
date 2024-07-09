export interface UpdateCasterSceneConfigRequest {
    /**
     * 组件ID列表，数组内按照由下至上的顺序排列组件。
     * >N表示第几个的意思。例如：<br>ComponentId.1表示第1个组件ID，<br>ComponentId.2表示第2个组件ID。
     * @example `["98778372-c30f-4442-85ba-2e3e4e3d****"]`
     */
    "ComponentId"?: string[];
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `80787064-1c94-4dc1-85ce-9409960a****`
     */
    "CasterId": string;
    /**
     * 场景ID。
     * @example `242b4e2c-c30f-4442-85ba-2e3e4e3d****`
     */
    "SceneId": string;
    /**
     * 布局ID。如果您通过[DescribeCasterLayouts接口](~~60260~~)查询导播台布局列表，请查看DescribeCasterLayouts接口调用返回的参数LayoutId值。
     * @example `eeab74fb-379d-4599-a93d-86d16a05****`
     */
    "LayoutId": string;
}
