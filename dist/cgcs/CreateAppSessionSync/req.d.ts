export interface CreateAppSessionSyncRequest {
    /**
     * 应用ID。
     * @example `13027****`
     */
    "AppId": string;
    /**
     * 应用版本ID。
     * @example `35067****`
     */
    "AppVersion"?: string;
    /**
     * 自定义用户ID。用于存档的读取和保存。最大长度不超过64个字符。
     * > 当应用类型为`end_game`、`hand_game`时，本参数必填。
     * @example `2YEF0****`
     */
    "CustomUserId"?: string;
    /**
     * 自定义会话ID。
     * > 支持ASCII字符，且不能超过64个字符。
     * @example `1ADE0****`
     */
    "CustomSessionId": string;
    /**
     * 业务的客户端IP地址。
     * @example `192.168.XX.XX`
     */
    "ClientIp"?: string;
    /**
     * 业务定制参数。
     */
    "StartParameters"?: {
        /**
         * 目前支持的枚举值。取值为startArgument，表示应用启动参数。
         * @example `startArgument`
         */
        Key: string;
        /**
         * Key对应的取值。
         * @example `exampleValue`
         */
        Value: string;
    }[];
    /**
     * 系统信息。
     */
    "SystemInfo"?: {
        /**
         * 目前支持自定义。取值为utdid，表示设备ID。可以帮助平台分析异常流量的特征和定位问题。
         * @example `utdid`
         */
        Key: string;
        /**
         * Key对应的取值。
         * @example `OE0usD+AP****`
         */
        Value: string;
    }[];
    /**
     * 自定义标签。
     */
    "Tags"?: {
        /**
         * 标签键。最长64个字符。
         * @example `exampleTag`
         */
        Key: string;
        /**
         * Key对应的取值。
         * @example `exampleValue`
         */
        Value: string;
    }[];
    /**
     * 项目ID。
     * @example `d9a8****`
     */
    "ProjectId"?: string;
    /**
     * 区域ID。取值：
     * - huadong
     * - xinan
     * - huanan
     * - huabei
     * - huazhong
     * @example `huadong`
     */
    "DistrictId"?: string;
    /**
     * 资源匹配的规则信息，支持多个； 规则越多找到合适资源的耗时越长。
     */
    "MatchRules"?: {
        /**
         * 规则类型。取值：
         * - in：匹配携带指定 Key 和 Value 的资源。
         * - notIn： 匹配不携带指定 Key 和 Value 的资源。
         * @example `in`
         */
        Type: string;
        /**
         * 资源提供的标签名称。
         * 取值：component，组件版本；指定组件版本时，只会用带有指定组件版本的资源启动会话。
         * @example `component`
         */
        Key: string;
        /**
         * 需要匹配的标签值。
         */
        Values: string[];
    }[];
    /**
     * 适配文件ID。此功能灰度开放，如未约定使用请勿传入。
     * @example `501716211209548966XXXX`
     */
    "AdapterFileId"?: string;
}
