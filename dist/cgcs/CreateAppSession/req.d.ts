export interface CreateAppSessionRequest {
    /**
     * 应用ID。
     * @example `13027XXXX`
     */
    "AppId": string;
    /**
     * 应用版本ID。
     * > 当您未指定生效版本时，默认应用最新版本。
     * @example `35067XXXX`
     */
    "AppVersion"?: string;
    /**
     * 自定义用户ID，最大长度不超过64个字符。
     * 用于业务对用户维度做相应的操作。
     * > 当应用类型为`end_game`、`hand_game`时，本参数必填。
     * @example `2YEF0XXXX`
     */
    "CustomUserId"?: string;
    /**
     * 自定义会话ID，保证请求幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。
     * > 支持ASCII字符，且不能超过64个字符。
     * @example `1ADE0XXXX`
     */
    "CustomSessionId": string;
    /**
     * 业务的客户端IP，比如云游戏场景中玩家的IP。
     * @example `192.168.XXX.XXX`
     */
    "ClientIp"?: string;
    /**
     * 启动参数。
     */
    "StartParameters"?: {
        /**
         * 目前支持的枚举值包括：
         * - startArgument：应用启动参数。
         * @example `startArgument`
         */
        Key: string;
        /**
         * key对应的取值。
         * @example `exampleValue`
         */
        Value: string;
    }[];
    /**
     * 系统信息，如客户端侧机型等信息。
     */
    "SystemInfo"?: {
        /**
         * key取值支持自定义。约定以下保留字：
         * - utdid：表示设备ID，可以帮助平台分析异常流量的特征和定位问题
         * @example `utdid`
         */
        Key: string;
        /**
         * key对应的取值。
         * @example `OE0usD+APXXXX`
         */
        Value: string;
    }[];
    /**
     * 按量付费模式按需生产资源的超时时间。
     * 取值范围 [900, 43200]秒，默认值1800。
     * @example `1800`
     */
    "Timeout"?: number;
    /**
     * 按量付费模式下创建会话时，是否按需生产资源。取值范围：
     * - true：是
     * - false：否，默认false
     * @example `false`
     */
    "EnablePostpaid"?: boolean;
    /**
     * 项目ID。如果已将应用关联到项目，创建会话时需填写正确的项目ID。
     * @example `d9a8****`
     */
    "ProjectId"?: string;
    /**
     * 适配文件ID。此功能灰度开放，如未约定使用请勿传入。
     * @example `501716211209548966XXXX`
     */
    "AdapterFileId"?: string;
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
}
