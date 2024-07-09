export interface DeleteCasterSceneConfigRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `b4810848-bcf9-4aef-bd4a-e6bba2d9****`
     */
    "CasterId": string;
    /**
     * 场景ID。
     * @example `b5f8c837-ceeb-424f-b30b-68e94e86****`
     */
    "SceneId": string;
    /**
     * 场景配置类型。取值：
     * - **Component**：组件配置。
     * - **Layout**：布局配置。
     * - **All**：组件和布局配置。
     * @example `Component`
     */
    "Type": string;
}
