export interface GetWatermarkRequest {
    /**
     * 需要查询的图文水印模板ID，仅支持传入单个水印模板ID。可通过如下方式获取：
     * - 调用[AddWatermark](~~AddWatermark~~)接口添加图文水印模板后会返回。
     * - 调用[ListWatermark](~~ListWatermark~~)接口查询图文水印模板列表后会返回。
     * @example `9bcc8bfadb843f*****09a2671d0df97`
     */
    "WatermarkId": string;
}
