export interface ModifyLiveMessageGroupRequest {
    /**
     * 应用ID。
     * @example `demo`
     */
    "AppId": string;
    /**
     * 群组ID。
     * @example `grouptest`
     */
    "GroupId": string;
    /**
     * 是否修改群组管理员。
     * @example `true`
     */
    "ModifyAdmin"?: boolean;
    /**
     * 修改后的管理员列表。
     */
    "AdminList"?: string[];
    /**
     * 是否修改群组扩展信息。
     * @example `true`
     */
    "ModifyInfo"?: boolean;
    /**
     * 修改后的群组扩展信息，长度不超过32KB。
     * @example `newmeta`
     */
    "GroupInfo"?: string;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前支持上海（取值为cn-shanghai)、新加坡（取值为ap-southeast-1）。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
