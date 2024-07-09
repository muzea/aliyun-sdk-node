export interface CreateDeviceBrandRequest {
    /**
     * 项目ID
     * @example `projectTest`
     */
    "ProjectId"?: string;
    /**
     * 品牌名称
     * @example `TmallGenius`
     */
    "BrandName": string;
    /**
     * 厂商名称
     * @example `Alibaba`
     */
    "Manufacture"?: string;
    /**
     * 品牌描述
     * @example `天猫精灵`
     */
    "Description"?: string;
}
