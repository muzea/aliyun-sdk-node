export interface DeleteLiveMessageGroupRequest {
    /**
     * 应用ID。
     * @example `demo`
     */
    "AppId": string;
    /**
     * 要删除的群组ID。
     * @example `grouptest`
     */
    "GroupId": string;
    /**
     * 操作者ID，由大小写字母、数字组成，长度不超过64字节，后台会记录操作者ID。
     * @example `uid1`
     */
    "OperatorId"?: string;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前支持上海（取值为cn-shanghai)、新加坡（取值为ap-southeast-1）。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
