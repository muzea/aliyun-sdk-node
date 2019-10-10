interface CopyCasterSceneConfigRequest {
    /**
    * 区域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 原场景ID，仅限于PVM场景。
    * @example `f1a361f4-bee3-436d-ae6e-d38e69437666`
    */ "FromSceneId": string;
    /**
    * 目标场景ID，仅限于PGM场景。
    * @example `05ab713c-676e-49c0-96ce-cc408da1b314`
    */ "ToSceneId": string;
    "OwnerId"?: number;
    /**
    * 导播台ID。
    * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
    */ "CasterId": string;
}
export { CopyCasterSceneConfigRequest };