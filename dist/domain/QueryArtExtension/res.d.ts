export interface QueryArtExtensionResponse {
    /**
     * 艺术品分类。
     * @example `The embroidery`
     */
    ObjectType: string;
    /**
     * 材质与工艺。
     * @example `silk`
     */
    MaterialsAndTechniques: string;
    /**
     * 题词和标识。
     * @example `realism`
     */
    InscriptionsAndMarkings: string;
    /**
     * 唯一请求识别码。
     * @example `814B2AF0-ED6F-4C13-B41C-8AC0B1023583`
     */
    RequestId: string;
    /**
     * 参考。
     * @example `drawings`
     */
    Reference: string;
    /**
     * 创作时间。
     * @example `2019-10-01`
     */
    DateOrPeriod: string;
    /**
     * 尺寸。
     * @example `20 cm`
     */
    Dimensions: string;
    /**
     * 名称。
     * @example `Peace and friendship`
     */
    Title: string;
    /**
     * 艺术特征。
     * @example `iconicity`
     */
    Features: string;
    /**
     * 艺术主题。
     * @example `peace`
     */
    Subject: string;
    /**
     * 艺术家、创作者。
     * @example `zhang san`
     */
    Maker: string;
}
