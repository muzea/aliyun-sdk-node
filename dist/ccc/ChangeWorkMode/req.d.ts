export interface ChangeWorkModeRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID，不填默认使用当前RAM账号映射的坐席。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * 设备ID，浏览器WebRTC软电话或实体话机设备的标识ID，同一时间只允许一种设备注册。
     * @example `ACC-YUNBS-1.0.10-****`
     */
    "DeviceId"?: string;
    /**
     * 工作模式。
     * @example `ON_SITE`
     */
    "WorkMode": string;
    /**
     * 需要签入的技能组列表。当修改工作模式到场外模式时，可以通过此参数指定场外座席需要签入的技能组列表。
     * @example `["online-1@ccc-test","online-2@ccc-test","online-3@ccc-test","skg-default@ccc-test"]`
     */
    "SignedSkillGroupIdList"?: string;
    /**
     * 坐席的个人电话号码，该号码在场外模式下会用到，坐席可以使用该号码进行场外模式接听。
     * @example `1382114****`
     */
    "Mobile"?: string;
}
