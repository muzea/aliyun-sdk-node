export interface CopyCasterRequest {
    /**
     * 新导播台名称。
     * @example `caster001`
     */
    "CasterName": string;
    /**
     * 原导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**路径查看导播台名称。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    "SrcCasterId": string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `53200b81-b761-4c10-842a-a0726d97****`
     */
    "ClientToken": string;
}
