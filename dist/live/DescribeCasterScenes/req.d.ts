interface DescribeCasterScenesRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 导播台ID。
    * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
    */ "CasterId": string;
    /**
    * 场景ID。
    * @example `b5f8c837-ceeb-424f-b30b-68e94e864995`
    */ "SceneId"?: string;
}
export { DescribeCasterScenesRequest };