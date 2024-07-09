export interface InstallAddonRequest {
    /**
     * Addon名称。
     * @example `mysql`
     */
    "Name": string;
    /**
     * Addon版本。
     * @example `0.0.1`
     */
    "AddonVersion": string;
    /**
     * 语言环境，默认为中文 zh | en。
     * @example `zh`
     */
    "AliyunLang"?: string;
    /**
     * 环境ID。
     * @example `env-xxx`
     */
    "EnvironmentId": string;
    /**
     * 输入的元数据。
     * @example `{"host":"mysql-service.default","port":3306,"username":"root","password":"roots"}`
     */
    "Values"?: string;
    /**
     * 安装后的插件名称，如果不指定则生成默认规则名称。
     * @example `mysql-xxxxx`
     */
    "ReleaseName"?: string;
    /**
     * 是否试运行，默认为false。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
