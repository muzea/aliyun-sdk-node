export interface DeleteCasterVideoResourceRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `80787064-1c94-4dc1-85ce-9409960a****`
     */
    "CasterId": string;
    /**
     * 资源ID。如果您通过AddCasterVideoResource接口添加导播台视频资源，请查看AddCasterVideoResource接口调用返回的参数ResourceId值。
     * @example `05ab713c-676e-49c0-96ce-cc408da1****`
     */
    "ResourceId": string;
}
