export interface UpdateJenkinsImageRegistryNameRequest {
    /**
     * 镜像仓ID。
     * >调用[PageImageRegistry](~~PageImageRegistry~~)接口可以获取该参数。
     * @example `25090`
     */
    "RegistryId"?: number;
    /**
     * 镜像仓名称。
     * @example `a0603tk1`
     */
    "RegistryName"?: string;
    /**
     * 访问源的IP地址。
     * @example `121.33.XXX.XXX`
     */
    "SourceIp"?: string;
}
