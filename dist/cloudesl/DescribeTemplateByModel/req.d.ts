export interface DescribeTemplateByModelRequest {
    /**
     * 价签尺寸
     * @example `200X200`
     */
    "EslSize"?: string;
    /**
     * 设备类型
     * @example `2`
     */
    "DeviceType"?: string;
    /**
     * 门店模板版本号；
     * @example `1.1.0`
     */
    "TemplateVersion"?: string;
    /**
     * 分页参数：当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页参数：每页显示条数。
     * @example `10`
     */
    "PageSize"?: number;
}
