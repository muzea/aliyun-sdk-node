export interface DeprovisionAccessConfigurationRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 访问配置ID。
     * @example `ac-00jhtfl8thteu6uj****`
     */
    "AccessConfigurationId": string;
    /**
     * 任务目标类型。取值：RD-Account，表示任务目标类型为RD账号。
     * @example `RD-Account`
     */
    "TargetType": string;
    /**
     * 任务目标ID。
     * @example `114240524784****`
     */
    "TargetId": string;
}
