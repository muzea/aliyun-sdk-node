interface AddCasterLayoutRequest {
    /**
    * 区域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    "VideoLayer": string[];
    "AudioLayer": string[];
    "BlendList": string[];
    "MixList": string[];
    "OwnerId"?: number;
    /**
    * 导播台ID。
    * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
    */ "CasterId": string;
}
export { AddCasterLayoutRequest };