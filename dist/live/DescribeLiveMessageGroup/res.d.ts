export interface DescribeLiveMessageGroupResponse {
    /**
     * 请求ID。
     * @example `1815A27D-BAE2-10E6-89FD-D477951C67C7`
     */
    RequestId: string;
    /**
     * 群组ID。
     * @example `grouptest1`
     */
    GroupId: string;
    /**
     * 创建者ID。
     * @example `uid1`
     */
    CreatorId: string;
    /**
     * 管理员列表。
     */
    AdminList: string[];
    /**
     * 创建时间，用UNIX时间戳表示，单位：秒。
     * @example `1698305471`
     */
    Createtime: number;
    /**
     * 群组名。
     * @example `mytestgroup`
     */
    GroupName: string;
    /**
     * 群组扩展信息。
     * @example `testgroupinfo`
     */
    GroupInfo: string;
    /**
     * 是否已删除。
     * @example `false`
     */
    Delete: boolean;
    /**
     * 总Session次数。
     * @example `50`
     */
    TotalTimes: number;
    /**
     * 当前在线的群用户数。
     * @example `2`
     */
    OnlineUserCounts: number;
    /**
     * 消息数分类统计。
     */
    MsgAmount: any;
    /**
     * 删除时间。
     * @example `1698299827`
     */
    Deletatime: number;
    /**
     * 删除者。
     * @example `uid1`
     */
    Deletor: string;
}
