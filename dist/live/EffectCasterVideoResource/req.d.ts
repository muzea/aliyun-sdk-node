interface EffectCasterVideoResourceRequest {
    "RegionId"?: string;
    /**
    * 场景ID。
    * @example `05ab713c-676e-49c0-96ce-cc408da1b314`
    */ "SceneId": string;
    /**
    * 资源ID。
    * @example `f096e8d6-0319-4c96-82bc-ecbc79cfac0d`
    */ "ResourceId": string;
    "OwnerId"?: number;
    /**
    * 导播台ID。
    * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
    */ "CasterId": string;
}
export { EffectCasterVideoResourceRequest };