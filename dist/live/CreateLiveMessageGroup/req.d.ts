export interface CreateLiveMessageGroupRequest {
    /**
     * 应用ID。
     * @example `demo`
     */
    "AppId": string;
    /**
     * 要创建的群组ID，业务应保证群组ID唯一，由大小写字母、数字组成，长度不超过64字节。
     * @example `grouptest`
     */
    "GroupId": string;
    /**
     * 群组名，长度不超过128字节。
     * @example `mytestgroup`
     */
    "GroupName"?: string;
    /**
     * 群组扩展信息，长度不超过32KB。
     * @example `testgroupinfo`
     */
    "GroupInfo"?: string;
    /**
     * 管理员用户ID列表。
     */
    "Administrators"?: string[];
    /**
     * 群组创建者ID，由大小写字母、数字组成，长度不超过64字节。
     * @example `uid1`
     */
    "CreatorId"?: string;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致, 当前支持上海（取值为cn-shanghai)、新加坡（取值为ap-southeast-1）。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
