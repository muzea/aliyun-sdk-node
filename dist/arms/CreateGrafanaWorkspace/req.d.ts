export interface CreateGrafanaWorkspaceRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Grafana工作区名称。
     * @example `testgrafana`
     */
    "GrafanaWorkspaceName": string;
    /**
     * 版本。
     * **枚举值：**
     * - standard：内测版（`内测版、标准版`）。
     * - personal_edition：开发者版。
     * - experts_edition：专家版。
     * - advanced_edition：高级版。
     * @example `experts_edition`
     */
    "GrafanaWorkspaceEdition": string;
    /**
     * Grafana工作区描述。
     * @example `test`
     */
    "Description"?: string;
    /**
     * Grafana版本。
     * @example `10.0.x`
     */
    "GrafanaVersion": string;
    /**
     * 实例的密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：()`~!@#$%^&*-_+=
     * @example `Test123456!`
     */
    "Password"?: string;
    /**
     * Prometheus实例的资源组ID。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 语言环境（若不填，默认为 zh）：
     * - zh
     * - en
     * @example `zh`
     */
    "AliyunLang"?: string;
    /**
     * 标签。
     */
    "Tags"?: {
        /**
         * 标签键。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
