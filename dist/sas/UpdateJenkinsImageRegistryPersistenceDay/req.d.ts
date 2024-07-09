export interface UpdateJenkinsImageRegistryPersistenceDayRequest {
    /**
     * 镜像仓ID。
     * >调用[PageImageRegistry](~~PageImageRegistry~~)接口可以获取该参数。
     * @example `25363`
     */
    "RegistryId"?: number;
    /**
     * 保留周期。单位：天。
     * @example `30`
     */
    "PersistenceDay"?: number;
    /**
     * 访问源的IP地址。
     * @example `106.11.XXX.XXX`
     */
    "SourceIp"?: string;
}
