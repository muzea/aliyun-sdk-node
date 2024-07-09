export interface EffectCasterUrgentRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `80787064-1c94-4dc1-85ce-9409960a****`
     */
    "CasterId": string;
    /**
     * 场景ID，PGM场景时有效。
     * @example `242b4e2c-c30f-4442-85ba-2e3e4e3d****`
     */
    "SceneId": string;
}
