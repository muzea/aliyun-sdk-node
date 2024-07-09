export interface ListProjectsRequest {
    /**
     * 租户ID
     * @example `549532154333697`
     */
    "tenantId"?: string;
    /**
     * 地域。
     * @example `cn-beijing`
     */
    "region"?: string;
    /**
     * Quota名称。
     * @example `quotaA`
     */
    "quotaNickName"?: string;
    /**
     * 这是quota 在maxcompute 内部的标识，与quotaNickname有区别。quotaNickname 是用户设置的，quotaName 是系统自动生成的。这个字段仅用于描述数据通道quota。
     * @example `"hsajkdgbkaubh"`
     */
    "quotaName"?: string;
    /**
     * 限定返回的资源名称，名称必须以Prefix作为前缀，例如Prefix是a，则返回的资源名均是以a开始的。
     * @example `a`
     */
    "prefix"?: string;
    /**
     * 设定结果从marker之后按字母排序的第一个开始返回。
     * @example `cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==`
     */
    "marker"?: string;
    /**
     * 每页返回的最大结果数。
     * @example `10`
     */
    "maxItem"?: number;
    /**
     * 描述了MaxCompute quota 对象的标识，这个标识与阿里云售卖账单中的标识是一致的。实际使用与标签场景下。
     * @example `"aaaa-bbbb"`
     */
    "saleTags"?: string;
    /**
     * 这个type 用于描述内部项目和外部项目。"external“ 表示外部项目，用于湖仓一体场景下。"managed" 表示内部项目。
     * @example `"managed"`
     */
    "type"?: string;
    /**
     * 是否列出SystemCatalog。
     * @example `true`
     */
    "listSystemCatalog"?: boolean;
}
