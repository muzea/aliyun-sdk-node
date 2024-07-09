export interface ListNodeInstanceTypeRequest {
    /**
     * 产品类型。
     * @example `CloudApp`
     */
    "ProductType": string;
    /**
     * 需展示的查询结果页码。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页的查询结果数量。取值范围：1~100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 支持的操作系统类型。
     * @example `Windows`
     */
    "OsType"?: string;
    /**
     * 资源所属的地域ID。关于支持的地域详情，请参见[使用限制](~~426036~~)。
     * @example `cn-hangzhou`
     */
    "BizRegionId"?: string;
    /**
     * 语言类型。
     * @example `zh-CN`
     */
    "Language"?: string;
    /**
     * 指定要查询的资源规格类型。如果不填写，则返回所有规格类型。
     * @example `appstreaming.vgpu.4c8g.2g`
     */
    "NodeInstanceType"?: string;
}
