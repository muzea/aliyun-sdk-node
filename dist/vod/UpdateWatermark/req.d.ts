export interface UpdateWatermarkRequest {
    /**
     * 修改的水印模板名称。
     * - 只支持中英文、数字。
     * - 长度不超过128个字节。
     * - UTF-8编码。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 需要修改的图文水印模板ID，仅支持传入单个水印模板ID。可通过如下方式获取：
     * - 调用[AddWatermark](~~AddWatermark~~)接口添加图文水印模板后会返回。
     * - 调用[ListWatermark](~~ListWatermark~~)接口查询图文水印模板列表后会返回。
     * @example `af2afe4761992c*****bd947dae97337`
     */
    "WatermarkId": string;
    /**
     * 图文水印的配置信息（JSON字符串），包括水印显示位置、水印效果等配置。图片水印和文字水印的配置参数不同，参数结构详情，请参见[WatermarkConfig](~~98618#section-h01-44s-2lr~~) 。
     * >暂不支持跨模板类型修改，您可以调用[GetWatermark](~~GetWatermark~~)接口查询水印模板所属类型后，再进行修改配置。
     * @example `{"Width":"55","Height":"55","Dx":"9","Dy":"9","ReferPos":"BottomLeft"}`
     */
    "WatermarkConfig": string;
}
