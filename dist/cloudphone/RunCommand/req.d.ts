export interface RunCommandRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待执行命令的实例ID。 <br> N的范围：1~10
     */
    "InstanceId"?: string[];
    /**
     * 待执行的命令
     * <br>
     * 最大长度为1024字节，只支持大小写字母、数字、下划线（_）、点（.）、斜线（/）、冒号（:）、中划线（-）。
     * @example `ls -al /`
     */
    "Command": string;
}
