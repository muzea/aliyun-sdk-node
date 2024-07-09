export interface DescribeAlertSceneResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 告警类型展示值，随中英文环境变化。
         * @example `unusual login`
         */
        AlertType: string;
        /**
         * 告警类型标识。
         * @example `unusual login`
         */
        AlertTypeId: string;
        /**
         * 告警名称展示值，随中英文环境变化。
         * @example `login_common_ip`
         */
        AlertName: string;
        /**
         * 告警名称标识。
         * @example `login_common_ip`
         */
        AlertNameId: string;
        /**
         * 告警标题展示值，随中英文环境变化。
         * @example `unusual login-login_common_ip`
         */
        AlertTile: string;
        /**
         * 告警标题标识。
         * @example `unusual login-login_common_ip`
         */
        AlertTileId: string;
        /**
         * 加白对象。
         * @example `[{"Type": "host_uuid","Value": "441862da-a539-4cc0-a00d-473955826881","Values": ["441862da-a539-4cc0-a00d-473955826881"],"Name": "${aliyun.siem.entity.host_uuid}"}]`
         */
        Targets: {
            /**
             * 可以加白的实体属性字段。
             * @example `host_uuid`
             */
            Type: string;
            /**
             * 可以加白的实体属性字段展示名。
             * @example `HOST UUID`
             */
            Name: string;
            /**
             * 加白规则默认展示的右值。
             * @example `441862da-a539-4cc0-a00d-47395582****`
             */
            Value: string;
            /**
             * 加白规则可选的右值。
             * @example `["441862da-a539-4cc0-a00d-473955826881"]`
             */
            Values: string[];
        }[];
    }[];
    /**
     * 请求是否成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AAA9ED9-78F4-5021-86DC-D51C7511****`
     */
    RequestId: string;
}
