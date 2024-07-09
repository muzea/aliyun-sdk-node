export interface SaveSingleTaskForSaveArtExtensionRequest {
    /**
     * 域名。
     * @example `test.art`
     */
    "DomainName": string;
    /**
     * 艺术品分类。
     * @example `The embroidery`
     */
    "ObjectType"?: string;
    /**
     * 材质与工艺。
     * @example `silk`
     */
    "MaterialsAndTechniques"?: string;
    /**
     * 尺寸。
     * @example `20 cm`
     */
    "Dimensions"?: string;
    /**
     * 名称。
     * @example `Peace and friendship`
     */
    "Title"?: string;
    /**
     * 创作时间。
     * @example `2019-10-01`
     */
    "DateOrPeriod"?: string;
    /**
     * 艺术家、创作者。
     * @example `zhang san`
     */
    "Maker"?: string;
    /**
     * 题词和标识。
     * @example `realism`
     */
    "InscriptionsAndMarkings"?: string;
    /**
     * 艺术主题。
     * @example `peace`
     */
    "Subject"?: string;
    /**
     * 艺术特征。
     * @example `iconicity`
     */
    "Features"?: string;
    /**
     * 参考。
     * @example `drawings`
     */
    "Reference"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文；
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
}
