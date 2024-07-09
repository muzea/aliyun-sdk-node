export interface DescribeShadowSchemaRequest {
    /**
     * 机型
     * @example `model_2nd`
     */
    "DeviceModel": string;
    /**
     * 是否不返回描述信息
     * @example `false`
     */
    "IsSimple"?: boolean;
    /**
     * 项目ID
     * @example `PIC3UA0V`
     */
    "ProjectId": string;
}
