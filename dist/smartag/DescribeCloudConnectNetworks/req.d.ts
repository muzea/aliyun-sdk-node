export interface DescribeCloudConnectNetworksRequest {
    /**
     * 云连接网实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 云连接网实例名称。
     * 名称长度为2~100个字符，以大小写字母或中文开头，可包含数字、下划线（_）、半角句号（.）和短划线（-）。
     * @example `ccnname`
     */
    "Name"?: string;
    /**
     * 云连接网实例ID。
     * @example `ccn-l9340rlu5enst*****`
     */
    "CcnId"?: string;
    /**
     * 分页查询时每页包含的条目数，默认值为**10**，最大值为**50**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询页码，默认值是**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 通过标签信息查找云连接网实例。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `test`
         */
        Key: string;
        /**
         * 标签值。
         * @example `test`
         */
        Value: string;
    }[];
}
