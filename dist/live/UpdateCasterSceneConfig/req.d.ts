interface UpdateCasterSceneConfigRequest {
    /**
    * 地域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 场景ID。
    * @example `242b4e2c-c30f-4442-85ba-2e3e4e3dec1b`
    */ "SceneId": string;
    /**
    * 布局ID。
    * @example `eeab74fb-379d-4599-a93d-86d16a05f92d`
    */ "LayoutId": string;
    "OwnerId"?: number;
    /**
    * 导播台ID。
    * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
    */ "CasterId": string;
    "ComponentId"?: string[];
}
export { UpdateCasterSceneConfigRequest };