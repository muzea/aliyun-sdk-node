export interface AddCompanyTemplateRequest {
    /**
     * 使用场景，选择合适的使用场景
     * @example `NORMAL`
     */
    "Scene"?: string;
    /**
     * 系统扩展字段，请忽略；
     * @example `{}`
     */
    "ExtraParams"?: string;
    /**
     * 价签尺寸
     * @example `800X480`
     */
    "EslSize": string;
    /**
     * 模板名称
     * @example `促销`
     */
    "TemplateName": string;
    /**
     * 布局信息。
     * @example `1`
     */
    "Layout": number;
    /**
     * 门店模板版本；
     * @example `1.1.0`
     */
    "TemplateVersion": string;
    /**
     * 设备类型
     * @example `3`
     */
    "DeviceType": string;
    /**
     * 模板类型
     * @example `normal`
     */
    "TemplateType"?: string;
    /**
     * 是否促销，取值：-true：是。-false：否。
     * @example `true`
     */
    "IfPromotion"?: boolean;
    /**
     * 是否溯源，取值：-true：是。-false：否。
     * @example `true`
     */
    "IfSourceCode"?: boolean;
    /**
     * 是否默认模板，取值：-true：是。-false：否。
     * @example `true`
     */
    "IfDefault"?: boolean;
    /**
     * 是否会员，取值：-true：是。-false：否。
     * @example `true`
     */
    "IfMember"?: boolean;
    /**
     * 是否缺货，取值：-true：是。-false：否。
     */
    "IfOutOfInventory"?: boolean;
    /**
     * 设备厂商。
     * @example `ali`
     */
    "Vendor"?: string;
    /**
     * 模板组id
     * @example `9`
     */
    "GroupId"?: string;
    /**
     * 自定义模板ID
     * @example `大甩卖`
     */
    "TemplateSceneId"?: string;
}
