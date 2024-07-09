export interface ListInstancesRequest {
    /**
     * 云手机实例所在的地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云手机实例ID，N的取值范围：1~100。
     * @example `cp-xxxxxxxxxx`
     */
    "InstanceId"?: string[];
    /**
     * 云手机实例名称。
     * @example `phone`
     */
    "InstanceName"?: string;
    /**
     * 实例状态。取值范围：
     * - Pending：创建中
     * - Running：运行中
     * - Starting：启动中
     * - Stopping：停止中
     * - Stopped：已停止
     * - Expired: 已过期
     * @example `Running`
     */
    "Status"?: string;
    /**
     * 密钥对名称。必须保持名称唯一性。 长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `testKeyPairName`
     */
    "KeyPairName"?: string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值，初次调用无需配置。
     * @example `ADBAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 返回的最大数，取值范围：1~100。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 云手机所在可用区。
     * @example `cn-hangzhou-i`
     */
    "ZoneId"?: string;
    /**
     * 云手机使用的分辨率。
     * @example `1920*1080`
     */
    "Resolution"?: string;
    /**
     * 付费类型，支持预付费和后付费，可选值：
     * - PrePaid 预付费
     * - PostPaid 后付费
     * @example `PostPaid`
     */
    "ChargeType"?: string;
    /**
     * 实例规格。
     * @example `ecp.ce.large`
     */
    "InstanceType"?: string;
    /**
     * 镜像ID。
     * @example `cpm-xxxxxxxxx`
     */
    "ImageId"?: string;
    /**
     * 查询结果中是否返回webRtcToken。
     * @example `false`
     */
    "ShowWebRtcToken"?: boolean;
    /**
     * 根据指定的标签筛选实例。
     */
    "Tag"?: {
        /**
         * 实例的标签键。N的取值范围为1~20。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 实例的标签值。N的取值范围为1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 查询资源时的筛选条件列表。
     */
    "Filter"?: {
        /**
         * 查询实例时的筛选键。取值范围：
         * - 当该参数取值为ExpiredStartTime时，可以查询指定过期时间点（Filter.N.Value）后创建的资源信息。
         * - 当该参数取值为ExpiredEndTime时，可以查询在指定过期时间点（Filter.N.Value）前创建的资源信息。
         * - 当该参数取值为CreationStartTime时，可以查询在指定创建时间点（Filter.N.Value）后创建的资源信息。
         * - 当该参数取值为CreationEndTime时，可以查询在指定过期时间点（Filter.N.Value）前创建的资源信息。
         * @example `ExpiredStartTime`
         */
        Key: string;
        /**
         * 查询实例时的筛选值。指定该参数时必须同时指定Filter.N.Key参数，格式为:yyyy-MM-ddTHH:mmZ，采用UTC+0时区。
         * @example `2023-11-05T00:00Z`
         */
        Value: string;
    }[];
}
