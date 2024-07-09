export interface CreatePropertyRequest {
    /**
     * 属性名。
     * @example `department`
     */
    "PropertyKey": string;
    /**
     * 属性值。一个属性下最多可以添加50个不同的属性值。
     */
    "PropertyValues"?: string[];
}
