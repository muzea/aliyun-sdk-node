export interface CopyCasterSceneConfigRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
    /**
     * 原场景ID，仅限于PVM场景。
     * @example `f1a361f4-bee3-436d-ae6e-d38e6943****`
     */
    "FromSceneId": string;
    /**
     * 目标场景ID，仅限于PGM场景。
     * @example `05ab713c-676e-49c0-96ce-cc408da1****`
     */
    "ToSceneId": string;
}
