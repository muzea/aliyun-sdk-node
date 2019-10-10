interface UpdateCasterSceneAudioRequest {
    /**
    * 地域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 场景ID。
    * @example `a2b8e671-2fe5-4642-a2ec-bf93880e19876`
    */ "SceneId": string;
    "OwnerId"?: number;
    /**
    * 导播台ID。
    * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
    */ "CasterId": string;
    /**
    * 是否启用音频跟随。 默认启用音频跟随，为空则保持最近一次配置不变。
    * - **0**：混音模式，
    * - **1**：音频跟随视频模式
    * @example `1`
    */ "FollowEnable"?: number;
    "AudioLayer"?: string[];
    "MixList"?: string[];
}
export { UpdateCasterSceneAudioRequest };