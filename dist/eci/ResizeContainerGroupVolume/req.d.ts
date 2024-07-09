export interface ResizeContainerGroupVolumeRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要扩容数据卷的ECI实例ID，即容器组ID。
     * @example `eci-2zelg8vwnlzdhf8hv****`
     */
    "ContainerGroupId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * ECI实例关联的数据卷名称。目前仅支持扩容阿里云云盘。
     * @example `default-volume1`
     */
    "VolumeName": string;
    /**
     * 扩容后的云盘容量大小。单位为GiB。取值范围：
     * - 高效云盘（cloud_efficiency）：20~32768
     * - SSD云盘（cloud_ssd）：20~32768
     * - ESSD云盘（cloud_essd）：20~32768
     * - 普通云盘（cloud）：5~2000
     * > 扩容后的云盘容量必须大于原有云盘容量。如果扩容指定的容量与原有云盘容量一致，则仅扩容文件系统。
     * @example `100`
     */
    "NewSize": number;
    "NeedDiskResize"?: boolean;
}
