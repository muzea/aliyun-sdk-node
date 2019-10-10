interface DeleteCasterSceneConfigRequest {
    "RegionId"?: string;
    /**
    * 场景ID。
    * @example `b5f8c837-ceeb-424f-b30b-68e94e864995`
    */ "SceneId": string;
    /**
    * 可取值：
    * - **Component**：清除组件配置
    * - **Layou**：清除布局配置
    * - **All**：清除组件和布局配置
    * @example `Component`
    */ "Type": string;
    "OwnerId"?: number;
    /**
    * 导播台ID。
    * @example `b4810848-bcf9-4aef-bd4a-e6bba2d966c8`
    */ "CasterId": string;
}
export { DeleteCasterSceneConfigRequest };