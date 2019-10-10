interface DescribeCasterSceneAudioRequest {
    /**
    * 地域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 场景ID。
    * @example `97df6b7f-3490-47d2-ac50-883390876576`
    */ "SceneId": string;
    "OwnerId"?: number;
    /**
    * 导播台ID。
    * @example `97df6b7f-3490-47d2-ac50-883387654365`
    */ "CasterId": string;
}
export { DescribeCasterSceneAudioRequest };